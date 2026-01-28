import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

// Dummy images (Replace with actual company logos)
import griLogo from "../assets/download.png";  


const experiences = [
    {
        id: 1,
        company: "Gandhigram rural university",
        role: "D.voc Software Development",
        duration: "Sep 2021 - Sep 2022 · 1 yr",
        location: "Dindigul",
        logo: griLogo,
        
    },
    {
        id: 2,
        company: "Gandhigram rural university",
        role: "B.sc Computer Science",
        duration: "Sep 2023 - Sep 2025 · 3 yr   ",
        location: "Dindigul",
        logo: griLogo,
    },
    
];

const Experience = () => {
    return (
        <section className="max-w-3xl mx-auto px-12 py-12">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
                Education
            </h2>

            <div className="grid gap-6">
                {experiences.map((exp) => (
                    <div key={exp.id} className=" shadow-lg rounded-lg p-6 flex items-center gap-6 border border-gray-200">
                        {/* Company Logo */}
                        <img src={exp.logo} alt={exp.company} className="w-16 h-16 object-cover rounded-md" />

                        {/* Details */}
                        <div>
                            <h3 className="text-xl font-semibold text-sky-500">{exp.role}</h3>
                            <p className="text-gray-600 font-medium">{exp.company} · {exp.type}</p>

                            <div className="mt-2 flex items-center gap-4 text-gray-500">
                                <span className="flex items-center gap-2">
                                    <FaCalendarAlt />
                                    {exp.duration}
                                </span>
                                <span className="flex items-center gap-2">
                                    <FaMapMarkerAlt />
                                    {exp.location}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
