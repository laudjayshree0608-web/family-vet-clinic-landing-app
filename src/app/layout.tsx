import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paws & Family Vet Clinic",
  description: "Professional family vet clinic in Rajendra Nagar, Indore"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
