import React from 'react';
import { Row, Col, Card, Button, Alert } from 'react-bootstrap';
import Header from '../components/Header';
import NavbarComp from '../components/NavbarComp';
import Footer from '../components/Footer';
import Sider2 from '../components/Sider2';

const EResourcesPage = () => {
  const resources = [
    { category: 'Major Databases', items: [
      { title: 'EBSCO - Academic Search Complete', url: 'https://search.ebscohost.com', desc: 'Full-text database covering multiple disciplines.' },
      { title: 'IEEE Xplore Digital Library', url: 'https://ieeexplore.ieee.org', desc: 'Technical literature in electrical engineering, computer science.' },
      { title: 'SpringerLink', url: 'https://link.springer.com', desc: 'Books and journals in science, technology, medicine.' },
      { title: 'ScienceDirect', url: 'https://www.sciencedirect.com', desc: 'Full-text scientific, technical, medical journals.' },
      { title: 'SCOPUS', url: 'https://www.scopus.com', desc: 'Largest abstract and citation database of peer-reviewed literature.' },
      { title: 'TURNITIN', url: 'https://www.turnitin.com', desc: 'Plagiarism detection and prevention tool.' },
    ] },
    { category: 'E-Books', items: [
      { title: 'Springer E-Books', url: 'https://link.springer.com', desc: 'Thousands of e-books in engineering and technology.' },
      { title: 'Wiley Online Library', url: 'https://onlinelibrary.wiley.com', desc: 'E-books and journals in various subjects.' },
    ] },
    { category: 'E-Journals', items: [
      { title: 'ASCE Journals', url: 'https://ascelibrary.org', desc: 'Civil engineering journals.' },
      { title: 'IEEE Journals', url: 'https://ieeexplore.ieee.org', desc: 'Electronics and engineering journals.' },
    ] },
    { category: 'Open Access Resources', items: [
      { title: 'DOAJ - Directory of Open Access Journals', url: 'https://doaj.org', desc: 'Free, full-text quality controlled journals.' },
      { title: 'arXiv', url: 'https://arxiv.org', desc: 'Preprints in physics, math, computer science.' },
      { title: 'PubMed Central', url: 'https://www.ncbi.nlm.nih.gov/pmc', desc: 'Free full-text biomedical literature.' },
    ] },
  ];

  const accessInfo = [
    'Use institutional login / Proxy access through library.',
    'Contact library staff for username/password for subscribed resources.',
    'Remote access available via VPN or library proxy.',
  ];

  return (
    <>
      <Header />
      <NavbarComp />

      <div className="page-title-banner">
        E-RESOURCES
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content">
          <div className="scrollable-content-box">
            <Alert variant="info" className="mb-4" style={{ borderRadius: '8px', borderLeft: '4px solid #0284c7' }}>
              <Alert.Heading style={{ fontSize: '16px', fontWeight: '700' }}>Library Access Information</Alert.Heading>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px' }}>
                {accessInfo.map((info, idx) => (
                  <li key={idx} style={{ marginBottom: '4px' }}>{info}</li>
                ))}
              </ul>
            </Alert>

            {resources.map((section, secIdx) => (
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
                            <Card.Title style={{ color: '#703c19', fontSize: '15px', fontWeight: '700' }}>{item.title}</Card.Title>
                            <Card.Text style={{ fontSize: '13px', color: '#4b5563' }}>{item.desc}</Card.Text>
                          </div>
                          <Button 
                            className="btn-primary-custom btn-sm mt-3 w-100" 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Access Resource 🔗
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
                For more resources or assistance, contact library staff or visit the circulation desk.
              </p>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default EResourcesPage;


