import { Zap, Infinity, MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";
export const ContentPage = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-time collaboration",
    },
    {
      icon: Infinity,
      title: "Infinite canvas",
    },

    {
      icon: Share2,
      title: "Easy export",
    },
  ];
  return (
    <section >
      <div className="mx-auto max-w-7xl  px-4 py-14 flex    flex-col items-center justify-center gap-14">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <p className="px-3 dark:text-neutral-400 text-neutral-800 font-medium text-[12px]  rounded-xl py-0.5 max-w-[26rem] mx-auto w-full border  dark:bg-neutral-800/60 dark:border-neutral-800/60 bg-neutral-200 border-neutral-100">
            Where ideas get <span className="text-purple-400">messy</span>,creative,and real all on{" "}
            <span className="text-purple-400">one infinite canvas</span>.
          </p>
          <h1
            className="max-w-4xl mx-auto 
             bg-gradient-to-b from-neutral-500 to-neutral-800 
             dark:from-neutral-300 dark:to-neutral-800 
             bg-clip-text text-transparent 
             font-bold tracking-tight 
             text-3xl sm:text-4xl md:text-5xl lg:text-7xl 
             leading-tight px-4">
            Bring Your Ideas to Life Through Drawing
          </h1>
          <div className="p-1">
            <div className="flex flex-wrap gap-3 items-center justify-center mt-4">
              <a
                href="/login"
                className="rounded-xl border dark:border-zinc-800/30
              px-6 py-2 font-medium 
              text-neutral-800 
              bg-neutral-100 border-neutral-50  shadow
              dark:text-neutral-200 dark:bg-zinc-800/30 dark:shadow-2xs
              cursor-pointer  hover:scale-105 duration-300 ease-in-out
              
              transition-all ">
                Unleash Your Creativity
              </a>
              <button
                className="rounded-xl  dark:border-neutral-700/30 border-neutral-400/20 
              px-6 py-2 font-medium 
              text-neutral-700 
              dark:text-neutral-300 
              transition-all duration-300 ease-in-out ">
                See What’s Possible
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full mt-12  flex  flex-col   items-center">
          <h1 className="px-2 text-neutral-700 dark:text-neutral-400 font-semibold sm:text-2xl  lg:text-4xl  text-start  w-full ">
            Everything you need to create together .
          </h1>
          <div className="grid  mt-10  sm:grid-cols-1 lg:grid-cols-3 gap-6  w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-7 rounded-2xl  transition-all duration-300 border  dark:bg-zinc-900/20 dark:border-neutral-900/80 bg-neutral-50 shadow-sm border-neutral-100">
                <div className="flex gap-2 items-center">
                  <feature.icon className="w-5 h-5 dark:text-neutral-400 text-neutral-700/60" />
                  <h3 className="text-xl dark:text-neutral-300 text-neutral-800 font-semibold ">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
