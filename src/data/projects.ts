export interface Project {
  name: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
}

export const client: Project[] = [
  {
    name: "Stuveo",
    description:
      "Academic orientation platform for Spanish schools. Worked on access management, UX/UI design, and data scraping for academic programs.",
    tags: ["Next.js", "BeautifulSoup4"],
    url: "https://www.stuveo.com/",
    image: "/stuveo.png",
  },
  {
    name: "Axiomatic",
    description:
      "AI startup. Developed an AI powered VScode extension to assist in photonics integrated circuit designs. Helped develop a web version as well.",
    tags: ["Next.js", "Preact", "FastAPI"],
    url: "https://www.axiomatic-ai.com/",
    image: "/axiomatic.png",
  },
  {
    name: "Signdit",
    description:
      "A platform for generating legal documents. Worked on the admin panel and team/access management.",
    tags: ["Vue.js", "Laravel", "Filament"],
    url: "https://signdit.com",
    image: "/signdit.png",
  },

  {
    name: "Beagile",
    description:
      "Designed and developed platform for accessing different LLMs to help traditional business adopt this new technology.",
    tags: ["Next.js", "Tailwind CSS", "Shadcn/UI"],
    url: "https://beagile.app/",
    image: "/beagile.png",
  },
  {
    name: "Robotix C360",
    description:
      "An internal platform to classify lego pieces for stock management. Inference optimization for segmentation+image recognition pipeline (5x speedup). Developed admin panel too.",
    tags: ["PyTorch", "Laravel", "Kubernetes"],
    url: "https://www.robotix.es/es/robotixc360/",
    image: "/robotix.png",
  },
];

export const personal: Project[] = [
  {
    name: "Portfolio",
    description:
      "A portfolio site to showcase my projects and skills. This is the site you are seeing right now.",
    tags: ["Svelte", "TypeScript", "Tailwind CSS"],
    url: "https://github.com/a96lex/a96lex.github.io",
    image: "/portfolio.png",
  },
  {
    name: "Better",
    description:
      "A habit tracking app designed to help users reduce substance abuse by building healthier routines.",
    tags: ["Flutter"],
    url: "https://github.com/a96lex/better",
    image: "/better.png",
  },
  {
    name: "Slime mold simulator",
    description:
      "An interactive web application that simulates the behavior and growth patterns of slime molds.",
    tags: ["JavaScript"],
    url: "https://github.com/a96lex/physarum-simulation",
    image: "/slime-mold.png",
  },
  {
    name: "CoronaTiquets",
    description:
      "A platform for managing appointments to ensure the continuity of small business during the COVID-19 pandemic.",
    tags: ["Angular Native"],
    url: "https://upcoders.eebe.upc.edu/coronatiquets.html",
    image: "/coronatiquets.png",
  },
  {
    name: "HotReach",
    description:
      "An AI-powered system for generating cold outreach messages based on prospect data, streamlining sales processes.",
    tags: ["Serverless", "BeautifulSoup4"],
    url: "https://hotreach.io/",
    image: "/hotreach.png",
  },
  {
    name: "Aras",
    description:
      "A client appointment management system created for a family business, optimizing scheduling and customer interactions.",
    tags: ["FastAPI", "React"],
    url: "https://aras.netlify.app/",
    image: "/aras.png",
  },
  {
    name: "Tank game",
    description:
      "A browser-based aim-and-shoot game inspired by diep.io, built using Python, pygame, and pyodide for browser compatibility.",
    tags: ["Pygame", "Pyodide", "Pygbag"],
    url: "https://alex-pf.itch.io/tank-game",
    image: "/tank-game.png",
  },
  {
    name: "Rocket game",
    description:
      "A physics-based, Flappy Bird-inspired game where players navigate a rocket through obstacles, aiming for high scores.",
    tags: ["Pygame"],
    url: "https://github.com/a96lex/pygame-floating-rocket",
    image: "/rocket.png",
  },
  {
    name: "Loora",
    description:
      "A home safety device that uses Long Range technology to monitor the activity of loved ones, ensuring their well-being.",
    tags: ["Arduino", "Flask"],
    url: "https://devpost.com/software/loora",
    image: "/loora.png",
  },
  {
    name: "Dono",
    description:
      "A charitable gift card platform where I contributed to data collection efforts and web development.",
    tags: ["BeautifulSoup4", "Vue.js", "Laravel"],
    url: "https://devpost.com/software/dono-4e563v",
    image: "/dono.png",
  },
  {
    name: "Wordle breaker",
    description:
      "A command-line tool designed to help users solve Wordle puzzles efficiently by providing hints and solutions.",
    tags: ["Python"],
    url: "https://github.com/a96lex/wordle-breaker/",
    image: "/wordle.png",
  },
];
