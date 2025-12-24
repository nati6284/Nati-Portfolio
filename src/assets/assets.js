import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

import profileImg from "../assets/profile.jpg";
import projectImg1 from "../assets/eccomerce.jpeg";
import projectImg2 from "../assets/todolist.jpeg";
import projectImg3 from "../assets/hotel.jpeg";
import projectImg4 from "../assets/project4.avif";
import projectImg5 from "../assets/project5.avif";
import projectImg6 from "../assets/project6.avif";

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React", "HTML"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Spring-boot"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["PostgreSQL", "MySQL"],
  },
  // {
  //   title: 'Mobile Development',
  //   icon: FaMobileAlt,
  //   description: 'Building cross-platform mobile applications with modern tools.',
  //   tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  // },
  // {
  //   title: 'Cloud & DevOps',
  //   icon: FaCloud,
  //   description: 'Deploying and managing applications in cloud environments.',
  //   tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  // },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Apache SuperSet", "Docker"],
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with shopping cart, user authentication, and payment processing.",
    image: projectImg1,
    tech: ["React", "Spring-boot", "MySql"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://nati-eccomerce.netlify.app/",
    code: "https://github.com/nati6284/react-eccomerce",
  },
  {
    title: "Todo List App",
    description:
      "A simple and intuitive Todo List App that helps users organize tasks, stay productive, and manage daily activities effectively.",
    image: projectImg2,
    tech: ["React", " CSS"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "https://my-todo-list-6284.netlify.app/",
    code: "https://github.com/nati6284/Todo-list",
  },
  {
    title: "Hotel Reservation Websites",
    description:
      "A modern hotel reservation website that allows guests to easily search rooms, check availability, compare prices, and book accommodations online with a smooth and secure booking experience.",
    image: projectImg3,
    tech: ["React ", "MySQL", "Spring-boot"],
    icons: [FaReact, FaDatabase],
    demo: "https://shalom-hotels.netlify.app/",
    code: "https://github.com/nati6284/shalom-hotel-app",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["React", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "https://my-nati-portfolio.netlify.app/",
    code: "https://github.com/nati6284/Nati-Portfolio",
  },
  // {
  //   title: "Chat App",
  //   description:
  //     "A real-time chat application with group messaging, emojis, and file sharing.",
  //   image: projectImg5,
  //   tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
  //   icons: [FaReact, FaNodeJs, FaDatabase],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "AI Image Generator",
  //   description:
  //     "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
  //   image: projectImg6,
  //   tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
  //   icons: [FaRobot, FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // },
];

export const workData = [
  {
    role: "Software Developer",
    company: "Information Network Security Agency, Addis Ababa, Ethiopia.",
    duration: "March 2025 - Present",
    description: "Developing Pos System ,Making Dashboard by SuperSet ",
    color: "purple",
  },
  {
    role: "Intern Network Installation ",
    company:
      "Commercial Bank of Ethiopia (Yeka District), Addis Ababa, Ethiopia",
    duration: "July 2023 – August 2023",
    description:
      "Configured and maintained network hardware and software,Identifying the problems that were not having access to the internet,Crimped many cables at the time of network installation in some lab and offices,Identifying the problem of an ATM",
    color: "pink",
  },
];
