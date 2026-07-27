import React from 'react';
import QuickLinks from './QuickLinks';

const Sider2 = ({ title, links }) => {
  return (
    <aside
      className="sider2-container"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
    >
      {/* Go Green / Announcement Image Banner */}
      <div 
        style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          border: '1px solid #e5e7eb',
          textAlign: 'center'
        }}
      >
        <img
          src="/images/GO-Green-planet.jpg"
          alt="GO Green Planet"
          style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
        />
        <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '6px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Green Library Initiative
        </div>
      </div>

      {/* Quick Links Component */}
      <QuickLinks />
    </aside>
  );
};

export default Sider2;


