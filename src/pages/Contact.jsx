import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* HEADER */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="section-label">06 / CONTACT</p>

            <h1 className="contact-title">
              LET'S
              <span>TALK</span>
            </h1>
          </div>

          <p className="contact-intro">
            Have a project idea, collaboration opportunity or just want to
            connect? Feel free to reach out.
          </p>
        </motion.div>

        {/* MAIN */}
        <div className="contact-main">
          {/* LEFT */}
          <motion.div
            className="contact-message"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="contact-big-text">HAVE AN</span>

            <span className="contact-big-text outline">IDEA?</span>

            <p>
              I'm always open to discussing development projects, interesting
              ideas, collaborations and opportunities to learn and build
              something meaningful.
            </p>

            <a
              href="https://github.com/Gpayuu"
              target="_blank"
              rel="noreferrer"
              className="contact-cta"
            >
              VIEW MY GITHUB
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {/* LOCATION */}
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <MapPin size={18} />
              </div>

              <div>
                <span>LOCATION</span>
                <p>Lucknow, India</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <Mail size={18} />
              </div>

              <div>
                <span>EMAIL</span>

                <a href="mailto:payalstudy.786@gmail.com">
                  payalstudy.786@gmail.com
                </a>
              </div>
            </div>

            {/* GITHUB */}
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <span className="contact-text-icon">GH</span>
              </div>

              <div>
                <span>GITHUB</span>

                <a
                  href="https://github.com/Gpayuu"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gpayuu
                </a>
              </div>
            </div>

            {/* LINKEDIN */}
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <span className="contact-text-icon">IN</span>
              </div>

              <div>
                <span>LINKEDIN</span>

                <a
                  href="https://www.linkedin.com/in/
payal-gupta23
Vanity URL name
"
                  target="_blank"
                  rel="noreferrer"
                >
                  Payal Gupta
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span>AVAILABLE FOR</span>

          <div>
            <span>INTERNSHIPS</span>
            <span>COLLABORATIONS</span>
            <span>PROJECTS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
