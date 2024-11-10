"use client";

import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Consulta de gastos parlamentares",
    description:
      "API que consulta despesas dos parlamentares através do upload de um arquivo CSV, encontrado no site da câmara dos deputados.",
    href: "https://github.com/gabrieudev/gastos-parlamentares",
  },
  {
    num: "02",
    title: "Gerenciador de projetos",
    description:
      "Aplicação web full-stack para gerenciar projetos, serviços e custos associados.",
    href: "https://github.com/gabrieudev/budget-bridge",
  },
  {
    num: "03",
    title: "Autenticação e autorização",
    description:
      "Projeto que reproduz o fluxo de autenticação e autorização de usuários no back-end.",
    href: "https://github.com/gabrieudev/auth",
  },
  {
    num: "04",
    title: "Encurtador de URL",
    description:
      "API REST capaz de encurtar uma URL e, caso ela receba uma chamada, redirecionar para a URL original.",
    href: "https://github.com/gabrieudev/url-shortener",
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
                className="flex flex-col justify-center flex-1 gap-6 group"
                key={index}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
                    {project.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsArrowRight className="text-3xl text-primary" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {project.title}
                </h2>
                <p className="text-white/60">{project.description}</p>
                <div className="w-full border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
