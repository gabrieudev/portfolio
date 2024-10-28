"use client";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Gerenciador de projetos",
    description:
      "Aplicação web full-stack para gerenciar projetos, serviços e custos associados.",
    href: "https://github.com/gabrieudev/budget-bridge",
  },
  {
    num: "02",
    title: "Autenticação e autorização",
    description:
      "Projeto que reproduz o fluxo de autenticação e autorização de usuários no back-end.",
    href: "https://github.com/gabrieudev/auth",
  },
  {
    num: "03",
    title: "Encurtador de URL",
    description:
      "API REST capaz de encurtar uma URL e, caso ela receba uma chamada, redirecionar para a URL original.",
    href: "https://github.com/gabrieudev/url-shortener",
  },
  {
    num: "04",
    title: "Gerador de senhas",
    description:
      "API REST que gera senhas seguras, visando a integração com sistemas que necessitem de tais funcionalidades.",
    href: "https://github.com/gabrieudev/password-generator",
  },
];

const Projects = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {projects.map((project, index) => {
            return (
              <div
                className="flex-1 flex flex-col justify-center gap-6 group"
                key={index}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {project.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsArrowRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {project.title}
                </h2>
                <p className="text-white/60">{project.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
