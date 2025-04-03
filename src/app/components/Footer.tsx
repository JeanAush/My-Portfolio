import styles from "./heafoo.module.css";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaSnapchat } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>&copy; {new Date().getFullYear()} Jean Auma. All rights reserved.</p>

        <div className={styles.contactInfo}>
          <p><FaPhone /> <a href="tel:+254759304400">+254 759 304 400</a></p>
          <p><FaEnvelope /> <a href="mailto:natwolijean@gmail.com">natwolijean@gmail.com</a></p>
        </div>

        {/* Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaSnapchat size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
