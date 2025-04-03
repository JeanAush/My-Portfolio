import Image from "next/image";
import styles from "./about.module.css"; // Import the CSS

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Hello! I'm <strong className={styles.strong}>Jean Auma</strong>, a passionate software developer and deployment specialist
            with a background in Business Information Technology from Kabarak University and DevOps Engineering from Moringa School.
            My mission is to streamline processes by building innovative software solutions that solve real-world problems.
          </p>
          <p>
            With a solid foundation in React, Node.js, and cloud technologies, I’m skilled in building scalable, efficient, and dynamic web applications. 
            I’m also diving into <strong>DevOps</strong> and containerization to improve deployment and CI/CD workflows.
          </p>
          <p>
            When I'm not coding, you’ll find me crocheting, creating content on TikTok and Instagram, mentoring others, or contributing to different projects
            . I love giving back to society and making technology accessible.
          </p>
          <p>
            Looking for a passionate developer who thrives on solving real-world problems? Let's connect!
          </p>
        </div>
        <div className={styles.image}>
          <Image src="/photo2.jpg" alt="Jean Auma" width={250} height={250} className={styles.profilePic} />
        </div>
      </div>



      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skills}>
        <ol className={styles.skillsList}>
          <li>🔹 React.js & Next.js</li>
          <li>🔹 Node.js & Express.js</li>
          <li>🔹 MongoDB & PostgreSQL</li>
          <li>🔹 Docker & Kubernetes</li>
          <li>🔹 CI/CD & Jenkins</li>
          <li>🔹 Cloud Computing (Azure & MongoDB Atlas)</li>
          <li>🔹 WordPress & WPForms</li>
          <li>🔹 HR & Administrative Operations</li>
        </ol>
      </div>
    </div>
  );
}
