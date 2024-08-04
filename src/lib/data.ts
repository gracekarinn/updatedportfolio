import { SiAboutdotme } from "react-icons/si";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { MdContactEmergency } from "react-icons/md";
import { TimelineItemType } from "./interface";
import { Skill } from "./interface";

export const navLinks = [
  { href: "#about", icon: SiAboutdotme, name: "About" },
  { href: "#education", icon: MdOutlineCastForEducation },
  { href: "#experience", icon: MdOutlineWorkHistory },
  { href: "#language", icon: IoLanguage },
  { href: "#contact", icon: MdContactEmergency },
];

export const deskripsi =
  "Coffee lover, rubik's cube enthusiast, and coding explorer. Welcome, Fellow Coders! Let's connect and collaborate ^__^";

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
    title: "SBF Project",
    description:
      "I contributed to the development of a website for a BEM project.",
    tags: ["Next.js", "Tailwind"],
    imageUrl: "/sbf.png",
  },
  {
    title: "SBF Project",
    description:
      "I contributed to the development of a website for a BEM project.",
    tags: ["Next.js", "Tailwind"],
    imageUrl: "/sbf.png",
  },
  {
    title: "SBF Project",
    description:
      "I contributed to the development of a website for a BEM project.",
    tags: ["Next.js", "Tailwind"],
    imageUrl: "/sbf.png",
  },
  {
    title: "SBF Project",
    description:
      "I contributed to the development of a website for a BEM project.",
    tags: ["Next.js", "Tailwind"],
    imageUrl: "/sbf.png",
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
