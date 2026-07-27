import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', padding: '6px 0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
      <Container fluid="lg">
        <Row className="align-items-center">
          <Col xs={12} sm={3} md={2} className="text-center text-sm-start mb-1 mb-sm-0">
            <img 
              src="/images/mgm-u-logo.png" 
              alt="MGM Logo" 
              style={{ maxHeight: '72px', width: 'auto', objectFit: 'contain' }} 
              className="img-fluid" 
            />
          </Col>
          <Col xs={12} sm={6} md={8} className="text-center py-0">
            <div className="head_title2" style={{ color: '#2563eb', fontWeight: '700', fontSize: '12.5px', letterSpacing: '1px', marginBottom: '2px' }}>
              MGM UNIVERSITY
            </div>
            <h1 className="head_title" style={{ fontSize: '22px', margin: '2px 0', color: '#703c19', fontWeight: '800', lineHeight: '1.25' }}>
              JAWAHARLAL NEHRU ENGINEERING COLLEGE
              <span style={{ display: 'block', fontSize: '18px', color: '#1e3a8a', fontWeight: '700', marginTop: '1px' }}>
                CENTRAL LIBRARY
              </span>
            </h1>
            <div className="head_title2" style={{ color: '#4b5563', fontWeight: '600', fontSize: '11.5px', letterSpacing: '0.6px', marginTop: '2px' }}>
              Chhatrapati Sambhajinagar, Maharashtra
            </div>
          </Col>
          <Col xs={12} sm={3} md={2} className="text-center text-sm-end mt-1 mt-sm-0">
            <img 
              src="/images/naac-A-grade.jpg" 
              alt="NAAC A Grade" 
              style={{ maxHeight: '72px', width: 'auto', objectFit: 'contain', borderRadius: '6px' }} 
              className="img-fluid" 
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
};


export default Header;

