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
          <h2 className="type-h2">
            Tell us where you are. We will help with the next step.
          </h2>
          <p className="type-lead mt-6 text-paper/85">
            You will work directly with the people building it, not get routed
            through account managers. What best describes you?
          </p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {OPTIONS.map(({ icon: Icon, label, need }) => (
            <li key={need}>
              <Link
                href={`/contact?need=${need}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-paper/30 p-6 transition-colors hover:border-paper hover:bg-paper/10"
              >
                <span className="type-h3 flex items-center gap-4">
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
