import { Github, Mail, Linkedin } from "lucide-react";
import { GrReactjs, GrNode } from "react-icons/gr";
import {
  TbBrandCpp,
  TbBrandPython,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandBootstrap,
  TbBrandTailwind,
  TbBrandGit,
  TbBrandGithub,
} from "react-icons/tb";
import {
  SiMui,
  SiCodeforces,
  SiExpress,
  SiNextdotjs,
  SiScikitlearn,
  SiMysql,
  SiPrisma,
  SiMongodb,
  SiRedux,
  SiOpencv,
  SiPowerbi,
} from "react-icons/si";
import { PiGraphDuotone } from "react-icons/pi";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <TbBrandCpp size={15} />,
    handle: "C++/STL",
  },
  {
    icon: <TbBrandPython size={15} />,
    handle: "Python",
  },
  {
    icon: <TbBrandJavascript size={15} />,
    handle: "Javascript",
  },
  {
    icon: <TbBrandTypescript size={15} />,
    handle: "Typescript",
  },
  {
    icon: <TbBrandHtml5 size={15} />,
    handle: "HTML",
  },
  {
    icon: <TbBrandCss3 size={15} />,
    handle: "CSS",
  },
  {
    icon: <TbBrandBootstrap size={15} />,
    handle: "Bootstrap",
  },
  {
    icon: <TbBrandTailwind size={15} />,
    handle: "TailwindCSS",
  },
  {
    icon: <SiMui size={15} />,
    handle: "Material UI",
  },
  {
    icon: <PiGraphDuotone size={15} />,
    handle: "Data Structures",
  },
  {
    icon: <SiCodeforces size={15} />,
    handle: "Algorithms",
  },
  {
    icon: <TbBrandGit size={15} />,
    handle: "Git",
  },
  {
    icon: <TbBrandGithub size={15} />,
    handle: "Github",
  },
  {
    icon: <GrNode size={15} />,
    handle: "Node JS",
  },
  {
    icon: <SiExpress size={15} />,
    handle: "Express JS",
  },
  {
    icon: <GrReactjs size={15} />,
    handle: "ReactJS",
  },
  {
    icon: <SiRedux size={15} />,
    handle: "Redux",
  },
  {
    icon: <SiNextdotjs size={15} />,
    handle: "Next JS",
  },
  {
    icon: <SiScikitlearn size={15} />,
    handle: "Scikit Learn",
  },
  {
    icon: <SiOpencv size={15} />,
    handle: "Open CV",
  },
  {
    icon: <SiPowerbi size={15} />,
    handle: "PowerBI",
  },
  {
    icon: <SiMysql size={15} />,
    handle: "My SQL",
  },
  {
    icon: <SiMongodb size={15} />,
    handle: "Mongo Db",
  },
  {
    icon: <SiPrisma size={15} />,
    handle: "Prisma",
  },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 pt-24 pb-24">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card>
              <div className="p-4 relative flex flex-col items-center gap-3 duration-700 group">
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-6 h-6 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-zover:text-white font-display">
                    {s.handle}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
