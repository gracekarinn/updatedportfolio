import { SiAboutdotme } from "react-icons/si";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { MdContactEmergency } from "react-icons/md";
import { TimelineItemType } from "./interface";
import { Skill } from "./interface";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const navLinks = [
  { href: "#about", icon: SiAboutdotme, name: "About" },
  { href: "#education", icon: MdOutlineCastForEducation, name: "Education" },
  { href: "#experience", icon: MdOutlineWorkHistory, name: "Project" },
  { href: "#language", icon: IoLanguage, name: "Skills" },
  { href: "#contact", icon: MdContactEmergency, name: "Contact" },
];

export const deskripsi =
  "Coffee lover, rubik's cube enthusiast, and coding explorer. Welcome, Fellow Coders! Let's connect and collaborate";

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/gracekarinn",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gracekarinn",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    url: "https://github.com/gracekarinn",
    icon: FaGithub,
  },
];

export const timelineData: TimelineItemType[] = [
  {
    year: 2023,
    title: "Computer Science",
    description: "Universitas Indonesia",
  },
  {
    year: 2022,
    title: "Pharmaceutical Science and Technology",
    description: "Institut Teknologi Bandung",
  },
  {
    year: 2019,
    title: "SMAN 68 Jakarta",
    description: "Located in Jakarta Pusat",
  },
];

export const projectsData = [
  {
    title: "Hackathon Project",
    description: "A simple art e-commerce, planned to use crypto as payment.",
    tags: ["Typescript", "Tailwind", "Firebase"],
    imageUrl: "/karyakita.png",
  },
  {
    title: "SBF Project",
    description:
      "I contributed to the development of a website for a BEM project.",
    tags: ["Next.js", "Tailwind"],
    imageUrl: "/sbf.png",
  },
  {
    title: "ToDo Project",
    description: "Made a simple website for a BEM project.",
    tags: ["Next.js", "Tailwind", "NestJs", "PostgreSQL", "Prisma", "Firebase"],
    imageUrl: "/todo.png",
  },
  {
    title: "OKK UI 2024",
    description: "I contributed to the front-end development of OKK UI web",
    tags: ["Typescript", "Tailwind"],
    imageUrl: "/okk.png",
  },
  {
    title: "Open House Fasilkom UI 2024",
    description: "I contributed to the development of OH 2024 web",
    tags: ["Next.js", "Tailwind"],
    imageUrl: "/oh.png",
  },
] as const;

export const skills: Skill[] = [
  { title: "HTML", percent: 70 },
  { title: "CSS", percent: 70 },
  { title: "Tailwind CSS", percent: 80 },
  { title: "JavaScript", percent: 60 },
  { title: "TypeScript", percent: 70 },
  { title: "NestJs", percent: 40 },
  { title: "Python", percent: 75 },
  { title: "Java", percent: 70 },
];

export interface FormData {
  name: string;
  email: string;
  message: string;
}
