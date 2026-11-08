import { MapPin, ShieldCheck } from "lucide-react";
import Container from "../Container";
import { COMPANY } from "../../data/site";

const STACK = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"];

export default function TrustStrip() {
  return (
    <section aria-label="Company details" className="border-b border-deep-blue/15">
      <Container className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
        <ul className="flex flex-col gap-3 text-[15px] font-bold sm:flex-row sm:flex-wrap sm:gap-x-8">
          <li className="flex items-center gap-2">
            <ShieldCheck aria-hidden className="size-5 shrink-0" />
            SSM Reg. No. {COMPANY.ssm}
          </li>
          <li className="flex items-center gap-2">
            <MapPin aria-hidden className="size-5 shrink-0" />
            Kuala Lumpur-based
          </li>
        </ul>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px]">
          <span className="opacity-60">Built with</span>
          {STACK.map((name) => (
            <span key={name} className="font-bold">
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
