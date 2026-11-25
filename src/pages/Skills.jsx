import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Brain,
  BarChart3,
  Terminal,
  GitBranch,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "FRONTEND",
    icon: Code2,
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "BACKEND",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    number: "03",
    title: "DATABASE",
    icon: Database,
    skills: ["MongoDB", "MySQL"],
  },
  {
    number: "04",
    title: "PROGRAMMING",
    icon: Terminal,
    skills: ["Java", "Python", "C++", "DSA", "OOP"],
  },
  {
    number: "05",
    title: "MACHINE LEARNING",
    icon: Brain,
    skills: ["Machine Learning", "Scikit-learn", "Python"],
  },
  {
    number: "06",
    title: "DATA ANALYTICS",
    icon: BarChart3,
    skills: ["NumPy", "Pandas", "Matplotlib", "Data Analysis"],
  },
  {
    number: "07",
    title: "TOOLS",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        {/* HEADER */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="section-label">02 / SKILLS</p>

            <h1 className="skills-title">
              MY
              <span>STACK</span>
            </h1>
          </div>

          <p className="skills-intro">
            Technologies and tools I use to build web applications, solve
            programming problems and explore Machine Learning and Data
            Analytics.
          </p>
        </motion.div>

        {/* SKILL GRID */}
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                className="skill-card"
                key={group.number}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.08,
                }}
              >
                <div className="skill-card-top">
                  <span className="skill-number">{group.number}</span>

                  <Icon size={20} />
                </div>

                <h3>{group.title}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          className="skills-bottom"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="skills-bottom-number">07</div>

          <div className="skills-bottom-text">
            <p>FULL STACK • AI & MACHINE LEARNING • DATA • DSA</p>

            <h2>
              BUILDING,
              <span>LEARNING,</span>
              <strong>IMPROVING.</strong>
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
