import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import axios from "axios";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default async function Home() {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  let totalCommits = 0;
  let publicRepos;
  let avatarUrl;

  try {
    const userResponse = await axios.get(
      "https://api.github.com/users/gabrieudev",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const reposReponse = await axios.get(
      "https://api.github.com/users/gabrieudev/repos",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const userData = userResponse.data;
    const reposData = reposReponse.data;

    await Promise.all(
      reposData.map(async (repo) => {
        const commitsResponse = await axios.get(
          `https://api.github.com/repos/gabrieudev/${repo.name}/commits?author=gabrieudev`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        totalCommits += commitsResponse.data.length;
      })
    );

    publicRepos = userData.public_repos;
    avatarUrl = userData.avatar_url;
  } catch (error) {
    publicRepos = undefined;
  }

  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-xl">Desenvolvedor Back-End</span>
            <h1 className="h1">
              Olá, me chamo <br />
              <span className="text-accent">João Gabriel</span>
            </h1>
            <p className="max-w-[500px] mb-9 mt-9 text-white/80">
              Desenvolvedor Back-End em formação, com experiência na criação de
              APIs e interfaces, integração de sistemas e otimização de bancos
              de dados. Sou apaixonado por tecnologia e sempre busco aprimorar
              minhas habilidades para entregar soluções escaláveis e eficientes.
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <a href="/Joao_Gabriel_TI.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 uppercase"
                >
                  <span>Baixar CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo avatarUrl={avatarUrl} />
          </div>
        </div>
      </div>
      <Stats publicRepos={publicRepos} totalCommits={totalCommits} />
    </section>
  );
}
