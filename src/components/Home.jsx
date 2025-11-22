import React from 'react';

import { MdEmail } from 'react-icons/md';
import { FcPhone } from 'react-icons/fc';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Home() {
  const whatsappNumber = "01601450821";
  const whatsappMessage = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>

      {/* Hero Section - Premium Redesign */}
      <section className="relative hero min-h-screen mb-0 bg-[#0B1120]  flex items-center justify-center 
      px-6 lg:px-16 bg-gradient-to-br from-[#0A0F24] via-[#132043] to-[#1B3358] 
      text-white overflow-hidden my-16 py-5">

        {/* Background Soft Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]"></div>

        <div className="relative max-w-7xl w-full grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">

          {/* Right Side - Profile Image (Show First on Mobile) */}
          <div className="flex justify-center xl:justify-end order-1 xl:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[480px] xl:h-[480px]
            rounded-full border-[6px] border-white shadow-2xl overflow-hidden backdrop-blur-xl bg-white/10">

              {/* Glow Behind Image */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.35),transparent_70%)]"></div>

              <img 
                src="/tasfique.jpg" 
                alt="Tasfiqur Photo"
                className="relative w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Left Content (Show Second on Mobile, First on Desktop) */}
          <div className="space-y-8 text-center xl:text-left order-2 xl:order-1">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-xl">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Tasfiqur Rahman Siddique
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-blue-100">
              Full Stack Developer
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto xl:mx-0 leading-relaxed">
              I build fast, modern and scalable web applications with clean code, elegant UI, 
              and a focus on user-centered experience.
            </p>

            {/* Buttons */}
            <div className="flex flex-row  gap-4 justify-center xl:justify-start ">
              <button className="px-3 py-1 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                <a href="#projects">View My Work</a>
              </button>

              <button className="px-3 py-1 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300">
                Download Resume
              </button>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center animate-bounce hidden sm:block">
          <p className="text-sm text-blue-200 tracking-widest">SCROLL</p>
          <span className="text-2xl mt-1">↓</span>
        </div>

      </section>

      {/* About Section */}
      <section
        id="about"
        className="pt-20 px-6 bg-gray-50 text-black"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
            About Me
          </h2>

          <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-3xl p-8 sm:p-12 border border-white/20">

            <div className="space-y-6 text-center text-justify lg:text-left">

              <p className="text-lg sm:text-xl leading-relaxed text-blue-900 ">
                I'm a passionate Full Stack Developer who loves building fast, scalable,
                and user-focused digital experiences. My goal is to turn complex ideas
                into simple, clean, and elegant solutions.
              </p>

              <p className="text-lg sm:text-xl leading-relaxed text-blue-900">
                Outside coding, I explore modern technologies, create new projects,
                and constantly improve my problem-solving skills. Tech is my passion,
                and I enjoy every step of the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-10 px-6 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12">
            Skills & Technologies
          </h2>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Frontend */}
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {["Node.js", "Express.js", "Python", "MongoDB", "PostgreSQL"].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Tools & DevOps</h3>
              <div className="flex flex-wrap gap-3">
                {["Git", "GitHub", "Docker", "VS Code", "Postman", "Firebase", "AWS"].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
            Featured Projects
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            
            {/* Project Card */}
            {[
              {
                title: "Portfolio Website",
                image: "/images/20.png",
                desc: "A full-stackportfolio website with React, Node.js, and MongoDB featuring authentication, payments, and admin dashboard.",
                tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
                gradient: "from-blue-500 to-purple-600",
                link: "https://tasfique.netlify.app",
              },
              {
                title: "CUSAP Website",
                image: "/images/2.png",
                desc: "চট্টগ্রাম বিশ্ববিদ্যালয়ে অধ্যয়নরত পেকুয়ার শিক্ষার্থীদের উদ্যোগে গঠিত চিটাগাং ইউনিভার্সিটি স্টুডেন্টস অ্যাসোসিয়েশন অব পেকুয়া (CUSAP) একটি ছাত্রনেতৃত্বাধীন সংগঠন, যা শিক্ষার্থীদের মধ্যে সৌহার্দ্য, সহযোগিতা ও একাডেমিক সহায়তা বাড়াতে কাজ করে।",
                tech: ["React", "Firebase", "Tailwind", "MongoDB", "DaisyUI", "NodeJS","ExpressJS"],
                gradient: "from-green-500 to-blue-500",
                link:"https://cusap.netlify.app/"
              },

              {
                title: "Weather Dashboard",
                image: "/images/2.jpg",
                desc: "A real-time weather dashboard featuring charts, maps, and location-based forecasts.",
                tech: ["JavaScript", "API", "Chart.js", "Leaflet"],
                gradient: "from-orange-500 to-pink-500",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden
                           hover:shadow-2xl transition-all duration-300 
                           hover:-translate-y-2 group"
              >
                {/* Image / Header Gradient */}
                <div className="relative h-56 w-full overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Card Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6">{project.desc}</p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-6">
                    <a
                      href={project.link}
                      className="text-blue-600 hover:text-blue-800 font-medium transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 font-medium transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-blue-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">Contact</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-6 lg:space-y-8 text-blue-900">
              <p className="text-lg lg:text-xl text-blue-900 leading-relaxed text-center lg:text-left">
                I'm always interested in new opportunities and exciting projects. 
                Let's talk about how we can work together!
              </p>
              <div className="space-y-4 text-blue-900 lg:space-y-6">
                {[
                  { icon: <MdEmail className="text-xl sm:text-2xl text-blue-600" />, text: 'tasfique@std.cu.ac.bd', href: 'mailto:tasfique@std.cu.ac.bd' },
                  { icon: <FaWhatsapp  className="text-xl sm:text-2xl" />, text: '+8801601 450821', href: 'tel:+8801601450821' },
                  { icon: <FaLinkedin className="text-xl sm:text-2xl text-blue-600" />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/tasfiquecsecu/' },
                  { icon: <FaGithub className="text-xl sm:text-2xl text-gray-800" />, text: 'GitHub', href: 'https://github.com/TRSiddique' },
                  { icon: <FaFacebook className="text-xl sm:text-2xl text-blue-600" />, text: 'Facebook', href: 'https://www.facebook.com/TasfiqurRahmanSiddiquee/' }
                ].map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 sm:space-x-4 text-black hover:text-blue-600 transition-colors duration-200 text-base sm:text-lg lg:text-xl justify-center lg:justify-start"
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <form className="space-y-6 sm:space-y-8">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-blue-900 placeholder-gray-500 transition-colors duration-200 text-base sm:text-lg"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-blue-900 placeholder-gray-500 transition-colors duration-200 text-base sm:text-lg"
                  required
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-blue-900 placeholder-gray-500 transition-colors duration-200 text-base sm:text-lg resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 text-base sm:text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;