import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import Sider2 from "../components/Sider2";

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

      <div className="page-title-banner">
        ABOUT LIBRARY
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content">
          <div className="scrollable-content-box">
            {/* Working Hours Table */}
            <h4 style={{ color: "#703c19", fontSize: "16px", fontWeight: "700", marginBottom: "12px", borderBottom: "2px solid #703c19", paddingBottom: "4px" }}>
              Library Working Hours
            </h4>
            <table className="modern-table">
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Days</th>
                  <th>Timings</th>
                </tr>
              </thead>
              <tbody>
                {workingHours.map((row) => (
                  <tr key={row.id}>
                    <td style={{ textAlign: "center", fontWeight: "600" }}>{row.id}</td>
                    <td>{row.days}</td>
                    <td style={{ textAlign: "center" }}>{row.timings}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Advisory Committee Table */}
            <h4 style={{ color: "#703c19", fontSize: "16px", fontWeight: "700", marginTop: "24px", marginBottom: "12px", borderBottom: "2px solid #703c19", paddingBottom: "4px" }}>
              List of Library Advisory Committee Members
            </h4>
            <table className="modern-table">
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Name of Staff</th>
                  <th>Department</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                {advisoryCommittee.map((member) => (
                  <tr key={member.sr}>
                    <td style={{ textAlign: "center", fontWeight: "600" }}>{member.sr}.</td>
                    <td>{member.name}</td>
                    <td style={{ textAlign: "center" }}>{member.department}</td>
                    <td style={{ textAlign: "center" }}>{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Library Staff Profile Table */}
            <h4 style={{ color: "#703c19", fontSize: "16px", fontWeight: "700", marginTop: "24px", marginBottom: "12px", borderBottom: "2px solid #703c19", paddingBottom: "4px" }}>
              Library Staff Profile
            </h4>
            <table className="modern-table mb-0">
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Name of Staff</th>
                  <th>Qualification</th>
                  <th>Designation</th>
                  <th>Section / Work</th>
                </tr>
              </thead>
              <tbody>
                {libraryStaff.map((staff) => (
                  <tr key={staff.sr}>
                    <td style={{ textAlign: "center", fontWeight: "600" }}>{staff.sr}</td>
                    <td>{staff.name}</td>
                    <td>{staff.qualification}</td>
                    <td>{staff.designation}</td>
                    <td>{staff.section}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>


      <Footer />
    </>
  );
}
