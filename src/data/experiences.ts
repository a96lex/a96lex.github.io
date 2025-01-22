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
    company: "LambdaLoopers",
    bulletpoints: [
      "Refactored and improved the microservices architecture, enhancing code quality through CI/CD pipelines, testing, and documentation.",
      "Increased image segmentation pipeline efficiency by 5x through algorithm optimization and resource tuning.",
      "Designed and deployed a new microservice, seamlessly integrating it into the existing microservice architecture and ensuring smooth interaction with external systems.",
    ],
    tags: [
      "Python",
      "PyTorch",
      "Langchain",
      "FastAPI",
      "React",
      "Filament",
      "NestJs",
      "Docker",
      "Kubernetes",
    ],
    from: "May 2024",
    to: "Nov 2024",
  },
  {
    title: "Software Engineer",
    company: "Unith Research Labs",
    bulletpoints: [
      "Implemented a research-backed proof of concept into a production-ready REST API, serving as a core company product.",
      "Parallelized machine learning workflows to handle high concurrency, reducing latency and improving user experience.",
      "Led the technical and behavioral interview process, assessments, and candidate evaluations, resulting in the expansion of the tech team from 2 to 8 members.",
      "Led DevOps modernization, introducing CI/CD, containerization, and Infrastructure as Code (IaC) practices.",
    ],
    tags: [
      "Python",
      "PyTorch",
      "Langchain",
      "FastAPI",
      "Svelte",
      "NestJs",
      "Ansible",
      "Triton",
      "TensorRT",
      "Docker",
      "Terraform",
    ],
    from: "Sep 2021",
    to: "Dec 2023",
  },
  {
    title: "Software Engineer",
    company: "AudioStack",
    bulletpoints: [
      "Developed and optimized a front-end sales funnel to drive product trials and increase conversions.",
      "Managed microservices and database components, ensuring high uptime and reliability for key system functions.",
    ],
    tags: ["Python", "Serverless", "React", "React Native"],
    from: "Aug 2020",
    to: "Sep 2021",
  },
];
