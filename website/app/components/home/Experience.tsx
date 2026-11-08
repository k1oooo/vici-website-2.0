import { FileText, Server, Users } from "lucide-react";
import Container from "../Container";

// Framed as founder/team technical experience, not Vici client work.
const WORK = [
  {
    icon: FileText,
    title: "AI-powered document generation",
    summary:
      "A tool that uses AI to generate and automate business documents.",
  },
  {
    icon: Users,
    title: "HR management system",
    summary:
      "A system covering leave, claims, payroll and the employee directory in one place.",
  },
  {
    icon: Server,
    title: "Internal server setup",
    summary:
      "A company's internal server environment, set up and configured for its own systems.",
  },
];

export default function Experience() {
  return (
    <section id="projects" className="scroll-mt-20">
      <Container className="py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider opacity-70">
            Our experience
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            What the team has built
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            Hands-on work across software, AI and infrastructure, delivered by
            a Vici founder in a previous engineering role. These are not Vici
            client projects.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {WORK.map(({ icon: Icon, title, summary }) => (
            <li
              key={title}
              className="rounded-2xl border border-deep-blue/20 p-8"
            >
              <Icon aria-hidden className="size-8" />
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-relaxed opacity-80">{summary}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
