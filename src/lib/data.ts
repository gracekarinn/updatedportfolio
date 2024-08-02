import { SiAboutdotme } from "react-icons/si";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { MdContactEmergency } from "react-icons/md";
import { TimelineItemType } from "./interface";

export const navLinks = [
  { href: "/", icon: SiAboutdotme },
  { href: "/education", icon: MdOutlineCastForEducation },
  { href: "/", icon: MdOutlineWorkHistory },
  { href: "/", icon: IoLanguage },
  { href: "/", icon: MdContactEmergency },
];

export const deskripsi =
  "Coffee lover, rubik's cube enthusiast, and coding explorer. Welcome, Fellow Coders! Let's connect and collaborate ^__^";

export const timelineData: TimelineItemType[] = [
  { year: 2020, title: "Event 1", description: "Description of event 1" },
  { year: 2021, title: "Event 2", description: "Description of event 2" },
  { year: 2021, title: "Event 2", description: "Description of event 2" },
];
