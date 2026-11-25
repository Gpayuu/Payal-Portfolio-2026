import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Users, Lightbulb } from "lucide-react";

const points = [
  {
    number: "01",
    icon: Code2,
    title: "BUILD",
    text: "I enjoy turning ideas into practical web applications and working on projects that solve real problems.",
  },
  {
    number: "02",
    icon: Users,
    title: "COLLABORATE",
    text: "Open to collaborating on development projects, learning opportunities and interesting technical ideas.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "LEARN",
    text: "Continuously improving my skills in full-stack development, DSA, Machine Learning and Data Analytics.",
  },
];

function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-container">
        {/* HEADER */}
        <motion.div
          className="clients-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="section-label">05 / COLLABORATION</p>

            <h1 className="clients-title">
              LET'S
              <span>CONNECT</span>
            </h1>
          </div>

          <p className="clients-intro">
            I am always interested in connecting with people, collaborating on
            projects and exploring new opportunities to learn and build.
          </p>
        </motion.div>

        {/* MAIN MESSAGE */}
        <motion.div
          className="clients-main"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="clients-number">05</div>

          <div className="clients-message">
            <p className="clients-label">OPEN TO OPPORTUNITIES</p>

            <h2>
              PEOPLE
              <span>IDEAS</span>
              <strong>PROJECTS.</strong>
            </h2>

            <p className="clients-description">
              Whether it's building a web application, discussing technology,
              collaborating on a project or simply connecting with another
              developer, I'm open to meaningful conversations and opportunities.
            </p>

            <a href="/contact" className="clients-button">
              GET IN TOUCH
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* COLLABORATION CARDS */}
        <div className="clients-grid">
          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.div
                className="client-card"
                key={point.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
              >
                <div className="client-card-top">
                  <span>{point.number}</span>
                  <Icon size={20} />
                </div>

                <h3>{point.title}</h3>

                <p>{point.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* SOCIAL LINKS */}
        <motion.div
          className="clients-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span>FIND ME ONLINE</span>

          <div>
            <a
              href="https://github.com/Gpayuu"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
              <ArrowUpRight size={15} />
            </a>

            <a
              href="https://www.linkedin.com/in/
payal-gupta23
Vanity URL name
Edit/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Clients;
