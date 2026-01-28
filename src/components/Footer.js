import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-clrPrimaryLight text-white py-4 border-t border-sky-600">
            <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center px-4">
                {/* Social Media Links */}
                <div className="flex space-x-6">
                    <a
                        href="https://github.com/Ravichandran-D"
                        className="text-sky-600 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ravichandran-d-c67099309"
                        className="text-sky-600 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn size={24} />
                    </a>
                </div>

                {/* Copyright Section */}
                <div className="text-center text-sky-600 text-sm mt-4 md:mt-0">
                    © 2025 Ravichandran D. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
