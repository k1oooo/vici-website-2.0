import { Compass, Hammer, LifeBuoy, MessageSquare } from "lucide-react";
import Container from "../Container";

const STEPS = [
  {
    icon: MessageSquare,
    title: "Understand",
    body: "We start by listening: your business, the tools you use today, and where things get stuck.",
  },
  {
    icon: Compass,
    title: "Plan",
    body: "We agree what to build or set up first, and the solutions architecture behind it, before any work starts.",
  },
  {
    icon: Hammer,
    title: "Build",
    body: "You work directly with the people building it, not through account managers.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    body: "After launch we stay available for technical support and maintenance, so nothing becomes a black box.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-deep-blue/5">
      <Container className="py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider opacity-70">
            How we work
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            A clear process, with no black box
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, body }, index) => (
            <li key={title}>
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-surface text-on-surface">
                  <Icon aria-hidden className="size-5" />
                </span>
                <span className="text-sm font-bold opacity-60">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-relaxed opacity-80">{body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
