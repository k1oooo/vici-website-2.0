import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import Container from "../Container";
import { SERVICES } from "../../data/site";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-deep-blue/5">
      <Container className="py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider opacity-70">
            Services
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            One technology partner for your whole tech ecosystem
          </h2>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ slug, title, summary, icon: Icon }) => (
            <li key={slug}>
              <Link
                href={`/services/${slug}`}
                className="group flex h-full flex-col rounded-2xl bg-off-white p-8 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(30,64,175,0.35)]"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-surface text-on-surface">
                  <Icon aria-hidden className="size-6" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 flex-1 leading-relaxed opacity-80">
                  {summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold">
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
              <span className="flex size-12 items-center justify-center rounded-xl bg-off-white text-deep-blue">
                <Lightbulb aria-hidden className="size-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold">Not sure where to start?</h3>
              <p className="mt-3 flex-1 leading-relaxed opacity-85">
                Tell us about your situation. We will help you work out what to
                build, set up or fix first.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-bold">
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
