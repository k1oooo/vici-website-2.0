import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../Container";

export default function Hero() {
  return (
    <section className="bg-surface text-on-surface">
      <Container className="flex flex-col items-center py-24 text-center md:py-36">
        <p className="text-sm font-bold uppercase tracking-wider opacity-70">
          A technology partner for growing businesses
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          We help you build the technology behind your growth
          <span
            aria-hidden
            className="ml-2 inline-block size-[0.14em] bg-burnt-orange"
          />
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-85 md:text-xl">
          From custom software to the systems and infrastructure that run it,
          we set up your whole technology environment, with a small team you
          work with directly.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-off-white px-7 py-3.5 text-base font-bold text-deep-blue transition-colors hover:bg-accent"
          >
            Start a Project
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="#process"
            className="inline-flex items-center rounded-full border border-on-surface/40 px-7 py-3.5 text-base font-bold transition-colors hover:border-on-surface hover:bg-on-surface/10"
          >
            See how we work
          </Link>
        </div>
      </Container>
    </section>
  );
}
