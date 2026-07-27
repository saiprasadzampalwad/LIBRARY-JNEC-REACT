import React from 'react';
import Header from '../components/Header';
import NavbarComp from '../components/NavbarComp';
import Footer from '../components/Footer';
import Sider2 from '../components/Sider2';

const ServicesPage = () => {
  const services = [
    'Home Lending Service (2 books per student for 1 week; 10 books for Faculty for 6 months)',
    'Book Bank Facility available to all registered students',
    'Spacious Reading Room Facility (Seating capacity for 600+ students)',
    'Reference & Information Retrieval Services',
    'Reprography & Photocopying Facility',
    'Inter Library Loan (ILL) Service via DELNET Network',
    'Digital Library, High-Speed Internet Facility & MOOCs Learning Center',
    'NPTEL Video Lectures repository available for 930+ online courses',
    'Institutional Registration & Access on NDLI (National Digital Library of India)',
    'Automated Library Operations powered by JUNO ERP System',
    'OPAC (Online Public Access Catalogue) & Book Search in Student/Faculty Portals',
    'Dedicated Library Information Website (library.jnec.org)',
    'Online Repository of Previous Year Question Papers',
    'Anti-Plagiarism Checking Service using Ouriginal (URKUND) Software',
    '24-Hour Continuous Reading Room Facility during PL & Semester Exams',
    'Complimentary Tea/Coffee & Refreshments during Late Night Study Hours in PL/Exam',
    'DELNET Membership (Inter-Library Loan, access to 860 E-journals & 10,685 E-books)',
    'Access to 10,141+ E-books in Springer Engineering Collection',
    'Elsevier Science Direct Subscription for 275+ Peer-reviewed E-Journals',
    'Access to 1,076 E-Journals under Taylor & Francis ESS Package'
  ];

  return (
    <>
      <Header />
      <NavbarComp />

      <div className="page-title-banner">
        SERVICES & FACILITIES
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content">
          <div className="scrollable-content-box">
            <h4 style={{ color: "#703c19", fontWeight: "700", borderBottom: "2px solid #703c19", paddingBottom: "6px", marginBottom: "16px" }}>
              KRC (Central Library) Key Services & Facilities
            </h4>

            <table className="modern-table mb-0">
              <thead>
                <tr>
                  <th style={{ width: '80px', textAlign: 'center' }}>Sr. No</th>
                  <th>KRC Services & Facilities Description</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index}>
                    <td style={{ textAlign: 'center', fontWeight: '700' }}>{index + 1}.</td>
                    <td>{service}</td>
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
};

export default ServicesPage;

