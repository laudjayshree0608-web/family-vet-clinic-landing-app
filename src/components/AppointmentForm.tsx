"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(data.message ?? "Unable to send request.");
      }

      setStatus("success");
      setFeedback("Your appointment request has been sent.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Failed to submit request.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
      <h3 className="text-xl font-semibold text-clinicBlue">Book an Appointment</h3>
      <p className="mt-1 text-sm text-slate-600">Fill in your details and our team will contact you shortly.</p>
      <div className="mt-4 grid gap-3">
        <input name="name" required placeholder="Name" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-clinicBlue" />
        <input name="phone" required placeholder="Phone" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-clinicBlue" />
        <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-clinicBlue" />
        <textarea name="message" required placeholder="Message" rows={4} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-clinicBlue" />
      </div>

      <button type="submit" disabled={status === "loading"} className="mt-4 w-full rounded-lg bg-clinicBlue px-4 py-2 font-medium text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60">
        {status === "loading" ? "Sending..." : "Send"}
      </button>

      {feedback && <p className={`mt-3 text-sm ${status === "success" ? "text-emerald-700" : "text-red-600"}`}>{feedback}</p>}
    </form>
  );
}
