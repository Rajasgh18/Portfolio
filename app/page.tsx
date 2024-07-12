import { Navbar } from "@/components/navbar";
import { Home } from "@/components/home";
import Image from "next/image";

const Page = () => {
  return (
    <main>
      <div className="absolute w-screen h-screen top-0 left-0 -z-10 blur-3xl opacity-40">
        <Image src="/assets/bg.jpg" alt="bg" width={1000} height={1000} className="w-full h-full object-cover" />
      </div>
      <Navbar />
      <Home />
    </main>
  );
};

export default Page;