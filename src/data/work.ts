export interface Role {
  title: string;
  from: string;
  to?: string;
}

export interface Engagement {
  company: string;
  url: string;
  description: string;
  tags: string[];
  image?: string;
  roles: Role[];
}

export const current: Engagement[] = [
  {
    company: "Stuveo",
    url: "https://www.stuveo.com/",
    description:
      "Academic orientation platform for Spanish schools. After a year building access management, UX/UI and data scraping for academic programs, I now lead the technology side as CTO.",
    tags: ["Next.js", "BeautifulSoup4"],
    image: "/stuveo.png",
    roles: [
      { title: "CTO", from: "Mar 2026" },
      { title: "Freelance developer", from: "Mar 2025", to: "Mar 2026" },
    ],
  },
];

export interface PastClient {
  name: string;
  url: string;
  description: string;
  tags: string[];
  image: string;
}

export const past: PastClient[] = [
  {
    name: "Axiomatic",
    description:
      "AI startup. Built an AI-powered VS Code extension that assists with photonic integrated circuit design, and helped develop the web version.",
    tags: ["Next.js", "Preact", "FastAPI"],
    url: "https://www.axiomatic-ai.com/",
    image: "/axiomatic.png",
  },
  {
    name: "Robotix C360",
    description:
      "Internal platform that classifies lego pieces for stock management. Made the segmentation + recognition pipeline 5x faster and built the admin panel.",
    tags: ["PyTorch", "Laravel", "Kubernetes"],
    url: "https://www.robotix.es/es/robotixc360/",
    image: "/robotix.png",
  },
  {
    name: "acceso",
    description:
      "Media intelligence company. Building an AI chatbot extension for their Tableau app.",
    tags: ["React", "FastAPI"],
    url: "https://acceso.com/",
    image: "/acceso.png",
  },
  {
    name: "Beagile",
    description:
      "Designed and built a platform giving traditional businesses access to different LLMs.",
    tags: ["Next.js", "Tailwind CSS", "Shadcn/UI"],
    url: "https://beagile.app/",
    image: "/beagile.png",
  },
];
