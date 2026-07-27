import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Header from "../components/Header";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import Sider2 from "../components/Sider2";

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
        "Power Electronics - Rashid (95 copies)",
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

  const departmentTableData = [
    { sr: 1, dept: 'Mech. Engg.', reqTitles: 1800, availTitles: 2702, reqVol: 9250, availVol: 12073 },
    { sr: 2, dept: 'M. Tech. mfg', reqTitles: 160, availTitles: 162, reqVol: 472, availVol: 585 },
    { sr: 3, dept: 'Chem. Engg.', reqTitles: 975, availTitles: 1135, reqVol: 5370, availVol: 5530 },
    { sr: 4, dept: 'Civil Engg.', reqTitles: 1525, availTitles: 1781, reqVol: 7625, availVol: 9950 },
    { sr: 5, dept: 'M. Tech. Stru.', reqTitles: 140, availTitles: 141, reqVol: 530, availVol: 549 },
    { sr: 6, dept: 'CSE', reqTitles: 1525, availTitles: 2708, reqVol: 8050, availVol: 10829 },
    { sr: 7, dept: 'M. Tech. CSE', reqTitles: 140, availTitles: 142, reqVol: 470, availVol: 617 },
    { sr: 8, dept: 'ECT', reqTitles: 1750, availTitles: 2246, reqVol: 8725, availVol: 10521 },
    { sr: 9, dept: 'M Tech. ECT', reqTitles: 136, availTitles: 136, reqVol: 830, availVol: 837 },
    { sr: 10, dept: 'EE', reqTitles: 800, availTitles: 812, reqVol: 4000, availVol: 4270 },
    { sr: 11, dept: 'M. Tech EPS', reqTitles: 130, availTitles: 137, reqVol: 440, availVol: 667 },
    { sr: 12, dept: 'Info. Tech.', reqTitles: 915, availTitles: 1254, reqVol: 4565, availVol: 6286 },
    { sr: 13, dept: 'B. Arch.', reqTitles: 1540, availTitles: 3127, reqVol: 4620, availVol: 4552 },
    { sr: 14, dept: 'M. Arch.', reqTitles: 135, availTitles: 135, reqVol: 550, availVol: 550 },
    { sr: 15, dept: 'MCA', reqTitles: 750, availTitles: 1236, reqVol: 7000, availVol: 7003 },
    { sr: 16, dept: 'App. Sci.', reqTitles: 966, availTitles: 966, reqVol: 5156, availVol: 5156 },
    { sr: '', dept: 'Total', reqTitles: 13387, availTitles: 18820, reqVol: 67653, availVol: 80240 }
  ];

  const renderDropBox = (title, data, id) => (
    <Card className="modern-card mb-3">
      <Card.Header 
        style={{ 
          backgroundColor: '#faf8f5', 
          cursor: 'pointer', 
          padding: '12px 18px',
          fontWeight: '700',
          color: '#703c19',
          borderBottom: openKeys[id] ? '1px solid #e5e7eb' : 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        onClick={() => toggleCategory(id)}
      >
        <span>{title} 📚</span>
        <span style={{ fontSize: '12px', color: '#6b7280' }}>{openKeys[id] ? '▲' : '▼'}</span>
      </Card.Header>
      {openKeys[id] && (
        <Card.Body style={{ padding: '16px 18px' }}>
          {typeof data === 'object' && !Array.isArray(data) ? (
            Object.entries(data).map(([dept, books]) => (
              <div key={dept} style={{ marginBottom: '1.2rem', borderLeft: '3px solid #703c19', paddingLeft: '12px' }}>
                <h6 style={{ color: '#703c19', marginBottom: '6px', fontWeight: '700', fontSize: '14px' }}>
                  {dept} ({books.length} titles)
                </h6>
                <ul style={{ fontSize: '13.5px', color: '#374151', lineHeight: '1.6', margin: 0, paddingLeft: '16px' }}>
                  {books.slice(0, 10).map((book, idx) => (
                    <li key={idx}>{book}</li>
                  ))}
                  {books.length > 10 && <li style={{ fontStyle: 'italic', color: '#6b7280' }}>...</li>}
                </ul>
              </div>
            ))
          ) : (
            <ul style={{ fontSize: '13.5px', color: '#374151', lineHeight: '1.6', margin: 0, paddingLeft: '16px' }}>
              {data.map((book, idx) => (
                <li key={idx}>{book}</li>
              ))}
            </ul>
          )}
        </Card.Body>
      )}
    </Card>
  );

  return (
    <>
      <Header />
      <NavbarComp />

      <div className="page-title-banner">
        PRINT RESOURCES
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content">
          <div className="scrollable-content-box">
            <h4 style={{ color: '#703c19', fontWeight: '700', marginBottom: '16px', borderBottom: '2px solid #703c19', paddingBottom: '6px' }}>
              Department-wise Book Holdings
            </h4>

            <div className="modern-table-responsive">
              <table className="modern-table">
                <thead>
                  <tr>
                    <th style={{ textAlign: 'center' }}>Sr. No</th>
                    <th>Department</th>
                    <th style={{ textAlign: 'center' }}>Req. Titles</th>
                    <th style={{ textAlign: 'center' }}>Avail. Titles</th>
                    <th style={{ textAlign: 'center' }}>Req. Volumes</th>
                    <th style={{ textAlign: 'center' }}>Avail. Volumes</th>
                  </tr>
                </thead>
                <tbody>
                  {departmentTableData.map((row, index) => (
                    <tr key={index} style={{ fontWeight: row.sr === '' ? 'bold' : 'normal', background: row.sr === '' ? '#f6efe9' : undefined }}>
                      <td style={{ textAlign: 'center' }}>{row.sr || ''}</td>
                      <td>{row.dept}</td>
                      <td style={{ textAlign: 'center' }}>{row.reqTitles ? row.reqTitles.toLocaleString() : ''}</td>
                      <td style={{ textAlign: 'center', fontWeight: '700', color: '#047857' }}>
                        {row.availTitles ? row.availTitles.toLocaleString() : ''}
                      </td>
                      <td style={{ textAlign: 'center' }}>{row.reqVol ? row.reqVol.toLocaleString() : ''}</td>
                      <td style={{ textAlign: 'center', fontWeight: '700', color: '#047857' }}>
                        {row.availVol ? row.availVol.toLocaleString() : ''}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h4 style={{ color: '#703c19', fontWeight: '700', marginTop: '24px', marginBottom: '16px', borderBottom: '2px solid #703c19', paddingBottom: '6px' }}>
              Sample Book Titles Catalogue
            </h4>

            {Object.entries(booksData).map(([mainCategory, data]) => renderDropBox(mainCategory, data, mainCategory.replace(/\s/g, '')))}
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default PrintResourcesPage;

