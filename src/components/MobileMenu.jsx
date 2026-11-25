import { NavLink } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Works", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

function MobileMenu({ onClose }) {
  return (
    <motion.div
      className="mobile-menu"
      initial={{ opacity: 0, y: -10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={onClose}
          className={({ isActive }) =>
            `mobile-link ${isActive ? "active" : ""}`
          }
        >
          {link.name}
        </NavLink>
      ))}

      <div className="mobile-socials">
        <a
          href="https://https://github.com/Gpayuu"
          target="_blank"
          rel="noreferrer"
          className="social-link"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/
payal-gupta23
Vanity URL name
"
          target="_blank"
          rel="noreferrer"
          className="social-link"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </motion.div>
  );
}

export default MobileMenu;
