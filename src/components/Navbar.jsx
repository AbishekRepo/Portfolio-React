import { useState, useEffect } from "react";

const Navbar = () => {
  const [stickyNavbar, setStickyNavbar] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (scrollY > 20) {
        setStickyNavbar(true);
      } else {
        setStickyNavbar(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={stickyNavbar ? "navbar sticky" : "navbar"}>
      <div className="max-width">
        <div className="logo">
          <a href="#">
            Portfo<span>lio.</span>
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="#home" className="menu-btn">
              Home
            </a>
          </li>
          <li>
            <a href="#aboutMe" className="menu-btn">
              About
            </a>
          </li>
          {/* <li>
            <a href="#services" className="menu-btn">
              Services
            </a>
          </li> */}
          <li>
            <a href="#experience" className="menu-btn">
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" className="menu-btn">
              Skills
            </a>
          </li>
          <li>
            <a href="#teams" className="menu-btn">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="menu-btn">
              Contact
            </a>
          </li>
        </ul>
        <div className="menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
