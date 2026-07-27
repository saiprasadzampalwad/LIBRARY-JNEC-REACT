import React from 'react';
import Header from '../components/Header';
import NavbarComp from '../components/NavbarComp';
import Footer from '../components/Footer';
import Sider2 from '../components/Sider2';

const ContactPage = () => {
  return (
    <>
      <Header />
      <NavbarComp />
      
      <div className="page-title-banner">
        CONTACT US
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content" style={{ textAlign: "center" }}>
          <div className="scrollable-content-box">
            <h3 style={{
              fontSize: "20px",
              lineHeight: "1.5",
              color: "#333",
              marginBottom: "20px",
              fontWeight: "600"
            }}>
              Jawaharlal Nehru Engineering College,<br />
              Central Library,<br />
              MGM Campus, CIDCO N-6,<br />
              Chhatrapati Sambhajinagar - 431003<br />
              <strong style={{ color: "#703c19" }}>Maharashtra (INDIA)</strong>
            </h3>

            <div style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#444",
              marginBottom: "24px"
            }}>
              <div style={{ marginBottom: "12px" }}>
                <strong style={{ color: "#703c19" }}>Website:</strong>{' '}
                <a href="http://library.jnec.org" target="_blank" rel="noopener noreferrer" style={{ color: "#703c19", fontWeight: "bold", textDecoration: "none" }}>
                  library.jnec.org
                </a>
              </div>
              <div style={{ marginBottom: "12px" }}>
                <strong style={{ color: "#703c19" }}>E-Mail:</strong>{' '}
                <a href="mailto:jneclibrary@gmail.com" style={{ color: "#703c19", fontWeight: "bold", textDecoration: "none" }}>
                  jneclibrary@gmail.com
                </a>
              </div>
              <div>
                <strong style={{ color: "#703c19" }}>Phone:</strong> 0240 - 2481433, 2482236
              </div>
            </div>

            <div style={{
              borderRadius: "8px",
              overflow: "hidden",
              marginTop: "20px",
              width: "100%",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15008.506148601064!2d75.34972810177527!3d19.876878077742127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba296c8864b0b%3A0x87ce8c9abbbce8e31!2sJNEC+Library!5e0!3m2!1sen!2sin!4v1517394689529"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JNEC Central Library Location"
              />
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
