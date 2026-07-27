import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Header from "../components/Header";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import Sider2 from "../components/Sider2";

const ENewsPapersPage = () => {
  const newspapers = [
    {
      category: "English Newspapers",
      items: [
        { title: "The Times of India", url: "https://timesofindia.indiatimes.com/", desc: "Leading English daily newspaper." },
        { title: "The Indian Express", url: "https://indianexpress.com/", desc: "National English daily with in-depth analysis." },
        { title: "The Hindu", url: "https://www.thehindu.com/", desc: "South India's leading English daily." },
        { title: "The Economic Times", url: "https://economictimes.indiatimes.com/", desc: "Business-focused English daily." },
        { title: "Hindustan Times", url: "https://www.hindustantimes.com/", desc: "Delhi-based English newspaper." },
      ],
    },
    {
      category: "Marathi Newspapers",
      items: [
        { title: "Lokmat", url: "https://www.lokmat.com/", desc: "Popular Marathi daily." },
        { title: "Sakal", url: "https://www.esakal.com/", desc: "Leading Marathi newspaper from Pune." },
      ],
    },
    {
      category: "Regional & International",
      items: [
        { title: "BBC News", url: "https://www.bbc.com/news", desc: "International news and analysis." },
        { title: "Economic Times", url: "https://economictimes.indiatimes.com/", desc: "Business and economy news." },
      ],
    },
  ];

  return (
    <>
      <Header />
      <NavbarComp />
      
      <div className="page-title-banner">
        E-NEWSPAPERS
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content">
          <div className="scrollable-content-box">
            {newspapers.map((section, secIdx) => (
              <div key={secIdx} className="mb-4">
                <h4 style={{ color: "#703c19", fontWeight: "700", borderBottom: "2px solid #703c19", paddingBottom: "6px", marginBottom: "16px" }}>
                  {section.category}
                </h4>
                <Row className="g-3">
                  {section.items.map((item, idx) => (
                    <Col md={6} lg={4} key={idx}>
                      <Card className="modern-card h-100">
                        <Card.Body className="d-flex flex-column justify-content-between">
                          <div>
                            <Card.Title style={{ color: "#703c19", fontSize: "15px", fontWeight: "700" }}>
                              {item.title}
                            </Card.Title>
                            <Card.Text style={{ fontSize: "13px", color: "#666" }}>
                              {item.desc}
                            </Card.Text>
                          </div>
                          <Button
                            variant="primary"
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary-custom btn-sm mt-3 w-100"
                          >
                            Read Online 📰
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
            <div className="text-center mt-3 p-3" style={{ background: "#faf8f5", border: "1px solid #f1ede6", borderRadius: "8px" }}>
              <p style={{ margin: 0, fontSize: "13.5px", color: "#6b7280" }}>
                Stay updated with current affairs and news through the Central Library's e-newspapers portal.
              </p>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default ENewsPapersPage;


