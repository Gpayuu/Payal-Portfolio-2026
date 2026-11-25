import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Server,
  Brain,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "FULL STACK",
    subtitle: "WEB DEVELOPMENT",
    description:
      "Building full-stack web applications using React, Node.js, Express and MongoDB with a focus on clean architecture and responsive interfaces.",
    skills: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    number: "02",
    icon: Monitor,
    title: "FRONTEND",
    subtitle: "DEVELOPMENT",
    description:
      "Creating responsive and modern user interfaces with React, JavaScript, HTML, CSS and Tailwind CSS.",
    skills: ["React", "JavaScript", "Tailwind", "CSS"],
  },
  {
    number: "03",
    icon: Server,
    title: "BACKEND",
    subtitle: "DEVELOPMENT",
    description:
      "Developing REST APIs and server-side functionality using Node.js and Express with MongoDB-based data management.",
    skills: ["Node.js", "Express", "REST API", "MongoDB"],
  },
  {
    number: "04",
    icon: Brain,
    title: "MACHINE",
    subtitle: "LEARNING",
    description:
      "Currently learning Machine Learning with Python and exploring data preparation, model building and ML concepts.",
    skills: ["Python", "Scikit-learn", "ML"],
  },
  {
    number: "05",
    icon: BarChart3,
    title: "DATA",
    subtitle: "ANALYTICS",
    description:
      "Exploring data analysis and visualization using Python libraries for working with and understanding datasets.",
    skills: ["NumPy", "Pandas", "Matplotlib"],
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="services-container">

        {/* HEADER */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="section-label">04 / EXPERTISE</p>

            <h1 className="services-title">
              WHAT I
              <span>BUILD</span>
            </h1>
          </div>

          <p className="services-intro">
            Areas I work with while building projects and continuously
            developing my skills across web development, programming,
            Machine Learning and Data Analytics.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className="services-list">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="service-card"
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.1,
                }}
              >
                <div className="service-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <Icon size={21} />
                </div>

                <div className="service-main">
                  <div className="service-title-wrap">
                    <h2>{service.title}</h2>
                    <h2 className="outline-text">
                      {service.subtitle}
                    </h2>
                  </div>

                  <p className="service-description">
                    {service.description}
                  </p>

                  <div className="service-skills">
                    {service.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="service-arrow">
                  <ArrowUpRight size={19} />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM */}
        <motion.div
          className="services-bottom"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="services-bottom-number">
            05
          </div>

          <div>
            <p className="services-bottom-label">
              CURRENT FOCUS
            </p>

            <h2>
              BUILD.
              <span>LEARN.</span>
              <strong>GROW.</strong>
            </h2>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;