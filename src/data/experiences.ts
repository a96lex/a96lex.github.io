interface Experience {
  title: string;
  company: string;
  bulletpoints: string[];
  tags: string[];
  from: string;
  to: string;
  url?: string;
  image?: string;
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Unith Research Labs",
    bulletpoints: [
      "Turned a research proof of concept into a production API that became the company's core product.",
      "Grew the tech team from 2 to 8 and set up CI/CD, containers and infrastructure as code.",
    ],
    tags: ["Python", "PyTorch", "FastAPI", "Docker", "Terraform"],
    from: "Sep 2021",
    to: "Dec 2023",
    url: "https://www.unith.ai/",
  },
  {
    title: "Software Engineer",
    company: "AudioStack",
    bulletpoints: [
      "Built the front-end sales funnel that drove product trials, and ran the microservices behind key features.",
    ],
    tags: ["Python", "React", "Serverless"],
    from: "Aug 2020",
    to: "Sep 2021",
    url: "https://audiostack.ai/",
  },
];
