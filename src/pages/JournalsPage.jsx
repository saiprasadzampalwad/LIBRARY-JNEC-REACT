import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import Sider2 from "../components/Sider2";
import { FaFilePdf, FaChevronDown, FaChevronUp } from "react-icons/fa";

const fallbackJournalYears = [
  { label: "Journals Subscribed for the Year - 2024", pdfLink: "LIST OF JOURNALS 2024.pdf" },
  { label: "Journals Subscribed for the Year - 2019", pdfLink: "NATIONAL PRINT JOURNALS 2019.pdf" },
  { label: "Journals Subscribed for the Year - 2018", pdfLink: "Journals for 2018.pdf" },
  { label: "Journals Subscribed for the Year - 2017", pdfLink: "2017 JOURNALS SUBSCRIBED FOR THE YEAR 2017.pdf" },
  { label: "Journals Subscribed for the Year - 2016", pdfLink: "2016 JOURNALS SUBSCRIBED FOR THE YEAR 2016.pdf" },
  { label: "Journals Subscribed for the Year - 2013", pdfLink: "2013 JOURNALS SUBSRIBED FOR THE YEAR 2013.pdf" },
];

export default function JournalsPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [items, setItems] = useState(fallbackJournalYears);

  useEffect(() => {
    const loadFromStaticIndex = async () => {
      try {
        const res = await fetch("/journals-index.json");
        if (!res.ok) throw new Error(`Failed to load /journals-index.json: ${res.status}`);
        const data = await res.json();

        const normalized = Array.isArray(data)
          ? data
          : Object.entries(data || {}).map(([label, pdfLink]) => ({ label, pdfLink }));

        const withReadableLabels = (normalized || [])
          .filter((x) => x && x.pdfLink)
          .map((x) => ({
            label: x.label,
            pdfLink: x.pdfLink,
          }));

        setItems(withReadableLabels.length ? withReadableLabels : fallbackJournalYears);
      } catch (err) {
        console.error(err);
        setItems(fallbackJournalYears);
      }
    };

    loadFromStaticIndex();
  }, []);

  return (
    <>
      <Header />
      <NavbarComp />

      <div className="page-title-banner">
        NEW ARRIVALS - JOURNALS
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content">
          <div className="scrollable-content-box">
            <p style={{ fontSize: 13, marginBottom: 16, color: "#6b7280" }}>
              Click on any journal subscription year below to view and download the official PDF list.
            </p>

            {items.map((item, i) => (
              <div key={item.pdfLink || i} className="modern-card mb-3" style={{ overflow: "hidden" }}>
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
                      href={`/journals/${encodeURIComponent(item.pdfLink)}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#703c19", fontSize: "14px", fontWeight: "600", textDecoration: "underline" }}
                    >
                      View / Download PDF: {item.pdfLink}
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


