import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "APNA BUSINESS",
    category: "SAAS PLATFORM",
    description:
      "A full-stack SaaS platform designed for businesses to manage their digital presence and business-related workflows through a modern web application.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    featured: true,
    github: "https://github.com/AbhiDevp151",
    live: "#",
  },
  {
    number: "02",
    title: "LIBRARY MANAGEMENT",
    category: "MANAGEMENT SYSTEM",
    description:
      "A MERN-based library management application for managing books, users and book issue and return workflows through a dedicated interface.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    featured: false,
    github: "https://github.com/AbhiDevp151",
    live: "#",
  },
  {
    number: "03",
    title: "E-COMMERCE",
    category: "WEB APPLICATION",
    description:
      "A full-stack e-commerce application focused on creating a modern shopping experience with a React frontend and backend services.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    featured: false,
    github: "https://github.com/AbhiDevp151",
    live: "#",
  },
];

function Work() {
  return (
    <section className="work-section">
      <div className="work-container">

        {/* HEADER */}
        <motion.div
          className="work-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="section-label">03 / WORK</p>

            <h1 className="work-title">
              SELECTED
              <span>WORK</span>
            </h1>
          </div>

          <p className="work-intro">
            A selection of projects I have built while developing my
            skills in full-stack web development and modern application
            development.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15 + index * 0.12,
              }}
            >
              {/* PROJECT TOP */}
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              {/* PROJECT CONTENT */}
              <div className="project-content">

                <div className="project-info">
                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                {/* VISUAL */}
                <div className="project-visual">
                  <div className="project-visual-bg"></div>

                  <div className="project-code">
                    <span>&lt;</span>
                    <strong>/{project.title.split(" ")[0]}</strong>
                    <span>&gt;</span>
                  </div>

                  <div className="project-orbit orbit-one"></div>
                  <div className="project-orbit orbit-two"></div>

                  <div className="project-visual-label">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* PROJECT FOOTER */}
              <div className="project-footer">

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                   
                    GITHUB
                  </a>

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <ExternalLink size={16} />
                      LIVE
                    </a>
                  )}

                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-arrow"
                >
                  <ArrowUpRight size={20} />
                </a>

              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM */}
        <motion.div
          className="work-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <span>03 PROJECTS</span>

          <p>
            MORE PROJECTS
            <span>COMING SOON</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Work;