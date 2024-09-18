import { Code, Github, Home, Mail } from "lucide-react";

export const NavItems = [
  {
    href: "#home",
    label: "Home",
    icons: <Home width={20} height={20} />,
  },
  {
    href: "#about",
    label: "About",
    icons: <Mail width={20} height={20} />,
  },
  {
    href: "#project",
    label: "Project",
    icons: <Code width={20} height={20} />,
  },
  {
    href: "https://github.com/Brilliahib",
    label: "Github",
    icons: <Github width={20} height={20} />,
  },
];
