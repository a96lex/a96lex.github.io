interface Project {
  name: string;
  description: string;
  tags: string[];
  url?: string;
  image?: string;
}

export const projects: Project[] = [
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
    tags: ["BeautifulSoup4", "Vue.js"],
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
