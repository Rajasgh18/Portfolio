"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [activeSection, setActiveSection] = useState<string>();

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;

                if (scrollPos >= top && scrollPos <= bottom)
                    setActiveSection(section.id);
            })
        }
        handleScroll();
    }, [])

    return (
        <nav className="relative h-14 text-xl font-semibold bg-white bg-opacity-10 backdrop-blur rounded-2xl m-4 mx-8 flex items-center justify-between px-10">
            <h1 className="text-[#FF204E] text-2xl font-Nunito font-bold">Raja Singh</h1>
            <div className="w-1/4 text-white flex items-center gap-x-[15%]">
                <button className={cn(
                    "flex items-center justify-center flex-col hover:text-[#FF204E] group",
                    activeSection === "Home" && "text-[#FF204E]"
                    )}>
                    Home
                    <span className={cn(
                        "bg-[#FF204E] h-0.5 rounded-full w-0 group-hover:w-full duration-400 transition-all",
                        activeSection === "Home" && "w-full"
                    )} />
                </button>
                <button className="flex items-center justify-center flex-col hover:text-[#FF204E] group">
                    Projects
                    <span className={cn(
                        "bg-[#FF204E] h-0.5 rounded-full w-0 group-hover:w-full duration-400 transition-all",
                    )} />
                </button>
                <button className="flex items-center justify-center flex-col hover:text-[#FF204E] group">
                    Blog
                    <span className={cn(
                        "bg-[#FF204E] h-0.5 rounded-full w-0 group-hover:w-full duration-400 transition-all",
                    )} />
                </button>
                <button className="flex items-center justify-center flex-col hover:text-[#FF204E] group">
                    Contact
                    <span className={cn(
                        "bg-[#FF204E] h-0.5 rounded-full w-0 group-hover:w-full duration-400 transition-all",
                    )} />
                </button>
            </div>
            <button className="relative p-1 px-3 text-white flex items-center group rounded overflow-hidden">
                <span className="absolute bg-red-500 left-0 w-0.5 h-full" />
                <span className="absolute bg-red-500 right-0 w-0.5 h-full" />
                <span className="absolute bg-red-500 left-0 top-0 w-3 group-hover:w-1/2 transition-all duration-500 h-0.5" />
                <span className="absolute bg-red-500 left-0 bottom-0 w-3 group-hover:w-1/2 transition-all duration-500 h-0.5" />
                <span className="absolute bg-red-500 right-0 top-0 w-3 group-hover:w-1/2 transition-all duration-500 h-0.5" />
                <span className="absolute bg-red-500 right-0 bottom-0 w-3 group-hover:w-1/2 transition-all duration-500 h-0.5" />
                Contact Me
            </button>
        </nav>
    );
};