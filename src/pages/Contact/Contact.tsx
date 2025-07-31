import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { sanitizeInput } from '../../utils/security';
import Layout from '../../components/Layout/Layout';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: sanitizeInput(value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Layout showSidebar={currentTheme === 'theme2'}>
      <div className={`${styles.contact} ${styles[currentTheme]}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </header>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <div className={styles.infoGrid}>
              <div className={`${styles.infoCard} ${styles[currentTheme]}`}>
                <h3>📧 Email</h3>
                <p>hello@themeswitch.com</p>
              </div>
              <div className={`${styles.infoCard} ${styles[currentTheme]}`}>
                <h3>📱 Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className={`${styles.infoCard} ${styles[currentTheme]}`}>
                <h3>📍 Address</h3>
                <p>123 Design Street<br />Creative City, CC 12345</p>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <h2>Send us a Message</h2>
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <h3>✅ Message Sent!</h3>
                <p>Thank you for your message. We'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={`${styles.form} ${styles[currentTheme]}`}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`${styles.input} ${styles[currentTheme]}`}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`${styles.input} ${styles[currentTheme]}`}
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`${styles.textarea} ${styles[currentTheme]}`}
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={`${styles.submitButton} ${styles[currentTheme]}`}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
