import Image from "next/image";
import AppointmentForm from "@/components/AppointmentForm";

const services = [
  {
    name: "General Checkup",
    description: "Comprehensive health assessments for all life stages.",
    price: "Rs 700"
  },
  {
    name: "Vaccination Package",
    description: "Core and optional vaccinations tailored to your pet.",
    price: "Rs 1,500"
  },
  {
    name: "Dental Care",
    description: "Oral exams, cleaning, and preventive dental treatment.",
    price: "Rs 2,000"
  },
  {
    name: "Emergency Visit",
    description: "Priority urgent care with rapid triage and treatment.",
    price: "Rs 2,800"
  }
];

const testimonials = [
  {
    quote:
      "The doctors were calm, professional, and very kind with our Labrador. Exceptional service.",
    author: "Aarav S."
  },
  {
    quote:
      "Clean clinic, clear communication, and fair prices. We trust them fully with our cats.",
    author: "Riya M."
  },
  {
    quote:
      "They handled an emergency beautifully and kept us informed at every step.",
    author: "Nikhil P."
  }
];

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" }
];

export default function Home() {
  return (
    <main className="pb-20">
      <div className="bg-clinicBlue text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 text-sm md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-clinicLightBlue">Instagram</a>
            <a href="#" className="hover:text-clinicLightBlue">Facebook</a>
            <a href="#" className="hover:text-clinicLightBlue">YouTube</a>
          </div>
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
            <span>Phone: 0720.123.123</span>
            <span>Rajendra nagar, Indore</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#home" className="text-xl font-bold tracking-wide text-clinicBlue">PAWS & FAMILY VET CLINIC</a>
          <nav className="hidden gap-5 text-sm font-medium text-slate-700 md:flex">
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-clinicBlue">{item.label}</a>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="bg-gradient-to-br from-clinicLightBlue to-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-clinicBlue">Professional Veterinary Care</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">Trusted Family Vet Clinic for Every Paw and Whisker</h1>
            <p className="mt-4 max-w-xl text-slate-700">Elegant, compassionate, and advanced care for pets in Indore. We combine expert diagnostics with a warm, family-first experience.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Image src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=900&q=80" alt="Vet with a dog" width={420} height={260} className="h-40 w-full rounded-xl object-cover shadow-md" />
              <Image src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80" alt="Happy pet in clinic" width={420} height={260} className="h-40 w-full rounded-xl object-cover shadow-md" />
            </div>
          </div>
          <AppointmentForm />
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-clinicBlue">Services</h2>
        <p className="mt-2 text-slate-600">We offer preventive, diagnostic, and urgent care services for family pets.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.name} className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{service.name}</h3>
              <p className="mt-2 text-slate-600">{service.description}</p>
              <p className="mt-4 text-sm font-semibold text-clinicBlue">Starting at {service.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-clinicBlue">Pricing</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-clinicBlue text-white">
                <tr><th className="px-4 py-3">Service</th><th className="px-4 py-3">Description</th><th className="px-4 py-3">Price</th></tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.name} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-900">{service.name}</td>
                    <td className="px-4 py-3 text-slate-600">{service.description}</td>
                    <td className="px-4 py-3 font-semibold text-clinicBlue">{service.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-clinicBlue">Testimonials</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.author} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-700">&quot;{item.quote}&quot;</p>
              <p className="mt-4 font-semibold text-clinicBlue">- {item.author}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="location" className="bg-clinicLightBlue py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-clinicBlue">Find Us</h2>
          <p className="mt-2 text-slate-700">Rajendra nagar, Indore</p>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-300 shadow-md">
            <iframe title="Rajendra nagar, Indore map" src="https://www.google.com/maps?q=Rajendra%20nagar%2C%20Indore&output=embed" width="100%" height="380" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer id="contact" className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
        <p className="font-semibold text-slate-900">Paws & Family Vet Clinic</p>
        <p className="mt-1">Rajendra nagar, Indore</p>
        <p>Phone: 0720.123.123</p>
      </footer>

      <a href="tel:0720123123" className="fixed bottom-0 left-0 right-0 z-50 bg-clinicBlue px-4 py-3 text-center text-sm font-semibold text-white shadow-lg">0720.123.123 - call to make an appointment</a>
    </main>
  );
}
