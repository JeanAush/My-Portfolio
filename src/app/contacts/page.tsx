"use client";
import { useState } from "react";
import styles from "./contact.module.css";
import { motion } from "framer-motion"; // For animations
import axios from "axios"; // Correcting axios import

// Define types for form data
interface FormData {
    name: string;
    phone: string;
    message: string;
    email: string;
}

export default function Contacts() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        message: "",
        email: ""
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await axios.post("http://localhost:5000/api/submit-contact", formData);
            setSuccessMessage(response.data.message);
            setFormData({ name: "", phone: "", message: "", email: "" });
        } catch (err) {
            console.error("Error submitting message:", err);
            setErrorMessage("Failed to submit the message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await axios.post("http://localhost:5000/api/submit-contact", formData);
            setSuccessMessage(response.data.message);
            setFormData({ name: "", phone: "", message: "", email: "" });
        } catch (err) {
            console.error("Error submitting email:", err);
            setErrorMessage("Failed to submit the email. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.contactContainer}>
          

            <motion.h1
                className={styles.contactPrompt}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Drop a message 👇
            </motion.h1>

            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <motion.div
                className={styles.contactForm}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <form onSubmit={handleSubmitMessage}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.contactInput}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.contactInput}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.contactTextarea}
                    />
                    <motion.button
                        type="submit"
                        className={styles.contactButton}
                        whileHover={{ scale: 1.1 }}
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>
                </form>

                <h2>Email:</h2>
                <form onSubmit={handleSubmitEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.contactInput}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.contactInput}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className={styles.contactTextarea}
                    />
                    <motion.button
                        type="submit"
                        className={styles.contactButton}
                        whileHover={{ scale: 1.1 }}
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Email Me"}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}
