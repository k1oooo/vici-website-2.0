import {
  BrainCircuit,
  Code,
  Compass,
  Globe,
  ServerCog,
  type LucideIcon,
} from "lucide-react";

export const COMPANY = {
  name: "Vici Software Development",
  ssm: "202503234911 / JM1030877-T",
  address: "Co-labs Coworking, Naza Tower, Kuala Lumpur",
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
};

// The five service pillars from the website brief.
export const SERVICES: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    summary:
      "Web applications, business management systems, APIs and MVPs, built around how your business actually runs.",
    icon: Code,
  },
  {
    slug: "ai-intelligent-systems",
    title: "AI & Intelligent Systems",
    summary:
      "AI-powered document generation, workflow automation, chatbots and ML integration for everyday business work.",
    icon: BrainCircuit,
  },
  {
    slug: "systems-infrastructure-ecosystem-setup",
    title: "Systems, Infrastructure & Ecosystem Setup",
    summary:
      "Servers, databases, cloud hosting and system integration, or a complete technology environment set up from scratch.",
    icon: ServerCog,
  },
  {
    slug: "web-presence-digital-experience",
    title: "Web Presence & Digital Experience",
    summary:
      "Company websites, UI/UX design for web apps, and ongoing website maintenance and performance fixes.",
    icon: Globe,
  },
  {
    slug: "technology-advisory",
    title: "Technology Advisory",
    summary:
      "Tech stack guidance, digital transformation roadmapping and ongoing technical support for SMEs and startups.",
    icon: Compass,
  },
];
