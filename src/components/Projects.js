import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaServer, FaDatabase,  FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import images from '../assets';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("frontend");

    const projects = {
        frontend: [
            {
                name: "Landing Page",
                image: `${images.landingPage}`,
                description: "Trabook Landing Page using HTML and CSS",
                tags: ["HTML", "CSS"],
                links: ["https://github.com/Ravichandran-D/Task-1-Landing-Page-", "https://task01-landing-page.netlify.app/"]
            },
            {
                name: "Movie App",
                image: `${images.movieApp}`,
                description: "Search and filter movies using React and OMDB API",
                tags: ["React", "React Router Dom", "Tailwind CSS"],
                links: ["https://github.com/Ravichandran-D/Movie-Review-App", "https://movies-review-app-02.netlify.app/"]
            },
            {
                name: "E-Commerce Site",
                image: `${images.ecommerce}`,
                description: "Online store with shopping cart",
                tags: ["React", "Context API", "CSS"],
                links: ["https://github.com/Ravichandran-D/Task-6-Add-to-Cart-Using-Router-", "https://task06-addtocart-router.netlify.app/"]
            },
            {
                name: "Notes App",
                image: `${images.weather}`,
                description: "Get real-time weather updates based on location",
                tags: ["React", "API", "CSS"],
                links: ["https://github.com/Ravichandran-D/Notes_App", "https://p2-notesapp.netlify.app/"]
            },
            {
                name: "Mobile Store",
                image: `${images.weather}`,
                description: "Purcheace Mobile,Tablets,Accecessories",
                tags: ["html", "javascript", "CSS"],
                links: ["https://github.com/Ravichandran-D/Notes_App", "https://p2-notesapp.netlify.app/"]
            },
        ],
        backend: [
            {
                name: "Recipe App",
                image: `${images.recipes}`,
                description: "Developed the backend for a Recipe App, enabling users to create, view, update, and delete recipes with full CRUD functionality.",
                tags: ["Node.js", "Express", "MongoDB", "Mongoose"],
                links: ["https://github.com/Ravichandran-D/recipes-app"]
            },
            {
                name: "Auth System",
                image: `${images.auth}`,
                description: "Developed a secure authentication system using JWT for user registration and login, ensuring authorized access to protected resources with token-based session management.",
                tags: ["Node.js", "Express", "jwt", "MongoDB"],
                links: ["https://github.com/Ravichandran-D/Authendication_Authorization"]
            },
            {
                name: "Password Reset",
                image: `${images.passwordReset}`,
                description: "Developed a secure password reset system that generates a unique token sent to the user's email, enabling safe password updates in case of forgotten credentials.",
                tags: ["Node.js", "MongoDB", "Mongoose", "Nodemailer"],
                links: ["https://github.com/Ravichandran-D/password-reset-backend"]
            },
            {
                name: "File Upload Service",
                image: `${images.cloudinary}`,
                description: "A service to upload files to Cloudinary, store URLs in MongoDB, and retrieve them via an API for secure and efficient file management.",
                tags: ["Node.js", "Cloudinary", "Multer", "MongoDB", "Mongoose"],
                links: ["https://github.com/Ravichandran-D/file_upload_service"]
            },
        ],
        mern: [
            {
                name: "Online Assessment Platform",
                image: `${images.assessment}`,
                description: "The Online Assessment Platform (MERN) allows students to log in, take scheduled exams, and view results. Admins can schedule exams, while security features like webcam monitoring and tab-switch detection ensure fairness. 🚀",
                tags: ["MongoDB", "Express", "React", "Node.js"],
                links: ["https://github.com/Ravichandran-D/online-assessment-platform-frontend", "https://github.com/Ravichandran-D/online-assessment-platform-backend ", "https://online-assessment-platform01.netlify.app/"]
            },
            
           
        ],
    };

    const categories = [
        { key: "frontend", label: "Frontend", icon: <FaLaptopCode className="text-blue-500" /> },
        { key: "backend", label: "Backend", icon: <FaServer className="text-green-500" /> },
        { key: "mern", label: "MERN", icon: <FaDatabase className="text-purple-500" /> },
    ];

    return (
        <div className="container max-w-screen-lg mx-auto flex flex-col lg:flex-row mt-8">
            {/* Sidebar */}
            <aside className="w-full md:w-1/3 lg:w-1/4 shadow-lg p-6 mb-6 lg:mb-0 rounded-lg">
                <h2 className="text-xl mb-6 text-white">Categories</h2>
                <ul className="space-y-4">
                    {categories.map((category) => (
                        <li
                            key={category.key}
                            onClick={() => setSelectedCategory(category.key)}
                            className={`flex items-center p-2 cursor-pointer border rounded-lg transition 
                                ${selectedCategory === category.key
                                    ? "border-4 border-sky-600 bg-gray-800 text-sky-300"
                                    : "hover:border-3 hover:bg-gray-800"
                                }`}
                        >
                            <div className="text-2xl mr-4">{category.icon}</div>
                            <span className="text-lg font-medium">{category.label}</span>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Project Display */}
            <main className="w-full lg:w-3/4 p-8">
                <h1 className="text-3xl font-bold mb-6 text-white">Projects</h1>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {projects[selectedCategory].map((project, index) => (
                        <motion.div
                            key={index}
                            className="p-6 border border-sky-600 shadow-lg rounded-lg bg-gray-900 hover:shadow-xl transition"
                            whileHover={{ scale: 1.03, rotate: 1 }}
                        >
                            <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h2 className="text-xl font-bold text-white mb-2">{project.name}</h2>
                            <p className="text-sky-400 mb-2">{project.description}</p>

                            {/* Tags and Links in the same row */}
                            <div className="mt-3 flex flex-col gap-2">
                                {/* First Row: Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-sm bg-gray-700 px-3 py-1 rounded-full text-white">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Second Row: Links */}
                                {project.links && (
                                    <div className="flex flex-wrap gap-4 mt-4">
                                    {project.links.map((link, i) => {
                                        const label =
                                            project.links.length === 3
                                                ? i === 0
                                                    ? "Frontend"
                                                    : i === 1
                                                        ? "Backend"
                                                        : "Demo"
                                                : i === 0
                                                    ? "GitHub"
                                                    : "Demo";
                                
                                        const Icon =
                                            label === "Frontend" ? FaCode :
                                            label === "Backend" ? FaServer :
                                            label === "GitHub" ? FaGithub :
                                            FaExternalLinkAlt;
                                
                                        return (
                                            <a
                                                key={i}
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium bg-gray-800 px-4 py-2 rounded-lg text-white shadow-md transition duration-300 hover:bg-gray-600 hover:scale-105"
                                            >
                                                <Icon className="text-lg" /> {label}
                                            </a>
                                        );
                                    })}
                                </div>
                                )}
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </div>
    );
};

export default Projects;
