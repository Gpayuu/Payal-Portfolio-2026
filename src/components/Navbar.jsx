import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Works", path: "/work" },
  { name: "Services", path: "/services" },
  { name: "Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

  const mobileLinkClass = ({ isActive }) =>
    `mobile-link ${isActive ? "active" : ""}`;

  return (
    <div className="navbar-wrap">
      <nav className="navbar">
        {/* Logo */}
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-code">&lt;/&gt;</span>
          <span>Payal</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Social Links */}
        <div className="nav-socials">
          <a
            href="https://github.com/Gpayuu"
            target="_blank"
            rel="noreferrer"
            className="social-link"
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
            className="social-link"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
          >
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={mobileLinkClass}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            <div className="mobile-socials">
              <a
                href="https://github.com/Gpayuu"
                target="_blank"
                rel="noreferrer"
                className="social-link"
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
                className="social-link"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
