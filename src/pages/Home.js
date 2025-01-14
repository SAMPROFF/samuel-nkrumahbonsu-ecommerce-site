import React from "react";
import EcommerceMain from "../components/Body";

const Home = () => {
  return (
    <div style={styles.container}>
      <EcommerceMain />
      <h1 style={styles.heading}>Welcome to BNS-SAMPROFF LIMITED COMPANY\</h1>
      <p style={styles.subHeading}>
        Your one-stop shop for the latest laptops and phones!
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
    margin: "20px 0",
  },
  subHeading: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
  },
};

export default Home;
