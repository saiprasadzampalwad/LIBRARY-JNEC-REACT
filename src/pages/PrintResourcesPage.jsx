import React, { useState } from "react";
import { Container, Row, Col, Card, Accordion, Button } from "react-bootstrap";
import Header from "../components/Header";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";

const PrintResourcesPage = () => {
  const [openKeys, setOpenKeys] = useState({});

  const toggleCategory = (category) => {
    setOpenKeys(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const booksData = {
    "Text Books by Department": {
      "Computer Engineering": [
        "Data Structures and Algorithms - Cormen (150+ copies)",
        "Computer Networks - Tanenbaum (120 copies)",
        "Database Systems - Korth (100 copies)",
        "Operating Systems - Galvin (90 copies)",
        "Software Engineering - Sommerville (80 copies)",
        "Computer Organization - Hamacher (75 copies)",
        "Compiler Design - Aho (70 copies)",
        "Artificial Intelligence - Russell (65 copies)"
      ],
      "Information Technology": [
        "Web Technology - Deitel (140 copies)",
        "Software Testing - Ron Patton (110 copies)",
        "Cloud Computing - Thomas Erl (95 copies)",
        "Big Data Analytics - Minelli (85 copies)",
        "Cyber Security - Stalling (75 copies)",
        "Mobile App Development - Reto Meier (70 copies)",
        "Data Mining - Han (65 copies)"
      ],
      "Mechanical Engineering": [
        "Engineering Mechanics - Beer & Johnston (200 copies)",
        "Thermodynamics - Cengel (180 copies)",
        "Strength of Materials - R S Khurmi (160 copies)",
        "Fluid Mechanics - Modi & Seth (140 copies)",
        "Machine Design - Shigley (110 copies)",
        "Manufacturing Engineering - Kalpakjian (105 copies)",
        "Heat Transfer - Incropera (100 copies)",
        "Industrial Engineering - O P Khanna (95 copies)"
      ],
      "Civil Engineering": [
        "Structural Analysis - Hibbeler (170 copies)",
        "Concrete Technology - Gambhir (150 copies)",
        "Geotechnical Engineering - Gopal Ranjan (130 copies)",
        "Surveying - Punmia (120 copies)",
        "Transportation Engineering - Khanna (110 copies)",
        "Environmental Engineering - Peavy (100 copies)",
        "Steel Structures - Subramanian (90 copies)"
      ],
      "Electronics & Telecommunication": [
        "Electronic Devices - Neamen (160 copies)",
        "Digital Signal Processing - Proakis (140 copies)",
        "Microprocessors - Gaonkar (130 copies)",
        "Communication Systems - Simon Haykin (120 copies)",
        "VLSI Design - Pucknell (110 copies)",
        "Antennas - Balanis (100 copies)",
        "Embedded Systems - Rajkamal (90 copies)"
      ],
      "Electrical Engineering": [
        "Electrical Machines - P S Bimbhra (170 copies)",
        "Power Systems - C L Wadhwa (150 copies)",
        "Control Systems - Nagrath & Gopal (130 copies)",
        "Digital Electronics - Morris Mano (120 copies)",
        "Circuit Theory - Hayt (100 copies)",
        "Power Electronics - Rash id (95 copies)",
        "Measurements - Sawhney (90 copies)"
      ],
      "Chemical Engineering": [
        "Chemical Reaction Engineering - Levenspiel (140 copies)",
        "Mass Transfer - Treybal (120 copies)",
        "Process Control - Stephanopoulos (110 copies)",
        "Heat Transfer - Kern (100 copies)",
        "Chemical Engineering Thermodynamics - Smith (95 copies)",
        "Fluid Mechanics - McCabe (90 copies)",
        "Unit Operations - McCabe (85 copies)"
      ],
      "MCA": [
        "Programming in C - Balaguruswamy (130 copies)",
        "Java Programming - Balaguruswamy (120 copies)",
        "Data Structures - Lipschutz (110 copies)",
        "Database Management - Korth (100 copies)",
        "Computer Networks - Tanenbaum (90 copies)",
        "Software Engineering - Pressman (85 copies)",
        "Web Technology - Ivan Bayross (80 copies)"
      ]
    },
    "Reference Books": [
      "Engineering Mathematics - B S Grewal (50 copies)",
      "GATE Previous Years Papers (All Branches) (30 copies)",
      "Handbook of Mechanical Engineering (25 copies)",
      "Dictionary of Engineering Terms (40 copies)",
      "Encyclopedia of Physics (35 copies)",
      "Marks Standard Handbook for Mechanical Engineers (20 copies)",
      "Perry's Chemical Engineering Handbook (25 copies)",
      "Electronics Engineer's Reference Book (30 copies)"
    ],
    "New Arrivals - Books": [
      "AI & Machine Learning Fundamentals (New 2024) - 20 copies",
      "Python Programming (Latest Edition) - 25 copies",
      "Renewable Energy Systems - 15 copies",
      "Cyber Security Essentials - 18 copies",
      "Indian Authors Engineering Books (20 copies)",
      "Quantum Computing Basics - 12 copies",
      "Industry 4.0 Technologies - 15 copies",
      "Sustainable Engineering Practices - 14 copies"
    ]
  };

  const accessInfo = [
    "Print resources available in Circulation and Reference sections.",
    "Book bank for semester-long loans (2-3 books per student).",
    "Total collection: 50,000+ books across all departments.",
    "Contact library staff for reservations or recommendations."
  ];

  const sectionStyle = {
    marginBottom: "3rem",
    padding: "2rem",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
  };

  const titleStyle = {
    color: "#703c19",
    fontWeight: "bold",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
  };

  return (
    <>
      <Header />
      <NavbarComp />
      <Container fluid style={{ boxShadow: '2px 2px 12px #606060', padding: '2rem 0', minHeight: '80vh' }}>
        <Row>
          <Col lg={12}>
            <h1 className="text-center mb-5" style={{ 
              ...titleStyle, 
              fontSize: '3rem', 
            }}>
              PRINT RESOURCES
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={11}>
            <div style={sectionStyle}>
              <h4 style={titleStyle}>Access Information</h4>
              <ul>
                {accessInfo.map((info, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5rem' }}>{info}</li>
                ))}
              </ul>
            </div>

            {Object.entries(booksData).map(([category, categoryData], secIdx) => (
              <div key={secIdx} style={sectionStyle}>
                <h3 style={{ ...titleStyle, borderBottom: '3px solid #703c19', paddingBottom: '1rem' }}>
                  {category}
                </h3>
                {Array.isArray(categoryData) ? (
                  <ul style={{ fontSize: '1.1rem' }}>
                    {categoryData.map((book, bIdx) => (
                      <li key={bIdx} style={{ marginBottom: '0.8rem' }}>
                        📚 {book}
                      </li>
                    ))}
                  </ul>
                ) : (
                  Object.entries(categoryData).map(([dept, books], dIdx) => (
                    <div key={dIdx} style={{ marginBottom: '2rem' }}>
                      <div 
                        style={{
                          background: "#d9d9d9",
                          padding: "12px 16px",
                          cursor: "pointer",
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#333",
                          borderRadius: "4px",
                          marginBottom: "8px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center"
                        }}
                        onClick={() => toggleCategory(`${category}-${dept}`)}
                      >
                        <span>{dept} ({books.length}+ books)</span>
                        <span>{openKeys[`${category}-${dept}`] ? "▲" : "▼"}</span>
                      </div>
                      {openKeys[`${category}-${dept}`] && (
                        <div style={{ 
                          padding: "12px 16px", 
                          background: "#f9f9f9", 
                          borderTop: "1px solid #ddd",
                          borderRadius: "0 0 4px 4px"
                        }}>
                          <ul style={{ fontSize: "14px" }}>
                            {books.slice(0, 8).map((book, bkIdx) => (
                              <li key={bkIdx}>{book}</li>
                            ))}
                            {books.length > 8 && (
                              <li style={{ fontStyle: "italic", color: "#666" }}>
                                ... and {books.length - 8} more titles
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            ))}

            <div className="text-center mt-5">
              <p style={{ fontSize: "1.1rem", color: "#666" }}>
                Comprehensive print collection catalogued by department and subject. Visit library for complete access.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PrintResourcesPage;

