import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";

const workingHours = [
  { id: 1, days: "Working Days: Monday - Saturday", timings: "09:30 am - 05:00 pm" },
  { id: 2, days: "On Public Holidays", timings: "Closed" },
  { id: 3, days: "PL & During Examination", timings: "24 hrs (Sunday - Saturday)" },
];

const advisoryCommittee = [
  { sr: 1, name: "Dr. H. H. Shinde", department: "Principal", designation: "Chairman" },
  { sr: 2, name: "Mr. S. G. Nagaroje", department: "Mechanical", designation: "Member" },
  { sr: 3, name: "Mr. U.G. Jadhav", department: "Civil", designation: "Member" },
  { sr: 4, name: "Dr. K. W. Gaikwad", department: "Chemical", designation: "Member" },
  { sr: 5, name: "Mr. A.A. Mahadik", department: "IT", designation: "Member" },
  { sr: 6, name: "Mr. V. S. Hanmante", department: "CSE", designation: "Member" },
  { sr: 7, name: "Ms. B. A. Patil", department: "EEP", designation: "Member" }
];

const libraryStaff = [
  { sr: "01", name: "Mr. Harkal S.B.", qualification: "BA, B ED, MA, MLIB, UGC-NET, MH-SET, UGC-JRF", designation: "Librarian", section: "Administration" },
  { sr: "02", name: "Ms. Kadam M.B.", qualification: "B.A. B. Lib. M. Lib", designation: "Asst. Librarian", section: "Circulation Head" },
  { sr: "03", name: "Mr. Pawar D P", qualification: "BA, MA, MLIB", designation: "Library Assistant", section: "Circulation" },
  { sr: "04", name: "Mrs. Kadam V. A.", qualification: "BA. M. Lib. M. A., M. Phil.", designation: "Library Clerk", section: "Circulation" },
  { sr: "05", name: "Mr. Kadam N. S.", qualification: "BA, MA, M. Lib.", designation: "Library Clerk", section: "Technical Processing" },
  { sr: "06", name: "Mr. Wagdare C. M.", qualification: "BA", designation: "Library Clerk", section: "Book-bank" },
  { sr: "07", name: "Mr. Jagdale K.K.", qualification: "BA, M. Lib.", designation: "Library Clerk", section: "Circulation" },
  { sr: "08", name: "Mr. Kadam N S", qualification: "BA, M. Lib.", designation: "Library Assistant", section: "Reading" },
  { sr: "09", name: "Mr. Bhamble A K", qualification: "BSC SY", designation: "Library Clerk", section: "Reading" },
  { sr: "10", name: "Mrs. Kale M. B.", qualification: "BA", designation: "Library Clerk", section: "Circulation (ARCH)" },
  { sr: "11", name: "Mr. Palmate K. G.", qualification: "NON MATRIC", designation: "Peon", section: "Supporting" },
  { sr: "12", name: "Mrs. Ghode Suman", qualification: "IX", designation: "Sweeper", section: "Cleaning" }
];

export default function AboutPage() {
  const quickLinks = [
   { name: 'Open Education Resource', url: '/e-resources' },
{ name: 'Ask A LibrarianService', url: '/ask-librarian' },
    { name: 'New Arrivals- Books', url: 'new_arrival_books.php' },
    { name: 'Library Feedback Form', url: '/feedback' },
    { name: 'New Arrivals- Journals', url: '/journals' },
{ name: "Preparation-Question Paper's", url: '/question-papers' },
{ name: 'List of Book CDs', url: '/public/books cds record.pdf' },
    { name: "FAQ's about Library", url: '/faq' },
{ name: 'Image Gallery', url: '/gallery' }
 
];

const thStyle = {
  border: "1px solid #bbb",
  padding: "7px 10px",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "12px",
  color: "#000",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "6px 10px",
  fontSize: "12px",
  color: "#222",
};
  return (
    <>
      <Header />
      <NavbarComp />

      {/* Page Title */}
      <div
        style={{
          textAlign: "center",
          padding: "16px 0 10px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#222",
          background: "#f5f5f5",
          letterSpacing: 1,
          fontFamily: "Georgia, serif",
        }}
      >
        ABOUT LIBRARY
      </div>

      {/* Page Body */}
      <div
        style={{
          display: "flex",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "16px 16px 28px",
          gap: 22,
          alignItems: "flex-start",
        }}
      >
        {/* Left Sidebar */}
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
                    to={link.url}
                    style={{ color: "#222", fontSize: 12, textDecoration: "none", lineHeight: 1.35 }}
                    onMouseEnter={(e) => (e.target.style.color = "#8B3A00")}
                    onMouseLeave={(e) => (e.target.style.color = "#222")}
                  >
                    {link.name}
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

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            border: "1px solid #ccc",
            padding: "14px 16px",
            overflowX: "auto",
          }}
        >
          {/* Working Hours Table */}
          <div
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
              marginBottom: 8,
              color: "#000",
              fontSize: 13,
            }}
          >
            Library Working Hours
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 24 }}>
            <thead>
              <tr style={{ background: "#d9d9d9" }}>
                <th style={thStyle}>Sr. No</th>
                <th style={thStyle}>Days</th>
                <th style={thStyle}>Timings</th>
              </tr>
            </thead>
            <tbody>
              {workingHours.map((row) => (
                <tr key={row.id} style={{ background: "#fff" }}>
                  <td style={{ ...tdStyle, textAlign: "center" }}>{row.id}</td>
                  <td style={tdStyle}>{row.days}</td>
                  <td style={{ ...tdStyle, textAlign: "center" }}>{row.timings}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Advisory Committee Table */}
          <div
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
              marginBottom: 8,
              color: "#000",
              fontSize: 13,
            }}
          >
            List of Library Advisory committee members
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 24 }}>
            <thead>
              <tr style={{ background: "#d9d9d9" }}>
                <th style={thStyle}>Sr. No</th>
                <th style={thStyle}>Name of Staff</th>
                <th style={thStyle}>Department</th>
                <th style={thStyle}>Designation</th>
              </tr>
            </thead>
            <tbody>
              {advisoryCommittee.map((member) => (
                <tr key={member.sr} style={{ background: "#fff" }}>
                  <td style={{ ...tdStyle, textAlign: "center" }}>{member.sr}.</td>
                  <td style={tdStyle}>{member.name}</td>
                  <td style={{ ...tdStyle, textAlign: "center" }}>{member.department}</td>
                  <td style={{ ...tdStyle, textAlign: "center" }}>{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Library Staff Profile Table - Static */}
          <div
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
              marginBottom: 8,
              color: "#000",
              fontSize: 13,
            }}
          >
            Library Staff profile
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f1f1f1" }}>
                <th style={thStyle}>Sr. No</th>
                <th style={thStyle}>Name of staff</th>
                <th style={thStyle}>Qualification</th>
                <th style={thStyle}>Designation</th>
                <th style={thStyle}>Section/Work</th>
              </tr>
            </thead>
            <tbody>
              {libraryStaff.map((staff) => (
                <tr key={staff.sr} style={{ background: "#fff" }}>
                  <td style={{ ...tdStyle, textAlign: "center" }}>{staff.sr}</td>
                  <td style={tdStyle}>{staff.name}</td>
                  <td style={tdStyle}>{staff.qualification}</td>
                  <td style={tdStyle}>{staff.designation}</td>
                  <td style={tdStyle}>{staff.section}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}
