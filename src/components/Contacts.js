import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import toast from "react-hot-toast";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setLoading(true);

    // Make the POST request to your backend
    axios.post('https://portfolio-backend-main-fsgz.onrender.com/submit', formData)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        toast.success(response.data.message || "Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        toast.error(error.response.data.message || "Error sending message")
        console.error('Error submitting form:', error);
      });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="container max-w-screen-lg mx-auto py-8 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <p className="text-lg text-sky-600 mb-10 text-center">
        Fill out the form below or reach out via email.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Contact Form */}
        <motion.div
          className="p-6 shadow-md rounded-lg mx-auto max-w-md"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sky-600 text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-clrPrimaryLight border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sky-600 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-clrPrimaryLight border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sky-600 text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message here"
                rows="2"
                className="w-full px-4 py-2 bg-clrPrimaryLight border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 bg-sky-700 text-white font-bold rounded-md hover:bg-sky-500 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex flex-col justify-center items-center space-y-6 text-xl z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="https://github.com/Ravichandran-D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-blue-500 hover:text-white transition"
          >
            <FaGithub size={32} />
            <span className="text-lg">https://github.com/Ravichandran-D</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ravichandran-d-c67099309"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-blue-500 hover:text-white transition"
          >
            <FaLinkedinIn size={32} />
            <span className="text-lg">http://linkedin.com/in/Ravichandran-D</span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rtamilc67@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-blue-500 hover:text-white transition"
          >
            <SiGmail size={32} />
            <span className="text-lg">Rtamilc67@gmail.com</span>
          </a>
        </motion.div>
      </div>
    </section>

  );
};

export default Contact;
