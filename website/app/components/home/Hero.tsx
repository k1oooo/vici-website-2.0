import { ArrowRight } from "lucide-react";
import Button from "../Button";
import Container from "../Container";

export default function Hero() {
  return (
    <section className="bg-surface text-on-surface">
      <Container className="flex flex-col items-center py-24 text-center md:py-36">
        <p className="type-eyebrow text-paper/80">
          A technology partner for growing businesses
        </p>

        <h1 className="type-display mt-6 max-w-4xl">
          We help you build the technology behind your{" "}
          <span className="whitespace-nowrap">
            growth
            <span
              aria-hidden
              className="ml-[0.06em] inline-block size-[0.14em] bg-burnt-orange"
            />
          </span>
        </h1>

        <p className="type-lead mt-8 max-w-2xl text-paper/85">
          From custom software to the systems and infrastructure that run it,
          we set up your whole technology environment, with a small team you
          work with directly.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button href="#contact" variant="primary" tone="on-dark" size="lg">
            Start a Project
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Button>
          <Button href="#process" variant="secondary" tone="on-dark" size="lg">
            See how we work
          </Button>
        </div>
      </Container>
    </section>
  );
}
