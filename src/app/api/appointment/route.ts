import { NextResponse } from "next/server";

type AppointmentPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as AppointmentPayload;
  const { name, phone, email, message } = body;

  if (!name || !phone || !email || !message) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CLINIC_EMAIL_TO;
  const fromEmail = process.env.CLINIC_EMAIL_FROM;

  if (!resendApiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      {
        message:
          "Email service is not configured. Add RESEND_API_KEY, CLINIC_EMAIL_TO and CLINIC_EMAIL_FROM."
      },
      { status: 500 }
    );
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New Appointment Request: ${name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })
  });

  if (!resendResponse.ok) {
    let providerMessage = "Failed to send appointment request email.";

    try {
      const errorBody = (await resendResponse.json()) as {
        message?: string;
        error?: string;
        name?: string;
      };

      providerMessage =
        errorBody.message ??
        errorBody.error ??
        errorBody.name ??
        providerMessage;
    } catch {
      // Keep the fallback message if Resend returns a non-JSON body.
    }

    return NextResponse.json(
      { message: providerMessage },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Appointment request submitted." });
}
