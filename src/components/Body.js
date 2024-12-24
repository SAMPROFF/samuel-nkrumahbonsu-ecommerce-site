import React, { useState } from "react";
import image1 from "../assets/Mitsubishi L200 images.jpeg";
// import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

const EcommerceMain = () => {
  // State for toggling the services section
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    

    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>SAMPROFF MICRO TECHNOLOGY</div>
        <div style={styles.navLinks}>
          <a href="#home" style={styles.navLink}>
          <Link className="nav-link" to="/laptops">Laptops</Link>
          </a>
          <a href="#contact" style={styles.navLink}>
          <Link className="nav-link" to="/phones">Phones</Link>
          </a>
          <a href="#payment" style={styles.navLink}>
            Payment Options
          </a>
          <a href="#services" style={styles.navLink}>
            Services
          </a>
          <a href="#mitsubishi" style={styles.navLink}>
            Vehicle Hire
          </a>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">SAMPROF MICRO TECHNOLOGY Off</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/laptops">Laptops</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/phones">Phones</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav> */}
     {/* Search Bar */}
<div style={styles.searchBarContainer}>
  <input
    type="text"
    placeholder="Search for laptops, phones, or services..."
    style={styles.searchBar}
    id="searchInput" // Assign an ID for retrieval
  />
  <button
    style={styles.searchButton}
    onClick={() => {
      const query = document.getElementById("searchInput").value.toLowerCase(); // Capture input value
      if (query.includes("google")) {
        window.open("https://www.google.com", "_blank");
      } else if (query.includes("iphone 14 pro max")) {
        alert("iPhone 14 Pro Max is available for $1600.");
      } else if (query.includes("samsung a7")) {
        alert("Samsung A7 is available for $150.");
      } else if (query.includes("asus laptops")) {
        alert("Asus Laptops are available for $150.");
      } else if (query.includes("samsung tablet tap2")) {
        alert("Samsung Tablet Tap2 is available for $100.");
      } else if (query.includes("mitsubishi l200")) {
        alert(
          "Mitsubishi L200 2015 model is available for hire at GHS 1200 per day."
        );
      } else {
        alert("No results found. Please try a different search term.");
      }
    }}
  >
    Search
  </button>
</div>
{/* <Navbar /> */}

      {/* Main Content */}
      <section id="home" style={styles.section}>
        <h2 style={styles.sectionTitle}>
          Welcome to SAMPROFF MICRO TECHNOLOGY
        </h2>
        <p style={styles.description}>
          Your one-stop shop for troubleshooting laptops, phones, and computer
          accessories.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.section}>
        <h3 style={styles.sectionTitle}>
          <button style={styles.toggleButton} onClick={toggleServices}>
            {servicesOpen ? "Hide Services" : "Show Services"}
          </button>
        </h3>
        {servicesOpen && (
          <ul style={styles.servicesList}>
            <li>Troubleshooting laptops and phones</li>
            <li>Generating invoices and receipts</li>
            <li>Budget and business profiling</li>
            <li>Website creation and management</li>
          </ul>
        )}
      </section>

      {/* Payment Options Section */}
      <section id="payment" style={styles.section}>
        <h3 style={styles.sectionTitle}>Payment Options</h3>
        <ul style={styles.paymentOptions}>
          <li>MTN Mobile Money</li>
          <li>Bitcoin (BTC)</li>
          <li>Bank Payment</li>
        </ul>
      </section>

     {/* Contact Section */}
<section id="contact" style={styles.contactSection}>
  <h3 style={styles.contactTitle}>Contact Us</h3>
  
  {/* Phone */}
  <p style={styles.contactDetails}>
    📞{" "}
    <a href="tel:+233596308848" style={styles.contactLink}>
      +233 596308848
    </a>
  </p>
  
  {/* Email */}
  <p style={styles.contactDetails}>
    📧{" "}
    <a href="mailto:samproff2002@yahoo.co.uk" style={styles.contactLink}>
      samproff2002@yahoo.co.uk
    </a>
  </p>
  
  {/* WhatsApp */}
  <p style={styles.contactDetails}>
    💬{" "}
    <a
      href="https://wa.me/393505830180"
      target="_blank"
      rel="noopener noreferrer"
      style={styles.contactLink}
    >
      WhatsApp: +39 350 5830 180
    </a>
  </p>
</section>


      {/* Mitsubishi Details Section */}
      <section id="mitsubishi" style={styles.section}>
        <h3 style={styles.sectionTitle}>Mitsubishi L200 for Hire</h3>
        <p style={styles.description}>
          Model: 2015, Color: White <br />
          Available for hire within Ghana. Currently based in Sunyani West.
        </p>
        <p style={styles.description}>
          <strong>Rent per day:</strong> GHS 1200 <br />
          Includes vehicle maintenance, but fuel is not provided.
        </p><img
            src={image1}
            alt="Mitsubishi L200 Front View"
            style={styles.image}
          />
        <div style={styles.imageGallery}>
          
          {/* <img
            src="../assets/MITSUBISI L200 SIDE.jpeg"
            alt="Mitsubishi L200 Side View"
            style={styles.image} */}
          {/* /> */}
         
        </div>
      </section>
    </div>
  );
};

// Styling for the component
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  logo: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
  },
  searchBarContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  searchBar: {
    padding: "10px",
    width: "70%",
    borderRadius: "8px 0 0 8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  searchButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "0 8px 8px 0",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  section: {
    marginBottom: "30px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#555",
  },
  toggleButton: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  servicesList: {
    listStyleType: "disc",
    marginTop: "15px",
    textAlign: "left",
  },
  paymentOptions: {
    listStyleType: "none",
    padding: 0,
    marginTop: "15px",
    fontSize: "16px",
  },
  contactSection: {
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  contactTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  contactDetails: {
    fontSize: "16px",
    margin: "5px 0",
    color: "#555",
  },
  contactLink: {
    color: "#007bff",
    textDecoration: "none",
  },
  imageGallery: {
    // display: "grid",
    // gridTemplateColumns: "repeat(1, 1fr)",
    gap: "10px",
    marginTop: "20px",
    justifyContent: "center"
  },
  image: {
    // display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    width: "95%",
    // maxWidth: "1000px",
    height: "center",
    borderRadius: "20px",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    // objectFit: "cover",
    padding: "20px",
    backgroundColor: "#f8f8f8",
     
  },
  imagePlaceholder: {
    backgroundColor: "#ddd",
    height: "150px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
    color: "#555",
  },
};

export default EcommerceMain;
