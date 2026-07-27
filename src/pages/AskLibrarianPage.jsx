import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import NavbarComp from '../components/NavbarComp';
import Footer from '../components/Footer';
import Sider2 from '../components/Sider2';
import { submitToGoogleSheets } from '../services/googleSheetsSubmit';

const AskLibrarianPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptUrl = import.meta.env.VITE_LIBRARIAN_SCRIPT_URL || import.meta.env.VITE_GAS_ENDPOINT_URL || '';
    await submitToGoogleSheets(scriptUrl, formData);

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };


  return (
    <>
      <Header />
      <NavbarComp />

      <div className="page-title-banner">
        ASK A LIBRARIAN SERVICE
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content">
          <div className="scrollable-content-box">
            {submitted && (
              <Alert 
                variant="success" 
                onClose={() => setSubmitted(false)} 
                dismissible
                className="mb-4"
                style={{ borderRadius: "8px", borderLeft: "4px solid #16a34a" }}
              >
                <Alert.Heading style={{ fontSize: "16px", fontWeight: "700" }}>
                  ✓ Query Submitted Successfully!
                </Alert.Heading>
                <p style={{ margin: 0, fontSize: "14px" }}>
                  Thank you! Your query has been submitted. Library staff will review your message and respond soon.
                </p>
              </Alert>
            )}

            <h3 style={{ color: "#703c19", marginBottom: "20px", fontWeight: "700", fontSize: "20px" }}>
              Have a question about library services? Ask our librarians!
            </h3>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "600", color: "#374151", fontSize: "14px" }}>
                  Full Name <span style={{ color: "#dc2626" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  style={{ borderRadius: "6px", fontSize: "14px" }}
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "600", color: "#374151", fontSize: "14px" }}>
                      Email Address <span style={{ color: "#dc2626" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@mgmu.ac.in"
                      required
                      style={{ borderRadius: "6px", fontSize: "14px" }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ fontWeight: "600", color: "#374151", fontSize: "14px" }}>
                      Phone Number
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      style={{ borderRadius: "6px", fontSize: "14px" }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label style={{ fontWeight: "600", color: "#374151", fontSize: "14px" }}>
                  Subject <span style={{ color: "#dc2626" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Book Renewal Request / E-Resource Access Issue"
                  required
                  style={{ borderRadius: "6px", fontSize: "14px" }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label style={{ fontWeight: "600", color: "#374151", fontSize: "14px" }}>
                  Your Question or Message <span style={{ color: "#dc2626" }}>*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your question or requirement in detail..."
                  required
                  style={{ borderRadius: "6px", fontSize: "14px" }}
                />
              </Form.Group>

              <Button type="submit" disabled={isSubmitting} className="btn-primary-custom px-4 py-2">
                {isSubmitting ? 'Submitting...' : 'Submit Query'}
              </Button>
            </Form>

            <div style={{ marginTop: "24px", padding: "16px", backgroundColor: "#faf8f5", border: "1px solid #f1ede6", borderRadius: "10px" }}>
              <h5 style={{ color: "#703c19", fontWeight: "700", fontSize: "15px", marginBottom: "6px" }}>
                <strong>Direct Email Support:</strong>
              </h5>
              <p style={{ fontSize: "14px", color: "#374151", margin: 0 }}>
                Email: <strong>jneclibrary@gmail.com</strong> | Phone: 0240 - 2481433<br />
                <span style={{ fontSize: "12.5px", color: "#6b7280" }}>
                  Library staff responds within 24-48 hours during working days.
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default AskLibrarianPage;


