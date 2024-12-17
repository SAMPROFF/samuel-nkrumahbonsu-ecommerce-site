import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.details}>
          <p style={styles.text}>
            📧 Email: <a href="mailto:samproff2002@yahoo.co.uk" style={styles.link}>samproff2002@yahoo.co.uk</a>
          </p>
          <p style={styles.text}>
            📞 Phone: <a href="tel:+233596308848" style={styles.link}>+233 596308848</a>
          </p>
          <p style={styles.text}>
            📍 Location: Sunyani NewDormaa Plot number 26/T, Ghana
          </p>
        </div>
        <p style={styles.copyright}>
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  details: {
    marginBottom: "15px",
  },
  text: {
    margin: "5px 0",
    fontSize: "16px",
  },
  link: {
    color: "#ffcc00",
    textDecoration: "none",
  },
  copyright: {
    fontSize: "14px",
    color: "#aaa",
  },
};

export default Footer;
