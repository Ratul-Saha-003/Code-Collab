import Image from "next/image";
import landing from "../assets/landing.svg";
import devimg from "../assets/dev-focus.svg";
import program from "../assets/programming.svg";
import percent from "../assets/percent.svg";
import { Button } from "@/components/ui/button";
import { FaSyncAlt } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";
import { IoIosGitMerge } from "react-icons/io";
import { FaRocket } from "react-icons/fa6";
import Link from "next/link";



export default function Home() {
  return (<>
    <main className="flex bg-gradient-to-tr from-[#070b0a] from-[40%] via-[#287566] to-[#33e8c3] to-[90%] text-[#f0f2f1] min-h-screen items-center justify-around p-16">
      <div className="w-[50vw]">
        <h1 className="text-7xl font-semibold py-5">Code & Collaborate</h1>
        <p className="text-xl break-words py-5">A collaborating platform meant for developers meaning to bring out the best in them.</p>
        <Button asChild className="bg-[#8de1d0] text-[#070b0a]">
          <Link href="/login">Explore</Link>
        </Button>
      </div>
      <div className="relative w-full">
        <div className="absolute bg-[#070b0a] rounded-xl top-0 left-0 w-[50%] bg-opacity-30 backdrop-blur-xl">
        <Image src={devimg} alt="landing" width={300} height={300} className="m-15"/>
        </div>
        <div className="absolute bg-[#070b0a] rounded-xl right-0 bottom-0 w-[50%] bg-opacity-60 backdrop-blur-lg">
        <Image src={program} alt="landing" width={400} height={400} className="m-15"/>
        </div>
      </div>
    </main>
    <div className="bg-[#070b0a]">
        <div className="w-full bg-opacity-80 text-center text-[#f0f2f1] py-20">
          <h1 className="text-5xl font-semibold pb-5">Struggling with inefficient <span className="bg-gradient-to-r text-transparent bg-clip-text from-[#8de1d0] to-[#287566]">code collaboration?</span></h1>
          <h2 className="text-2xl px-5 mx-10">Eliminate communication gaps and edit code together in real-time. Supercharge your team's workflow with seamless collaboration on the same codebase. </h2>
        </div>
        <div className="grid grid-cols-2 px-10 mx-10 gap-x-10">
          <div className="pb-10 text-[#f0f2f1]/60 col-span-1">
            <p className="flex justify-start items-center gap-x-3 text-base py-5 font-semibold "><span className="p-2 bg-[#04251d] w-10 rounded-lg bg-gradient-to-tl from-[#2f55dd] to-[#8aece7]"><FaSyncAlt className="w-6 h-6 bg-clip-text"/></span> <span className="bg-gradient-to-r from-[#33e8c3] to-[#4d5dfb] text-transparent bg-clip-text">Effortless Live Editing</span></p>
            <p className="text-xs">Stop lagging behind! Edit code simultaneously with your team and see changes update instantly for everyone.</p>
            <p className="text-xs py-3">No more waiting or version conflicts - work seamlessly on the same codebase, fostering a collaborative flow.</p>
          </div>
          <div className="text-[#f0f2f1]/60 col-span-1">
            <p className="flex justify-start items-center gap-x-3 text-base py-5 font-semibold "><span className="p-2 bg-[#04251d] w-10 rounded-lg bg-gradient-to-tl from-[#2f55dd] to-[#8aece7]"><FaRocket  className="w-6 h-6"/></span> <span className="bg-gradient-to-r from-[#33e8c3] to-[#4d5dfb] text-transparent bg-clip-text">Increased Developer Productivity</span></p>
            <p className="text-xs">Reduce time spent on coordination and context switching.</p>
            <p className="text-xs py-3">Boost your team's overall efficiency and accelerate project completion.</p>
          </div>
          <div className="text-[#f0f2f1]/60 col-span-1">
            <p className="flex justify-start items-center gap-x-3 text-base py-5 font-semibold "><span className="p-2 bg-[#04251d] w-10 rounded-lg bg-gradient-to-tl from-[#2f55dd] to-[#8aece7]"><BsChatLeftTextFill  className="w-6 h-6"/></span> <span className="bg-gradient-to-r from-[#33e8c3] to-[#4d5dfb] text-transparent bg-clip-text">Integrated Chat</span></p>
            <p className="text-xs">Break down communication silos. Chat with your team members directly within the code editor.</p>
          </div>
          <div className="col-span-1 row-span-2 flex justify-center items-center">
            <Image src={percent} alt="features" height={400} width={400}/>
          </div>
          <div className="text-[#f0f2f1]/60 col-span-1">
            <p className="flex justify-start items-center gap-x-3 text-base py-5 font-semibold "><span className="p-2 bg-[#04251d] w-10 rounded-lg bg-gradient-to-tl from-[#2f55dd] to-[#8aece7]"><IoIosGitMerge  className="w-6 h-6"/></span> <span className="bg-gradient-to-r from-[#33e8c3] to-[#4d5dfb] text-transparent bg-clip-text">Version Control Integration</span></p>
            <p className="text-xs">Track your project's history with ease. View changes made by anyone, at any point.</p>
            <p className="text-xs py-3">Experiment and iterate safely, knowing you can revert back if necessary.</p>
          </div>

        </div>
    </div>
    </>
  );
}
