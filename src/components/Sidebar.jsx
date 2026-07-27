import React from 'react';
import QuickLinks from './QuickLinks';

const Sidebar = () => {
  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Latest News Card */}
      <div style={{
        background: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        overflow: 'hidden',
        border: '1px solid #e5e7eb'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #703c19 0%, #592e12 100%)',
          color: '#ffffff',
          textAlign: 'center',
          fontWeight: '700',
          fontSize: '14px',
          padding: '10px 14px',
          letterSpacing: '0.8px',
          textTransform: 'uppercase',
          borderBottom: '2px solid #d97706'
        }}>
          LATEST NEWS
        </div>
        <div style={{ padding: '14px', height: '180px', overflow: 'hidden' }}>
          <marquee behavior="scroll" direction="up" scrollAmount="2" style={{ color: '#374151', fontSize: '13.5px', lineHeight: '1.6' }}>
            📌 <strong>Book Issue Notice:</strong> P. L. Book Issue service is active.<br /><br />
            📖 <strong>Reading Room Hours:</strong> Open daily from 09:30 AM to 12:00 AM Midnight.<br /><br />
            🌐 <strong>E-Books Trail Access:</strong> Trial Access of World eBook Library started. Explore engineering e-books online via E-Resources.
          </marquee>
        </div>
      </div>

      {/* QuickLinks Component */}
      <QuickLinks />
    </aside>
  );
};

export default Sidebar;


