import React from 'react';
import { Link } from 'react-router-dom';
import QuickLinks from './QuickLinks';

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
      <hr />
      <QuickLinks />
      <hr />
    </div>
  );
};

export default Sidebar;
