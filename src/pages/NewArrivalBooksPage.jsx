import { useState } from "react";
import Header from "../components/Header";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import Sider2 from "../components/Sider2";
import { FaFilePdf, FaChevronDown, FaChevronUp } from "react-icons/fa";

const bookYears = [
  { label: "Chemical Engineering Books", pdfLink: "NewBooks/Chemical Engineering  Books Purchased 15-16.pdf" },
  { label: "Civil Engineering Books", pdfLink: "NewBooks/Civil Engineering  Books Purchased 15-16.pdf" },
  { label: "Computer Science Engineering Books", pdfLink: "NewBooks/Computer Science Engineering  Books Purchased 15-16.pdf" },
  { label: "Electrical Electronics & Power Engineering Books", pdfLink: "NewBooks/Electrical Electronics & Power Engineering  Books Purchased 15-16.pdf" },
  { label: "Electronics & Telecommunication Engineering Books", pdfLink: "NewBooks/Electronics & Telecommunication Engineering  Books Purchased 15-16.pdf" },
  { label: "Instrumentation and Control Engineering Books", pdfLink: "NewBooks/Instrumentation and Control Engineering Books Purchased 15-16.pdf" },
];

export default function NewArrivalBooksPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Header />
      <NavbarComp />

      <div className="page-title-banner">
        NEW ARRIVALS - BOOKS
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content">
          <div className="scrollable-content-box">
            <p style={{ fontSize: 13, marginBottom: 16, color: "#6b7280" }}>
              Select a department below to view the catalog of newly added books and purchases.
            </p>

            {bookYears.map((item, i) => (
              <div key={i} className="modern-card mb-3" style={{ overflow: "hidden" }}>
                <div
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  style={{
                    background: openIndex === i ? "#f6efe9" : "#ffffff",
                    padding: "14px 18px",
                    cursor: "pointer",
                    fontSize: "14.5px",
                    fontWeight: "700",
                    color: "#703c19",
                    userSelect: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "background 0.2s ease"
                  }}
                >
                  <span>{item.label}</span>
                  <span>{openIndex === i ? <FaChevronUp size={14} color="#703c19" /> : <FaChevronDown size={14} color="#9ca3af" />}</span>
                </div>
                {openIndex === i && item.pdfLink && (
                  <div
                    style={{
                      padding: "14px 18px",
                      background: "#faf8f5",
                      borderTop: "1px solid #e5e7eb",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <FaFilePdf color="#dc2626" size={18} />
                    <a
                      href={`/${item.pdfLink}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#703c19", fontSize: "14px", fontWeight: "600", textDecoration: "underline" }}
                    >
                      View Purchased Books Catalog ({item.label})
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
