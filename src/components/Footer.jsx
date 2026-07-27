import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #4d280e 0%, #703c19 100%)',
      color: '#ffffff',
      padding: '24px 16px',
      marginTop: '40px',
      borderTop: '3px solid #d97706',
      textAlign: 'center'
    }}>
      <Container>
        <div style={{ fontSize: '15px', fontWeight: '700', letterSpacing: '0.5px' }}>
          Copyright © MGM's Jawaharlal Nehru Engineering College
        </div>
        <div style={{ fontSize: '13px', color: '#d1d5db', marginTop: '4px' }}>
          Central Library, CIDCO N-6, Chhatrapati Sambhajinagar - 431003, Maharashtra, India
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

