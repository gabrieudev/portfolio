"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Início", path: "/" },
  { name: "Projetos", path: "/projetos" },
  { name: "Sobre mim", path: "/sobre" },
  { name: "Contato", path: "/contato" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center p-4">
        <SheetTitle className="sr-only">Navegação</SheetTitle>
        <div className="mt-32 mb-12 text-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Gabriel<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-6 text-center">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname
                  ? "text-accent border-b-2 border-accent font-medium"
                  : "text-white"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
