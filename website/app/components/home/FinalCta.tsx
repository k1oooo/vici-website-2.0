import Link from "next/link";
import { ArrowRight, Lightbulb, Rocket, Wrench } from "lucide-react";
import Container from "../Container";

// Lightweight qualification instead of one generic form.
const OPTIONS = [
  { icon: Rocket, label: "Building something new", need: "new" },
  { icon: Wrench, label: "Improving existing systems", need: "improve" },
  { icon: Lightbulb, label: "Not sure yet", need: "unsure" },
];

export default function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-20 bg-surface text-on-surface">
      <Container className="py-20 md:py-28">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Tell us where you are. We will help with the next step.
          </h2>
          <p className="mt-6 text-lg leading-relaxed opacity-85 md:text-xl">
            You will work directly with the people building it, not get routed
            through account managers. What best describes you?
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {OPTIONS.map(({ icon: Icon, label, need }) => (
            <li key={need}>
              <Link
                href={`/contact?need=${need}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-on-surface/30 p-6 transition-colors hover:border-on-surface hover:bg-on-surface/10"
              >
                <span className="flex items-center gap-4 text-lg font-bold">
                  <Icon aria-hidden className="size-6 shrink-0" />
                  {label}
                </span>
                <ArrowRight
                  aria-hidden
                  className="size-5 shrink-0 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
