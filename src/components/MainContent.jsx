import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './Skeleton.css';

const MainContent = () => {
  const [data, setData] = useState({ title: '', fullText: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data-index.json')
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error('Fetch error:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <Container className="py-4">
        <h2 className="mb-4" style={{ color: '#703c19', fontWeight: 'bold' }}>
          <span className="bb-skeleton bb-skeleton-title" />
        </h2>

        <div
          style={{
            whiteSpace: 'pre-wrap',
            lineHeight: '1.6',
            fontSize: '1rem',
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            borderLeft: '4px solid #703c19',
          }}
        >
          <div className="bb-skeleton bb-skeleton-line" style={{ width: '100%' }} />
          <div className="bb-skeleton bb-skeleton-line" style={{ width: '100%' }} />
          <div className="bb-skeleton bb-skeleton-line" style={{ width: '100%' }} />
          <div className="bb-skeleton bb-skeleton-line" style={{ width: '100%' }} />
          <div className="bb-skeleton bb-skeleton-line" style={{ width: '70%' }} />
          <div className="bb-skeleton bb-skeleton-line" style={{ width: '100%' }} />
        </div>
      </Container>
    );

  return (
    <div className="scrollable-content-box">
      <h2 className="mb-3" style={{ color: '#703c19', fontWeight: 'bold', fontSize: '22px' }}>
        {data.title}
      </h2>
      <div 
        style={{ 
          whiteSpace: 'pre-wrap', 
          lineHeight: '1.65', 
          fontSize: '1.05rem',
          backgroundColor: '#faf8f5',
          padding: '18px',
          borderRadius: '8px',
          borderLeft: '4px solid #703c19',
          border: '1px solid #f1ede6',
          borderLeftWidth: '4px'
        }}
        dangerouslySetInnerHTML={{ __html: data.fullText.replace(/\n/g, '<br>') }}
      />
    </div>
  );


};

export default MainContent;
