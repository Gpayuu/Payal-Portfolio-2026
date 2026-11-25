import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Code2,
  Brain,
  BarChart3,
} from "lucide-react";

const cards = [
  {
    number: "01",
    icon: GraduationCap,
    title: "EDUCATION",
    text: "MCA student at IET Lucknow, focused on software development, computer science and building practical technical skills.",
    value: "MCA • IET LUCKNOW",
  },

  {
    number: "02",
    icon: Code2,
    title: "FULL STACK",
    text: "Building modern web applications using React, Node.js, Express and MongoDB with a focus on clean and responsive experiences.",
    value: "MERN STACK",
  },

  {
    number: "03",
    icon: Brain,
    title: "MACHINE LEARNING",
    text: "Currently exploring Machine Learning with Python and developing a stronger foundation in data preparation, models and ML concepts.",
    value: "PYTHON • ML",
  },

  {
    number: "04",
    icon: BarChart3,
    title: "DATA ANALYTICS",
    text: "Learning data analysis and visualization using Python libraries such as NumPy, Pandas and Matplotlib.",
    value: "NUMPY • PANDAS • MATPLOTLIB",
  },
];

function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="section-label">
              01 / ABOUT
            </p>

            <h1 className="about-title">
              WHO
              <span>I AM</span>
            </h1>
          </div>

          <p className="about-intro">
            I'm Payal Gupta, an MCA student and developer interested
            in building modern web applications while exploring Machine
            Learning and Data Analytics.
          </p>
        </motion.div>

        {/* Main Description */}
        <motion.div
          className="about-main"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
        >
          <div className="about-big-number">
            01
          </div>

          <div className="about-description">

            <p>
              My primary focus is full-stack web development. I work
              with the MERN stack to build responsive interfaces,
              backend APIs and database-driven applications.
            </p>

            <p>
              Alongside development, I practice Data Structures and
              Algorithms with Java. I am also learning Machine Learning
              and Data Analytics with Python, including tools such as
              NumPy, Pandas and Matplotlib.
            </p>

            <a
              href="/work"
              className="about-link"
            >
              EXPLORE MY WORK
              <ArrowUpRight size={17} />
            </a>

          </div>
        </motion.div>

        {/* Cards */}
        <div className="about-grid">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                className="about-card"
                key={card.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
              >

                <div className="about-card-top">
                  <span>{card.number}</span>
                  <Icon size={20} />
                </div>

                <h3>
                  {card.title}
                </h3>

                <p>
                  {card.text}
                </p>

                <div className="about-card-value">
                  {card.value}
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default About;