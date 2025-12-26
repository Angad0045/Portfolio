import { ContainerScroll } from "./ui/container-scroll-animation";

export const AboutMeSection = () => {
  return (
    <div className="flex flex-col overflow-hidden dark:bg-neutral-900/20">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              <span className="text-4xl md:text-[6rem] font-bold pt-1 leading-none">
                About Me
              </span>
            </h1>
          </>
        }
      >
        <div className="bg-[#155dfc]/80 w-full h-full flex flex-col justify-center items-center">
          <div className="w-full h-auto">
            <h1 className="font-black text-xl md:text-4xl text-center text-white my-3">
              About Me
            </h1>
            <div className="text-white text-sm md:text-xl text-center w-full flex flex-col justify-center items-start px-5 lg:px-20 pb-5 lg:pb-10 space-y-1 md:space-y-3">
              <h1>
                👋 Hello! My Name is{" "}
                <span className="md:text-2xl font-black">Angad Patil</span>
              </h1>
              <p className="text-white/70 text-sm lg:text-lg text-justify">
                I'm a passionate software developer with a strong foundation in
                web development. I love the challenge of building scalable and
                responsive web applications. My go-to technologies include React
                and Node.js, and I'm always excited to learn more.
              </p>
              <p className="text-white/70 text-sm lg:text-lg text-justify">
                When I'm not at the keyboard, you'll usually find me either
                playing or watching football — I'm a huge fan!
              </p>
              <div className="flex mx-auto gap-5 lg:gap-10">
                <div>
                  <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
                    1+
                  </h1>
                  <p className="text-xs md:text-sm lg:text-lg text-white/70">
                    Years Experience
                  </p>
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
                    7+
                  </h1>
                  <p className="text-xs md:text-sm lg:text-lg text-white/70">
                    Project Completed
                  </p>
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
                    1
                  </h1>
                  <p className="text-xs md:text-sm lg:text-lg text-white/70">
                    Research Paper
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center px-5 pb-5 md:px-10 lg:px-0">
              <h1 className="font-black text-xl md:text-4xl text-center text-white">
                Education
              </h1>
              <div className="w-full lg:w-3/4 bg-white/10 rounded-[20px] mt-2">
                <div className="w-full text-white text-center p-2 md:p-3">
                  <h1 className="text-xs md:text-xl font-bold">
                    Bachelor of Engineering in Electronics & Telecommunication
                  </h1>
                  <h3 className="text-white/70 text-xs md:text-lg font-extralight lg:mt-1">
                    Rajiv Gandhi Institute of Technology
                  </h3>
                  <div className="text-xs flex justify-between items-center px-8 lg:px-16 mt-2 md:mt-3 lg:mt-5">
                    <h4>2020-2024</h4>
                    <h4>GPA 8.23/10</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
};
