import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    const handleResize = () => {
      if (window.innerWidth > 640) {
        setToggle(false); // Close the menu if screen is resized to larger than 640px
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.navbarPlaceholder}></div>

      <nav
        className={`${styles.navbar} ${
          scrolled ? styles.navbarScrolled : styles.navbarTransparent
        }`}
      >
        <div className={styles.container}>
          <Link
            to="/"
            className={styles.logoLink}
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className={styles.logoImage} />
            <p className={styles.logoText}>
              Maxwell Kumbong
            </p>
          </Link>

          {/* Nav Links - Hidden on small screens */}
          <ul className={styles.navLinks}>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${styles.navLinkItem} ${
                  active === nav.title ? styles.navLinkItemActive : ""
                } ${styles.navLinkItemHover}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Menu Button - Visible on small screens */}
          <div className={styles.menuButton} onClick={() => setToggle(!toggle)}>
            <img src={toggle ? close : menu} alt="menu" className={styles.menuButton} />
          </div>

          {/* Menu - Shows when toggle is true */}
          <div className={`${styles.menu} ${toggle ? styles.menuShow : ""}`}>
            <ul className={styles.menuLinks}>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${styles.menuLinkItem} ${
                    active === nav.title ? styles.menuLinkItemActive : ""
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
