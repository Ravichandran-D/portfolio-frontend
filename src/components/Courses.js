import React from "react";
import { motion } from "framer-motion";
import diplomoCertificate from '../assets/Diplomo.jpeg';
import degreeCertificate from '../assets/Degree.jpeg';
import guviCertificate from '../assets/GuviCertification.png';
import { FaDownload } from "react-icons/fa";

const Courses = () => {
    const zoomIn = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8 },
        },
    };

    return (
        <section className="container max-w-screen-lg mx-auto py-10 px-5 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-white mb-6">Courses & Certifications</h1>
            <p className="text-lg text-sky-600 mb-10 text-center">
                Check out the courses I've completed and certifications earned.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Certificate 1 */}
                <motion.div
                    className="shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
                    variants={zoomIn}
                    initial="hidden"
                    animate="visible"
                >
                    <img
                        src={diplomoCertificate}
                        alt="Diplomo Certificate"
                        className="w-full h-72 object-cover rounded-md"
                    />
                    <div className="flex justify-between items-center mt-4">
                        <h2 className="text-lg font-semibold text-sky-600">
                            D.voc.Software Development (Gandhigram rural university,Dindigul)
                        </h2>
                        <a
                            href={diplomoCertificate}
                            download="Diplomo_Certificate.png"
                            className="text-lg text-sky-600 hover:text-sky-800 transition"
                        >
                            <FaDownload />
                        </a>
                    </div>
                </motion.div>

                {/* Certificate 2 */}
                <motion.div
                    className="shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
                    variants={zoomIn}
                    initial="hidden"
                    animate="visible"
                >
                    <img
                        src={degreeCertificate}
                        alt="Degree Certificate"
                        className="w-full h-72 object-cover rounded-md"
                    />
                    <div className="flex justify-between items-center mt-4">
                        <h2 className="text-lg font-semibold text-sky-600">
                            B.sc.Computer Science (Gandhigram rural university,Dindigul)
                        </h2>
                        <a
                            href={degreeCertificate}
                            download="Degree_Certificate.png"
                            className="text-lg text-sky-600 hover:text-sky-800 transition"
                        >
                            <FaDownload />
                        </a>
                    </div>
                </motion.div>

                {/* Certificate 3 */}
                <motion.div
                    className="shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
                    variants={zoomIn}
                    initial="hidden"
                    animate="visible"
                >
                    <img
                        src={guviCertificate}
                        alt="GUVI Full Stack Certificate"
                        className="w-full h-72 object-cover rounded-md"
                    />
                    <div className="flex justify-between items-center mt-4">
                        <h2 className="text-lg font-semibold text-sky-600">
                            IIT-M Pravartak Certified Full Stack Development Course With AI Tools
                        </h2>
                        <a
                            href={guviCertificate}
                            download="Guvi_Full_Stack_Certificate.png"
                            className="text-lg text-sky-600 hover:text-sky-800 transition"
                        >
                            <FaDownload />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Courses;
