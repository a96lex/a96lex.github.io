interface Project {
  name: String;
  description: String;
  tags: String[];
  url?: String;
  image?: String;
}

export const projects: Project[] = [
  {
    name: "Unith.ai",
    description:
      "Digital Human platform. User management, real time conversation and video generation.",
    tags: ["Svelte", "pytorch", "FastApi", "Langchain"],
  },
  {
    name: "Easy Correct",
    description: "AI-powered exam grading system integrated with moodle.",
    tags: [" FastAPI", "Filament", "Laravel"],
  },
  {
    name: "Better",
    description: "Habit tracking app to help users reduce substance abuse.",
    tags: ["Flutter"],
  },
  {
    name: "Slime mold simulator",
    description:
      "A web application that simulates the behaviour of slime molds.",
    tags: ["javascript"],
    image: "/public/slime-mold.png",
  },
  {
    name: "CoronaTiquets",
    description:
      "Appointment management app made to keep family business open during the pandemic.",
    tags: ["Angular Native"],
  },
  {
    name: "HotReach",
    description:
      "AI-powered cold message generation system, based on gathered prospect information.",
    tags: ["Serverless", "BeautifulSoup4"],
    image: "/public/hotreach.png",
  },
  {
    name: "Aras",
    description:
      "Client appointment management platform made for a family business.",
    tags: ["fastapi", "react"],
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
    name: "Piplook",
    description: "Bird sightning logging app, leveraging Google's Lens API.",
    tags: ["Flask", "React Native"],
  },
  {
    name: "Loora",
    description:
      "Home safety device to monitore a loved one's activity, using Long Range devices.",
    tags: ["Arduino", "Flask"],
    image: "/public/loora.png", 
  },
  {
    name: "Dono",
    description:
      "Charitable gift card platform. Worked mainly on data collection.",
    tags: ["BeautifulSoup4"],
  },
  {
    name: "Wordle breaker",
    description: "A CLI tool that helps solve the original wodle puzzle.",
    tags: ["python"],
  },
];
