import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import QuickLinks from "../components/QuickLinks";

// Fallback if the static index cannot be loaded.
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

        // Accept:
        // 1) { "2024": "LIST OF JOURNALS 2024.pdf", ... }
        // 2) [{ label: "...", pdfLink: "..." }, ...]
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
        <div style={{ flex: 1 }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "#222",
              marginBottom: 16,
              letterSpacing: 1,
              fontFamily: "Georgia, serif",
            }}
          >
            NEW ARRIVALS - JOURNALS
          </h1>
          <p style={{ fontSize: 11, marginBottom: 10, color: "#555" }}>
            Click on the buttons to open the collapsible content.
          </p>

          {items.map((item, i) => (
            <div key={item.pdfLink || i} style={{ marginBottom: 4 }}>
              <div
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                style={{
                  background: "#d9d9d9",
                  padding: "10px 14px",
                  cursor: "pointer",
                  fontSize: 13,
                  color: "#333",
                  borderRadius: 2,
                  userSelect: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{item.label}</span>
                <span style={{ fontSize: 11, color: "#666" }}>{openIndex === i ? "▲" : "▼"}</span>
              </div>

              {openIndex === i && item.pdfLink && (
                <div
                  style={{
                    padding: "8px 14px",
                    background: "#f9f9f9",
                    borderTop: "1px solid #ddd",
                  }}
                >
                  <a
                    href={`/journals/${encodeURIComponent(item.pdfLink)}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#8B4513", fontSize: 12, textDecoration: "underline" }}
                  >
                    📄 {item.pdfLink}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ width: 195, flexShrink: 0 }}>
          <QuickLinks />

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
}

