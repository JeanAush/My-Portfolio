"use client";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./projects.module.css";

const projects = [
  {
    title: "Tsetse Fly distribution and map control system",
    description:
      "Tsetse fly distribution and map system of sub saharan Africa, still under development, yet to be deployed",
    technologies: ["React", "Node.js", "PostreSQL"],
    github: "https://github.com/JeanAush/Tsetsefly.git",
    live: "",
  },
  {
    title: "Diabetes Care Connect (successfully implementing docker and jenkins)",
    description:
      "This application will help diabetic patients locate the nearest Insulin access point based on their location.",
    technologies: ["ngrok", "MongoDB", "Node.js"],
    github: "https://github.com/JeanAush/Diabetes-Care-Connect.git",
    live: "",
  },
  {
    title: "Add-blocker",
    description:
      "This application blocks intrusive ads and provides a smoother web browsing experience.",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/JeanAush/add-blocker.git",
    live: "",
  },
  {
    title: "virtual Machines",
    description:
      "Infrastructure as code with ansible and terraform",
    technologies: ["ansible", "yaml", "terraform"],
    github: "https://github.com/JeanAush/iac-w-ansible-terraform.git",
    live: "",
  },
  {
    title: "Vector Atlas",
    description:
      "A platform for gathering and visualizing data from remote areas of Sub-Saharan Africa, integrating GPS mapping and secure access controls. Contributed during my time at ICIPE",
    technologies: ["PSQL", "Next.js", "Typescript", "GIS"],
    github: "https://github.com/icipe-official/vectoratlas-software-code.git",
    live: "https://vectoratlas.icipe.org",
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>Some Projects and contributions (more projects can be found on my Github Account)</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={styles.projectCard}
          >
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.techStack}>
              {project.technologies.map((tech, i) => (
                <span key={i} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.projectLink} ${styles.projectLinkGitHub}`}
              >
                <FaGithub /> Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.projectLink} ${styles.projectLinkLive}`}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
