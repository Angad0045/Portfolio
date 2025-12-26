import Link from "next/link";
import data from "../data/Projects.json";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface Project {
  name: string;
  link: string;
  img: string;
}

export const ProjectSection = () => {
  const project = data?.projects;
  return (
    <div className="dark:bg-neutral-900/20 w-full flex flex-col justify-center items-center py-20">
      <h1 className="text-4xl md:text-[6rem] text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center md:gap-10 px-5 lg:px-20">
        {project.map((p) => (
          <div key={p.id}>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:w-[35rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {p.name}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={p.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-end items-center mt-10">
                  <Link href={`https://github.com/Angad0045/${p.link}`}>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <div className="flex items-center gap-1">
                        <img className="w-4" src="Github.png" alt="GitHub" />
                        <p>GitHub</p>
                      </div>
                    </CardItem>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
      <Link href={"https://github.com/Angad0045?tab=repositories"}>
        <span className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold cursor-pointer hover:shadow-[0_0_10px_#ffffff,0_0_15px_#ffffff,0_0_20px_#ffffff]">
          Click to view more projects
        </span>
      </Link>
    </div>
  );
};
