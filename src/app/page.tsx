"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function About() {
  const [isStamped, setIsStamped] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        setIsStamped(true);
        setTimeout(() => setIsStamped(false), 1000); // Reset effect after 1s
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.card}
      >
        <motion.div whileHover={{ scale: 1.1 }} className={styles.imageWrapper}>
          <Image
            className={styles.profileImage}
            src="/photo1.jpg"
            alt="Jean"
            width={150}
            height={150}
          />
        </motion.div>
        <motion.h1
          className={`${styles.heading} ${isStamped ? styles.stamped : ""}`}
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          Software/DevOps Engineer
        </motion.h1>
        <motion.p className={styles.description} whileHover={{ scale: 1.02 }}>
          I'm a junior software developer & DevOps Engineer. When I'm not coding, 
          I'm automating workflows, streamlining processes, and making life more efficient—because 
          why do things manually when software can handle them?
        </motion.p>
        <motion.p className={styles.funFact} whileHover={{ scale: 1.05 }}>
          🤯 Fun fact: If I could debug real life like I debug code, traffic jams 
          and bad WiFi would be history!
        </motion.p>
      </motion.div>
    </div>
  );
}
