import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contacts';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Experience from './components/Experience';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import { Toaster } from "react-hot-toast";

// Animation wrapper component
const SectionWrapper = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
      }}
      className="text-center w-full"
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <div className="text-white">
        <Toaster position="top-right" />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <section className="min-h-screen flex items-center justify-center" id="hero">
                <Hero />
              </section>
            }
          />
          <Route
            path="/about"
            element={
              <section className="min-h-screen flex items-center justify-center" id="about">
                <SectionWrapper>
                  <About />
                </SectionWrapper>
              </section>
            }
          />
          <Route
            path="/skills"
            element={
              <section className="min-h-screen flex items-center justify-center" id="skills">
                <SectionWrapper>
                  <Skills />
                </SectionWrapper>
              </section>
            }
          />
          <Route
            path="/experience"
            element={
              <section className="w-full min-h-screen flex items-center justify-center" id="experience">
                <SectionWrapper>
                  <Experience />
                </SectionWrapper>
              </section>
            }
          />
          <Route
            path="/projects"
            element={
              <section className="w-full min-h-screen flex items-start justify-center text-white px-4 py-8" id="projects">
                <SectionWrapper>
                  <Projects />
                </SectionWrapper>
              </section>
            }
          />
          <Route
            path="/courses"
            element={
              <section className="w-full min-h-screen flex items-center justify-center" id="courses">
                <SectionWrapper>
                  <Courses />
                </SectionWrapper>
              </section>
            }
          />
          <Route
            path="/contact"
            element={
              <section className="min-h-screen flex items-center justify-center" id="contact">
                <SectionWrapper>
                  <Contact />
                </SectionWrapper>
              </section>
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
