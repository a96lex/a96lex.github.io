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
    description: "Habit tracking app to help users reduce substance abuse.",
    tags: ["Flutter"],
    url: "https://github.com/a96lex/better",
    image: "/public/better.png",
  },
  {
    name: "Slime mold simulator",
    description:
      "A web application that simulates the behaviour of slime molds.",
    tags: ["javascript"],
    url: "http://scom-physarum-2021.s3-website-eu-west-1.amazonaws.com/",
    image: "/public/slime-mold.png",
  },
  {
    name: "CoronaTiquets",
    description:
      "Appointment management app made to keep family business open during the pandemic.",
    tags: ["Angular Native"],
    url: "https://www.upc.edu/ca/sala-de-premsa/noticies/un-equip-estudiants-de-la-upc-eebe-queda-en-segon-lloca-la-hackovid-per-trobar-solucions-als-reptes-socials-del-confinament",
    image: "/public/coronatiquets.png",
  },
  {
    name: "HotReach",
    description:
      "AI-powered cold message generation system, based on gathered prospect information.",
    tags: ["Serverless", "BeautifulSoup4"],
    url: "https://hotreach.io/",
    image: "/public/hotreach.png",
  },
  {
    name: "Aras",
    description:
      "Client appointment management platform made for a family business.",
    tags: ["fastapi", "react"],
    url: "https://aras.netlify.app/",
    image: "/public/aras.png",
  },
  {
    name: "Tank game",
    description:
      "Aim and shoot game inspired by diep.io. Made in python and able to be ran in the browser.",
    tags: ["pygame", "pyodide", "pygbag"],
    url: "https://alex-pf.itch.io/tank-game",
    image: "/public/tank-game.png",
  },
  {
    name: "Rocket game",
    description:
      "Physics based Flappy bird-like game. Avoid obstacles and get a high score.",
    tags: ["pygame"],
    url: "https://github.com/a96lex/pygame-floating-rocket",
    image: "/public/rocket.png",
  },
  {
    name: "Loora",
    description:
      "Home safety device to monitore a loved one's activity, using Long Range devices.",
    tags: ["Arduino", "Flask"],
    url: "https://devpost.com/software/loora",
    image: "/public/loora.png",
  },
  {
    name: "Dono",
    description:
      "Charitable gift card platform. Worked mainly on data collection.",
    tags: ["BeautifulSoup4"],
    url: "https://devpost.com/software/dono-4e563v",
    image: "/public/dono.png",
  },
  {
    name: "Wordle breaker",
    description: "A CLI tool that helps solve the original wodle puzzle.",
    tags: ["python"],
    url: "https://github.com/a96lex/wordle-breaker/",
    image: "/public/wordle.png",
  },
];
