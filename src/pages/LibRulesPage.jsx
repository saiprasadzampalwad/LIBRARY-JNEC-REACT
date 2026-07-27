import React from 'react';
import Header from '../components/Header';
import NavbarComp from '../components/NavbarComp';
import Footer from '../components/Footer';
import Sider2 from '../components/Sider2';
import { Alert } from 'react-bootstrap';

const libraryRules = [
  'Book Transaction timings are 9:30 AM to 5:00 PM for Circulation Section.',
  'The Library is open 365 days a year (Excluding National Govt. Holidays).',
  'The Reading Room is open 24x7 during preparation leave (PL) in both semesters.',
  'Identity Card and college dress code must be strictly maintained while entering the Library.',
  'Biometric attendance is compulsory for all students & staff at the entry terminal.',
  'Mobile phone usage is strictly prohibited in Library premises (Violation attracts fine of Rs. 100/-).',
  'Two books per week are issued to every student from Circulation section against valid ID Card.',
  'Book Bank Scheme: Three books for FE students and two books for SE, TE, and BE students per term.',
  'Reference books from Reading Room section are issued for spot reference on Library Card.',
  'Maximum 10 books are issued to full-time faculty members and 2 books to visiting staff.',
  'In case of lost book: student/staff must pay 1.5x original cost or replace with latest edition + overdue fine.',
  'Overdue Fine: Rs. 10/- per day per book for first week, and Rs. 5/- per day thereafter.',
  'A Suggestion Box is available near the entrance for feedback and requests.',
  'Maintain complete silence and decorum inside the Reading Room.'
];

export default function LibRulesPage() {
  return (
    <>
      <Header />
      <NavbarComp />

      <div className="page-title-banner">
        LIBRARY RULES & REGULATIONS
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content">
          <div className="scrollable-content-box">
            <h4 style={{ color: "#703c19", fontWeight: "700", borderBottom: "2px solid #703c19", paddingBottom: "6px", marginBottom: "18px" }}>
              GENERAL RULES & REGULATIONS FOR STUDENTS & STAFF
            </h4>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {libraryRules.map((rule, idx) => (
                <li 
                  key={idx} 
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    marginBottom: "12px",
                    padding: "10px 14px",
                    background: idx % 2 === 0 ? "#faf8f5" : "#ffffff",
                    borderRadius: "6px",
                    border: "1px solid #f1ede6",
                    fontSize: "14px",
                    color: "#374151"
                  }}
                >
                  <span style={{ 
                    background: "#703c19", 
                    color: "#fff", 
                    borderRadius: "50%", 
                    width: "22px", 
                    height: "22px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontSize: "11px", 
                    fontWeight: "700",
                    flexShrink: 0,
                    marginTop: "2px"
                  }}>
                    {idx + 1}
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>

            <Alert variant="warning" className="mt-4 mb-0" style={{ borderRadius: "8px", borderLeft: "4px solid #f59e0b" }}>
              <strong style={{ color: "#b45309" }}>Note:</strong> Violation of any library rules may lead to revocation of membership privileges or disciplinary action.
            </Alert>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
