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
          <p className="type-eyebrow text-ink/70">How we work</p>
          <h2 className="type-h2 mt-4">A clear process, with no black box</h2>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, body }, index) => (
            <li key={title}>
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-surface text-on-surface">
                  <Icon aria-hidden className="size-5" />
                </span>
                <span className="type-label tabular-nums text-ink/65">
                  0{index + 1}
                </span>
              </div>
              <h3 className="type-h3 mt-5">{title}</h3>
              <p className="type-body mt-3 text-ink/75">{body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
