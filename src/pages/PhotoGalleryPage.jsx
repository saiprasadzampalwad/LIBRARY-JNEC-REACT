import { useState } from "react";
import Header from "../components/Header";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import Sider2 from "../components/Sider2";

const galleryImages = [
  { label: "Reading Hall", src: "images/1.jfif" },
  { label: "Main Library Floor", src: "images/2.jfif" },
  { label: "Staff Group Photo", src: "images/3.jpg" },
  { label: "Study Area", src: "images/4.jfif" },
  { label: "Lounge Seating", src: "images/5.jfif" },
  { label: "Book Stacks", src: "images/6.jfif" },
  { label: "Library Aisle", src: "images/7.jfif" },
  { label: "Reading Section", src: "images/8.jfif" },
  { label: "Colorful Shelves", src: "images/9.jfif" },
  { label: "Library Entrance", src: "images/10.jfif" },
  { label: "Building Exterior", src: "images/11.jfif" },
];

function GalleryThumb({ img }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: 180,
        borderRadius: 8,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 10px 20px rgba(0,0,0,0.2)"
          : "0 2px 8px rgba(0,0,0,0.08)",
        transform: hovered ? "translateY(-4px)" : "none",
        transition: "all 0.25s ease",
        position: "relative",
        border: "1px solid #e5e7eb"
      }}
    >
      <img
        src={img.src}
        alt={img.label}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 12,
          color: "#ffffff",
          fontWeight: "700",
          background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
          padding: "16px 8px 8px",
        }}
      >
        {img.label}
      </div>
    </div>
  );
}

export default function PhotoGalleryPage() {
  return (
    <>
      <Header />
      <NavbarComp />

      <div className="page-title-banner">
        PHOTO GALLERY
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content">
          <div className="scrollable-content-box">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {galleryImages.map((img, i) => (
                <GalleryThumb key={i} img={img} />
              ))}
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

