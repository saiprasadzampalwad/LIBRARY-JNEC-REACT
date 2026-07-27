import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const quickLinksData = [
  { name: 'Open Education Resource', url: '/e-resources' },
  { name: 'E-News papers', url: '/e-news-papers' },
  { name: 'Ask A Librarian Service', url: '/ask-librarian' },
  { name: 'New Arrivals - Books', url: '/new-arrival-books' },
  { name: 'Library Feedback Form', url: '/feedback' },
  { name: 'New Arrivals - Journals', url: '/journals' },
  { name: "Preparation - Question Papers", url: '/question-papers' },
  { name: "FAQ's about Library", url: '/faq' },
  { name: 'Image Gallery', url: '/gallery' }
];

const QuickLinks = () => {
  return (
    <div className="quick-links-card" style={{
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
        fontSize: '15px',
        padding: '11px 14px',
        letterSpacing: '0.8px',
        textTransform: 'uppercase',
        borderBottom: '2px solid #4a270f'
      }}>
        QUICK LINKS
      </div>
      <ul style={{ margin: 0, padding: '8px 0', listStyle: 'none' }}>
        {quickLinksData.map((link, i) => (
          <li key={i} style={{ borderBottom: i < quickLinksData.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
            <NavLink
              to={link.url}
              className={({ isActive }) => `d-flex align-items-center justify-content-between px-3 py-2 text-decoration-none ${isActive ? 'fw-bold text-primary' : ''}`}
              style={({ isActive }) => ({
                color: isActive ? '#703c19' : '#374151',
                backgroundColor: isActive ? '#f8f4f0' : 'transparent',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.2s ease'
              })}

              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f4f0';
                e.currentTarget.style.color = '#703c19';
                e.currentTarget.style.paddingLeft = '18px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#374151';
                e.currentTarget.style.paddingLeft = '16px';
              }}
            >
              <span>{link.name}</span>
              <FaChevronRight size={10} style={{ opacity: 0.5, flexShrink: 0, marginLeft: '6px' }} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;


