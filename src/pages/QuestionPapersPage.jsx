import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, Button, Accordion, Table } from 'react-bootstrap';

const quickLinks = [
  { label: "Open Education Resource", to: "/e-resources" },
  { label: "Ask A Librarian Service", to: "#" },
  { label: "New Arrivals- Books", to: "#" },
  { label: "Library Feedback Form", to: "/feedback" },
  { label: "New Arrivals- Journals", to: "/journals" },
  { label: "Preparation-Question Paper's", to: "/question-papers" },
  { label: "List of Book CDs", to: "#" },
  { label: "FAQ's about Library", to: "/faq" },
  { label: "Image Gallery", to: "/gallery" },
];

const QuestionPapersPage = () => {
  const papers = [
    { filename: 'MGMU BARCH ALL JUNE 2022.pdf', dept: 'BARCH', sem: 'ALL', year: '2022' },
    { filename: 'MGMU FY ALL JUNE 2022.pdf', dept: 'FY', sem: 'ALL', year: '2022' },
    { filename: 'MGMU MARCH ALL JUNE 2022.pdf', dept: 'MARCH', sem: 'ALL', year: '2022' },
    { filename: 'MGMU MCA ALL JUNE 2022.pdf', dept: 'MCA', sem: 'ALL', year: '2022' },
    { filename: 'MGMU MTECH CSE ALL JUNE 2022.pdf', dept: 'CSE', sem: 'MTECH ALL', year: '2022' },
    { filename: 'MGMU MTECH EPS ALL JUNE 2022.pdf', dept: 'EPS', sem: 'MTECH ALL', year: '2022' },
    { filename: 'MGMU MTECH GEOINFORMATICS ALL JUNE 2022.pdf', dept: 'Geoinformatics', sem: 'MTECH ALL', year: '2022' },
    { filename: 'MGMU MTECH STRUCTURE ALL JUNE 2022.pdf', dept: 'Structure', sem: 'MTECH ALL', year: '2022' },
    { filename: 'MGMU MTECH VLSI ES ALL JUNE 2022.pdf', dept: 'VLSI ES', sem: 'MTECH ALL', year: '2022' },
    { filename: 'MGMU PGDAIML ALL JUNE 2022.pdf', dept: 'PGD AIML', sem: 'ALL', year: '2022' },
    { filename: 'MGMU SY CHEMICAL ALL JUNE 2022.pdf', dept: 'Chemical', sem: 'SY', year: '2022' },
    { filename: 'MGMU SY CIVIL ALL JUNE 2022.pdf', dept: 'Civil', sem: 'SY', year: '2022' },
    { filename: 'MGMU SY CSE ALL JUNE 2022.pdf', dept: 'CSE', sem: 'SY', year: '2022' },
    { filename: 'MGMU SY EE ALL JUNE 2022.pdf', dept: 'EE', sem: 'SY', year: '2022' },
    { filename: 'MGMU SY IT ALL JUNE 2022.pdf', dept: 'IT', sem: 'SY', year: '2022' },
    { filename: 'MGMU SY MECHANICAL ALL JUNE 2022.pdf', dept: 'Mechanical', sem: 'SY', year: '2022' },
    { filename: 'MGMU SY STATISTICS ALL JUNE 2022.pdf', dept: 'Statistics', sem: 'SY', year: '2022' },
    { filename: 'MGMY SY ECT ALL JUNE 2022.pdf', dept: 'ECT', sem: 'SY', year: '2022' },
  ];

  const sectionStyle = {
    marginBottom: '2rem',
    padding: '2rem',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f8f9fa',
  };

  const titleStyle = {
    color: '#703c19',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  };

  return (
    <>
      <Header />
      <NavbarComp />

      {/* Page Body */}
      <div
        style={{
          display: "flex",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "22px 16px",
          gap: 22,
          alignItems: "flex-start",
        }}
      >
        {/* Main Area */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: 26,
              fontWeight: "bold",
              letterSpacing: 4,
              color: "#1a1a1a",
              marginBottom: 18,
              fontFamily: "Georgia, serif",
            }}
          >
            PREVIOUS YEAR QUESTION PAPERS (JUNE 2022)
          </h1>
          <p className="text-center mb-4" style={{ fontSize: '1.2rem', color: '#666' }}>
            Download previous year question papers. Click to view PDF.
          </p>
          <Table striped bordered hover responsive className="mb-5">
            <thead>
              <tr style={{ backgroundColor: '#703c19', color: 'white' }}>
                <th>Department/Course</th>
                <th>Semester</th>
                <th>Exam</th>
                <th>Download PDF</th>
              </tr>
            </thead>
            <tbody>
              {papers.map((paper, index) => (
                <tr key={index}>
                  <td>{paper.dept}</td>
                  <td>{paper.sem}</td>
                  <td>{paper.year} June ALL</td>
                  <td>
                    <Button 
                      variant="outline-primary" 
                      href={`/papers/${paper.filename}`} 
                      size="sm"
                      target="_blank"
                    >
                      📄 Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* Right Sidebar */}
        <div style={{ width: 195, flexShrink: 0 }}>
          {/* Quick Links */}
          <div
            style={{
              background: "#ede8db",
              border: "1px solid #b8a888",
              padding: "10px 14px 14px",
              marginBottom: 16,
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#8B3A00",
                fontSize: 14,
                marginBottom: 10,
                textDecoration: "underline",
              }}
            >
              QUICK LINKS
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {quickLinks.map((link, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: 7,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 5,
                  }}
                >
                  <span style={{ color: "#555", fontSize: 13, lineHeight: "17px", flexShrink: 0 }}>•</span>
                  <Link
                    to={link.to}
                    style={{ color: "#222", fontSize: 12, textDecoration: "none", lineHeight: 1.35 }}
                    onMouseEnter={(e) => (e.target.style.color = "#8B3A00")}
                    onMouseLeave={(e) => (e.target.style.color = "#222")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Go Green */}
          <div
            style={{
              background: "linear-gradient(170deg, #eaf7e8 0%, #c5e8b8 100%)",
              border: "2px solid #5aaa3a",
              borderRadius: 3,
              padding: "14px 10px 12px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: "bold",
                color: "#276010",
                fontStyle: "italic",
                marginBottom: 8,
                lineHeight: 1.3,
              }}
            >
              This is your planet
            </div>
            <div style={{ fontSize: 52, lineHeight: 1, marginBottom: 6 }}>🌍</div>
            <div
              style={{
                fontSize: 18,
                fontWeight: "900",
                color: "#276010",
                letterSpacing: 1,
                fontStyle: "italic",
              }}
            >
              go green!
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default QuestionPapersPage;
