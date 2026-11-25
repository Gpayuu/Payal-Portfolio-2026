import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Landing() {
  return (
    <section className="hero-section">
      <div className="hero-card">
        {/* Status */}
        <motion.div
          className="hero-status"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="status-dot"></span>
          Available for opportunities
        </motion.div>

        {/* Main Content */}
        <div className="hero-content">
          {/* LEFT */}
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="hero-small-text">HELLO, I'M</p>

            <h1 className="hero-title">
              Payal
              <span>Gupta</span>
            </h1>

            <div className="hero-role">
              <span>Full Stack Developer</span>
              <span className="role-line"></span>
            </div>

            <p className="hero-focus">
              AI/ML Enthusiast • Data Analytics • Java & DSA
            </p>

            <p className="hero-description">
              I build modern web applications with the MERN stack while
              exploring Machine Learning, Data Analytics and problem solving
              with Java.
            </p>

            <div className="hero-buttons">
              <a
                href="https://drive.google.com/file/d/1NC3JaSkhDURvzAWlgpFsvmBejvIRUAsy/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="hero-btn primary"
              >
                HIRE ME
                <ArrowUpRight size={18} />
              </a>

              <a href="/work" className="hero-btn secondary">
                VIEW PROJECTS
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/AbhiDevp151"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/
payal-gupta23
Vanity URL name
"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="hero-glow"></div>

            <div className="hero-image">
              <img src="/payal image.jpg" alt="Payal Gupta" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Information */}
        <div className="hero-bottom">
          <div className="hero-bottom-item">
            <strong>01</strong>
            <span>
              Full Stack
              <br />
              Development
            </span>
          </div>

          <div className="hero-bottom-item">
            <strong>02</strong>
            <span>
              Artificial Intelligence
              <br />& Machine Learning
            </span>
          </div>

          <div className="hero-bottom-item">
            <strong>03</strong>
            <span>
              Java
              <br />& DSA
            </span>
          </div>

          <div className="hero-scroll">
            SCROLL TO EXPLORE
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
