import Image from "next/image"
import { Profile } from "./profile"

export const Home = () => {
    return (
        <section id="Home" className="h-[calc(100vh-5.5rem)] w-full flex items-center px-20 text-white">
            <article className="flex flex-col w-1/2 gap-y-4">
                <h1 className="text-6xl font-bold">Hey, I am a <span className="text-red-500">Full Stack </span><span className="text-green-500">Developer</span></h1>
                <p className="text-2xl font-semibold">Creating <span className="text-pink-500">modern</span>, <span className="text-pink-500"> responsive</span> web applications.</p>
                <p className="text-2xl font-semibold">Passionate about <span className="text-pink-500">coding</span> and <span className="text-pink-500">technology</span>.</p>
            </article>
        </section>
    )
}
