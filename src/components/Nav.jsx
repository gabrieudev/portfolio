"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Início", path: "/" },
  { name: "Projetos", path: "/projetos" },
  { name: "Sobre", path: "/sobre" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 ">
      {links.map((link, index) => {
        return (
          <Link
            className={`${
              link.path === pathname &&
              "text-accent border-b-2 border-accent capitalize font-medium hover:text-accent transition-all"
            }`}
            href={link.path}
            key={index}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
