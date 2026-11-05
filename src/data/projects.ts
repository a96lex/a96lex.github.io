export interface Project {
  name: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
  imageDark?: string;
  selfReferencial?: boolean;
  featured?: boolean;
  imageFit?: "cover" | "contain";
}

export const personal: Project[] = [
  {
    name: "Trueki",
    description:
      "A local marketplace to trade what you have for what you want, like fruit from your garden for someone else's.",
    tags: ["Next.js"],
    url: "https://trueki.app",
    image: "/trueki.webp",
    featured: true,
  },
  {
    name: "Quaddle",
    description:
      "A daily puzzle platformer: one new level every day and four abilities. Clear it once with each.",
    tags: ["SvelteKit"],
    url: "https://quaddle.app",
    image: "/quaddle.png",
    imageDark: "/quaddle-dark.png",
    featured: true,
  },
  {
    name: "Ferment",
    description:
      "A visual fermenting guide with step-by-step recipes for kombucha, beer, cider, kimchi and more, including times, temperatures and quantities.",
    tags: ["Svelte", "TypeScript"],
    url: "https://recipe.a96lex.com",
    image: "/recipe.webp",
    featured: true,
  },
  {
    name: "Portfolio",
    description:
      "A portfolio site to showcase my projects and skills. This is the site you are seeing right now.",
    tags: ["Svelte", "TypeScript", "Tailwind CSS"],
    url: "https://github.com/a96lex/a96lex.github.io",
    image: "/portfolio-light.png",
    imageDark: "/portfolio-dark.png",
    selfReferencial: true,
    featured: true,
  },
  {
    name: "Better",
    description:
      "A habit tracker that counts the days since you quit something.",
    tags: ["Flutter"],
    url: "https://better.a96lex.com",
    image: "/better.webp",
  },
  {
    name: "Slime mold simulator",
    description:
      "Simulates how slime molds grow and form networks, in the browser.",
    tags: ["JavaScript"],
    url: "https://github.com/a96lex/physarum-simulation",
    image: "/slime-mold.webp",
  },
  {
    name: "CoronaTiquets",
    description:
      "Appointment booking that kept small shops open during COVID-19.",
    tags: ["Angular Native"],
    url: "https://upcoders.eebe.upc.edu/coronatiquets.html",
    image: "/coronatiquets.webp",
  },
  {
    name: "HotReach",
    description: "Writes cold outreach messages from a prospect's public data.",
    tags: ["Serverless", "BeautifulSoup4"],
    url: "https://hotreach.io/",
    image: "/hotreach.webp",
    imageFit: "contain",
  },
  {
    name: "Aras",
    description: "Appointment scheduling for a family business.",
    tags: ["FastAPI", "React"],
    url: "https://aras.netlify.app/",
    image: "/aras.webp",
  },
  {
    name: "Tank game",
    description: "A diep.io-style shooter in Python, running in the browser.",
    tags: ["Pygame", "Pyodide", "Pygbag"],
    url: "https://alex-pf.itch.io/tank-game",
    image: "/tank-game.webp",
  },
  {
    name: "Rocket game",
    description: "Flappy Bird with a rocket and real physics.",
    tags: ["Pygame"],
    url: "https://github.com/a96lex/pygame-floating-rocket",
    image: "/rocket.webp",
  },
  {
    name: "Loora",
    description: "A LoRa home device to check in on a loved one's activity.",
    tags: ["Arduino", "Flask"],
    url: "https://devpost.com/software/loora",
    image: "/loora.webp",
  },
  {
    name: "Dono",
    description:
      "Charity gift cards. I worked on data collection and the web app.",
    tags: ["BeautifulSoup4", "Vue.js", "Laravel"],
    url: "https://devpost.com/software/dono-4e563v",
    image: "/dono.webp",
  },
  {
    name: "Wordle breaker",
    description: "A command-line helper that suggests your next Wordle guess.",
    tags: ["Python"],
    url: "https://github.com/a96lex/wordle-breaker/",
    image: "/wordle.webp",
  },
];
