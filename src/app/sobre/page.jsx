"use client";

import { FaCss3, FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiDocker,
  SiKeycloak,
} from "react-icons/si";

// components
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "Sobre",
  description:
    "Informações sobre meu perfil profissional, incluindo minhas competências, linguagens, bem como formas de contato.",
  info: [
    { fieldName: "Telefone", fieldValue: "(79)99657-9700" },
    { fieldName: "Email", fieldValue: "gabrieudev@gmail.com" },
    {
      fieldName: "Competências",
      fieldValue: "Back-End, Full-Stack",
    },
    { fieldName: "Linguagens", fieldValue: "Português, Inglês" },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Educação",
  description:
    "Todo o meu conhecimento teórico obtido até o momento, tal como graduação e cursos online.",
  items: [
    {
      institution: "Instituto Federal de Sergipe (IFS)",
      degree: "Análise e Desenvolvimento de Sistemas",
      duration: "03/2023 - 12/2025 (previsão)",
    },
    {
      institution: "CISCO Networking Academy",
      degree: "Linux Essentials",
      duration: "09/02/2024",
    },
    {
      institution: "CISCO Networking Academy",
      degree: "Redes de computadores",
      duration: "28/09/2024",
    },
    {
      institution: "Fundação Bradesco",
      degree: "Excel avançado",
      duration: "27/12/2022",
    },
    {
      institution: "Fundação Bradesco",
      degree: "Word avançado",
      duration: "26/12/2022",
    },
  ],
};

const skills = {
  title: "Habilidades",
  description:
    "Todo o meu conhecimento técnico adquirido há mais de 3 anos de estudo em desenvolvimento web.",
  skillList: [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <SiKeycloak />, name: "Keycloak" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMicrosoftsqlserver />, name: "MS SQL Server" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiTailwindcss />, name: "Tailwind.css" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="Sobre"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="Sobre">Sobre mim</TabsTrigger>
            <TabsTrigger value="Habilidades">Habilidades</TabsTrigger>
            <TabsTrigger value="Educação">Educação</TabsTrigger>
          </TabsList>

          <div className="min-h-[78px] w-full">
            <TabsContent
              value="Sobre"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className="flex items-center justify-center xl:justify-start gap-4"
                        key={index}
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="Habilidades" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-full flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="Educação" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mb-7">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
