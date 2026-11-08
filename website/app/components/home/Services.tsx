import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import Container from "../Container";
import { SERVICES } from "../../data/site";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-deep-blue/5">
      <Container className="py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="type-eyebrow text-ink/70">Services</p>
          <h2 className="type-h2 mt-4">
            One technology partner for your whole tech ecosystem
          </h2>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ slug, title, summary, icon: Icon }) => (
            <li key={slug}>
              <Link
                href={`/services/${slug}`}
                className="group flex h-full flex-col rounded-2xl bg-off-white p-8 text-ink transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(10,10,10,0.3)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-surface text-on-surface">
                  <Icon aria-hidden className="size-6" />
                </span>
                <h3 className="type-h3 mt-6">{title}</h3>
                <p className="type-body mt-3 flex-1 text-ink/75">{summary}</p>
                <span className="type-label mt-6 inline-flex items-center gap-2">
                  Learn more
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="#contact"
              className="group flex h-full flex-col rounded-2xl bg-surface p-8 text-on-surface"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-paper text-ink">
                <Lightbulb aria-hidden className="size-6" />
              </span>
              <h3 className="type-h3 mt-6">Not sure where to start?</h3>
              <p className="type-body mt-3 flex-1 text-paper/85">
                Tell us about your situation. We will help you work out what to
                build, set up or fix first.
              </p>
              <span className="type-label mt-6 inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}
