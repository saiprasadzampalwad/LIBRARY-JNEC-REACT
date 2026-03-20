import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar" style={{backgroundColor: '#d7cdc3', padding: '20px'}}>
      <h5 style={{color: '#703c19', textAlign: 'center', textDecoration: 'underline'}}><strong>LATEST NEWS</strong></h5>
      <hr />
      <div style={{height: '200px', overflow: 'hidden'}}>
        <marquee behavior="scroll" direction="up" scrollAmount="2" style={{color: '#000'}}>
          From 19th Oct., 2015 P. L. Book Issue has been Started......From 26th October Reading Room Will be Open from 10.00 A. M. Morning to 12.00 A.M. Midnight Trail Access of World eBook Library started please use for Engineering Related E-Books .............
        </marquee>
      </div>
      <hr />
      <h5 style={{color: '#703c19', textAlign: 'center', textDecoration: 'underline'}}><strong>QUICK LINKS</strong></h5>
      <hr />
      <ul style={{color: '#000', listStyleType: 'none', padding: 0}}>
        <li><Link to="/ulfs" style={{color: '#000'}}>Useful Links for Students</Link></li>
        <li><a href="#" style={{color: '#000'}}>E - News Papers</a></li>
        <li><a href="#" style={{color: '#000'}}>Ask A LibrarianService</a></li>
        <li><a href="#" style={{color: '#000'}}>New Arrivals- Books</a></li>
        <li><Link to="/feedback" style={{color: '#000'}}>Library Feedback Form</Link></li>
        <li><Link to="/journals" style={{color: '#000'}}>New Arrivals- Journals</Link></li>
        <li><a href="#" style={{color: '#000'}}>Preparation-Question Paper's</a></li>
        <li><a href="#" style={{color: '#000'}}>List of Book CDs</a></li>
        <li><a href="#" style={{color: '#000'}}>FAQ's about Library</a></li>
        <li><Link to="/gallery" style={{color: '#000'}}>Image Gallery</Link></li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
