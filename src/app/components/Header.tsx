"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react"; // Import Menu Icon
import styles from "./heafoo.module.css"; // Import CSS

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* LOGO */}
        <h1 className={styles.logo}>Jean Auma</h1>

        {/* MENU ICON (For Mobile) */}
        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={30} />
        </div>

        {/* NAVIGATION LINKS */}
        <nav className={`${styles.navList} ${menuOpen ? styles.active : ""}`}>
          <ul>
            <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/contacts" onClick={() => setMenuOpen(false)}>Contact me</Link></li>

          </ul>
        </nav>

        {/* DOWNLOAD RESUME BUTTON */}
        <a
          href="http://localhost:5000/download-cv" 
          download
          className={styles.resumeButton}
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}
