import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "dark bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white min-h-screen"
          : "bg-gradient-to-b from-blue-50 via-white to-purple-50 text-black min-h-screen"
      }
    >
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 backdrop-blur-md bg-white/70 dark:bg-black/40 sticky top-0 shadow-lg z-50">
        <h1 className="text-2xl font-extrabold text-blue-600">Sravan.dev</h1>

        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#education" className="hover:text-blue-500">Education</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#experience" className="hover:text-blue-500">Experience</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#certifications" className="hover:text-blue-500">Certificates</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded-full bg-blue-600 text-white hover:scale-105 transition"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6">

        <img
    src="/profile.jpeg"
    alt="Sravan"
    className="w-44 h-44 rounded-full mx-auto mb-6 
    border-4 border-blue-500 shadow-2xl object-cover
    hover:scale-105 transition duration-300"
  />

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
          Hi, I'm Sravan 🚀
        </h1>

        <p className="mt-5 text-lg opacity-80">
          Full Stack Developer • Data Analysis • AI Enthusiast
        </p>

        <a
          href="/resume.pdf"
          download
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:scale-105 transition"
        >
          Download Resume
        </a>
          <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://github.com/Buntty2217"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 rounded-full bg-gray-800 text-white hover:scale-105 transition"
        >
          GitHub
        </a>
        <a
        href="https://linkedin.com/in/sravan-gorantla-604868371"
        target="_blank"
        rel="noreferrer"
        className="px-5 py-2 rounded-full bg-blue-600 text-white hover:scale-105 transition"
      >
        LinkedIn
      </a>
    </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="px-10 py-12">
        <h2 className="text-3xl font-bold mb-4">About Me 🌸</h2>

        <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
          Motivated B.Tech student specializing in Full Stack Development with hands-on experience in React, Node.js, MongoDB and AI/ML projects. Passionate about building real-world scalable applications.
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="px-10 py-12">
        <h2 className="text-3xl font-bold mb-6">Education 🎓</h2>

        <div className="space-y-4">
          <Card
            title="B.Tech - CSE"
            subtitle="Sasi Institute of Technology and Engineering"
            desc="2023 - 2027"
          />

          <Card
            title="Intermediate (MPC)"
            subtitle="Arka Junior College"
            desc="2021 - 2023"
          />
          <Card
            title="SSC Grade"
            subtitle="Dreamz High school"
            desc="2021"
          />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-10 py-12">
        <h2 className="text-3xl font-bold mb-6">Skills ⚡</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Python", "SQL"].map(
            (skill) => (
              <div
                key={skill}
                className="p-5 rounded-xl text-center bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-lg hover:scale-105 transition border border-white/20"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-10 py-12">
        <h2 className="text-3xl font-bold mb-6">Experience 💼</h2>

        <div className="p-6 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
          <h3 className="text-xl font-bold text-blue-500">
            AI/ML Intern – Skill Dzire
          </h3>

          <p className="text-sm opacity-70 mb-3">
            May 2025 – June 2025
          </p>

          <ul className="list-disc pl-5 space-y-2 opacity-80">
            <li>Built AI Diet Recommender System using Python ML workflows.</li>
            <li>Developed AI Language Translator using NLP techniques.</li>
            <li>Worked on full ML pipeline: preprocessing → model → output.</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-10 py-12">
        <h2 className="text-3xl font-bold mb-6">Projects 💡</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            ["Expense Tracker", "Income & expense analytics app"],
            ["Restaurant UI", "Modern food ordering interface"],
            ["Login System", "Secure authentication UI"],
            ["AI Translator", "Multi-language translator"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-lg hover:scale-105 transition border border-white/20"
            >
              <h3 className="text-xl font-bold text-purple-500">{title}</h3>
              <p className="opacity-80 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="px-10 py-12">
        <h2 className="text-3xl font-bold mb-6">Certifications 🏆</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "AI Internship - SkillDzire",
            "Python Certification",
            "UI/UX Design Certification",
            "Microsoft Excel Certification",
          ].map((cert) => (
            <div
              key={cert}
              className="p-5 rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-lg border border-white/20"
            >
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-12">
        <h2 className="text-3xl font-bold mb-4">Contact 📩</h2>

        <div className="p-6 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-lg max-w-md border border-white/20">
          <p>Email: sravangorantla99@gmail.com</p>
          <p>Phone: +91-9948872530</p>
          <p>LinkedIn: linkedin.com/in/sravan-gorantla-604868371</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 opacity-70">
        © 2026 Sravan 
      </footer>
    </div>
  );
}

/* CARD COMPONENT */
function Card({ title, subtitle, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-lg border border-white/20 hover:scale-105 transition">
      <h3 className="font-bold text-lg text-blue-500">{title}</h3>
      <p className="opacity-80">{subtitle}</p>
      <p className="text-sm opacity-60">{desc}</p>
    </div>
  );
}

export default App;