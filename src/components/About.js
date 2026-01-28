import { useState } from "react";
import dev from "../assets/onlinepngtools.png";

const About = () => {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore((prev) => !prev);
    };

    return (
        <section
            id="about"
            className="container max-w-screen-lg mx-auto py-10 px-10 flex flex-col items-center"
        >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Section: Description */}
                <div className="text-center md:text-left">
                    <p className="text-base text-sky-500 leading-7 p-4">
                        🚀 <strong>Passionate Full-Stack Developer | MERN Stack Specialist</strong>
                        <br />
                        I’m a highly skilled Full-Stack Developer with expertise in the <strong>MERN stack (MongoDB, Express.js, React, and Node.js)</strong>, dedicated to building
                        scalable, high-performance web applications. I thrive on solving complex problems and optimizing solutions for efficiency and reliability.
                    </p>

                    {/* Additional content with toggle */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${showMore ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <p className="text-base text-sky-500 leading-7 p-4">
                            With a strong foundation in both <strong>frontend and backend development</strong>, I create <strong>seamless, user-centric experiences</strong>
                            by leveraging modern technologies. <br />
                            From dynamic, interactive web apps to robust RESTful APIs, I transform ideas into <strong>clean, maintainable, and scalable code</strong>.
                            <br /><br />
                            Let’s collaborate and build <strong>innovative digital solutions</strong> that make an impact! 🚀
                        </p>
                    </div>

                    <button
                        onClick={handleToggle}
                        className="mt-4 text-sky-700 font-bold underline hover:text-sky-400 transition"
                    >
                        {showMore ? "Hide" : "Read More"}
                    </button>
                </div>

                {/* Right Section: Image */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={dev}
                        alt="Developer"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
