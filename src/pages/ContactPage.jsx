import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaGlobe, 
  FaClock,
  FaExternalLinkAlt,
  FaMapMarkedAlt
} from 'react-icons/fa';
import Header from '../components/Header';
import NavbarComp from '../components/NavbarComp';
import Footer from '../components/Footer';
import Sider2 from '../components/Sider2';

const ContactPage = () => {
  const mapEmbedUrl = "https://maps.google.com/maps?q=19.879722,75.357128&hl=en&z=17&output=embed";
  const externalMapUrl = "https://www.google.com/maps?q=19.879722,75.357128";

  return (
    <>
      <Header />
      <NavbarComp />
      
      <div className="page-title-banner">
        CONTACT US
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content">
          <div className="scrollable-content-box">
            <h4 style={{ color: "#703c19", fontWeight: "700", borderBottom: "2px solid #703c19", paddingBottom: "8px", marginBottom: "20px", fontSize: "20px" }}>
              JNEC Central Library — Contact & Location Info
            </h4>

            <Row className="g-3">
              {/* Left Column: Contact Details Cards */}
              <Col lg={6}>
                <div className="d-flex flex-column gap-3">
                  {/* Address Card */}
                  <Card className="modern-card p-3" style={{ borderLeft: '5px solid #703c19', backgroundColor: '#ffffff' }}>
                    <div className="d-flex align-items-start gap-3">
                      <div style={{ background: '#f6efe9', color: '#703c19', padding: '14px', borderRadius: '12px', fontSize: '22px', flexShrink: 0 }}>
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <h6 style={{ color: '#703c19', fontWeight: '700', fontSize: '16.5px', marginBottom: '6px' }}>
                          Library Postal Address
                        </h6>
                        <p style={{ fontSize: '14.5px', color: '#374151', margin: 0, lineHeight: '1.6' }}>
                          <strong>Jawaharlal Nehru Engineering College</strong><br />
                          Central Library (KRC), MGM Campus, CIDCO N-6,<br />
                          Chhatrapati Sambhajinagar - 431003<br />
                          <strong style={{ color: '#703c19' }}>Maharashtra (INDIA)</strong><br />
                          <span style={{ fontSize: '13px', color: '#6b7280' }}>GPS Coordinates: 19.879722, 75.357128</span>
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Online & Phone Channels */}
                  <Card className="modern-card p-3" style={{ borderLeft: '5px solid #0284c7', backgroundColor: '#ffffff' }}>
                    <div className="d-flex align-items-start gap-3">
                      <div style={{ background: '#e0f2fe', color: '#0284c7', padding: '14px', borderRadius: '12px', fontSize: '22px', flexShrink: 0 }}>
                        <FaEnvelope />
                      </div>
                      <div>
                        <h6 style={{ color: '#0284c7', fontWeight: '700', fontSize: '16.5px', marginBottom: '6px' }}>
                          Communication Channels
                        </h6>
                        <div style={{ fontSize: '14.5px', color: '#374151', lineHeight: '1.7' }}>
                          <div>
                            <FaGlobe className="me-2 text-primary" />
                            <strong>Website:</strong>{' '}
                            <a href="http://library.jnec.org" target="_blank" rel="noopener noreferrer" style={{ color: '#703c19', fontWeight: '700', textDecoration: 'none' }}>
                              library.jnec.org
                            </a>
                          </div>
                          <div>
                            <FaEnvelope className="me-2 text-primary" />
                            <strong>E-Mail:</strong>{' '}
                            <a href="mailto:jneclibrary@gmail.com" style={{ color: '#703c19', fontWeight: '700', textDecoration: 'none' }}>
                              jneclibrary@gmail.com
                            </a>
                          </div>
                          <div>
                            <FaPhoneAlt className="me-2 text-primary" />
                            <strong>Phone:</strong> 0240 - 2481433, 2482236
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Working Hours Card */}
                  <Card className="modern-card p-3" style={{ borderLeft: '5px solid #059669', backgroundColor: '#faf8f5' }}>
                    <div className="d-flex align-items-start gap-3">
                      <div style={{ background: '#d1fae5', color: '#059669', padding: '12px', borderRadius: '10px', fontSize: '20px', flexShrink: 0 }}>
                        <FaClock />
                      </div>
                      <div>
                        <h6 style={{ color: '#059669', fontWeight: '700', fontSize: '15.5px', marginBottom: '4px' }}>
                          Library Operational Timings
                        </h6>
                        <p style={{ fontSize: '13.5px', color: '#374151', margin: 0, lineHeight: '1.5' }}>
                          <strong>Circulation Desk:</strong> Mon - Sat: 9:30 AM to 5:00 PM<br />
                          <strong>Reading Room:</strong> 24x7 Open during Examination/PL
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </Col>

              {/* Right Column: Google Maps Box with Exact Coordinates */}
              <Col lg={6}>
                <Card className="modern-card p-3 h-100 d-flex flex-column" style={{ border: '1px solid #e5e7eb' }}>
                  <div className="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
                    <h6 style={{ color: '#703c19', fontWeight: '700', fontSize: '15.5px', margin: 0 }}>
                      <FaMapMarkedAlt className="me-2 text-danger" />
                      Live Map Location (19.879722, 75.357128)
                    </h6>
                    <a 
                      href={externalMapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-sm btn-outline-secondary py-1 px-3"
                      style={{ fontSize: '12.5px' }}
                    >
                      Open Maps <FaExternalLinkAlt style={{ fontSize: '11px' }} />
                    </a>
                  </div>
                  <div style={{ borderRadius: '10px', overflow: 'hidden', flex: 1, minHeight: '340px', width: '100%' }}>
                    <iframe
                      src={mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0, display: 'block', minHeight: '340px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="JNEC Central Library Location 19.879722, 75.357128"
                    />
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
