import React from 'react';
import { Accordion } from 'react-bootstrap';
import Header from '../components/Header';
import NavbarComp from '../components/NavbarComp';
import Footer from '../components/Footer';
import Sider2 from '../components/Sider2';

const faqs = [
  {
    question: '1. Who can become members of the Library?',
    answer: 'All the students, research scholars, teaching & non-teaching staff of MGM Jawaharlal Nehru Engineering College are eligible for membership of the library.'
  },
  {
    question: '2. What are the timings of the library?',
    answer: 'Monday to Saturday: 9.00 AM to 5.00 PM. Reading Hall: 24x7 during PL/Exam.'
  },
  {
    question: '3. How many books can a student borrow?',
    answer: 'UG Students: 2 books, PG Students: 4 books, Faculty: 6 books. Issue Period: 15 days.'
  },
  {
    question: '4. What are the membership fees?',
    answer: 'UG Students: Rs. 100/-, PG Students: Rs. 200/-, Faculty: Free (Refundable Security Deposit Rs. 500).'
  },
  {
    question: '5. How to access E-Resources?',
    answer: 'Use institutional login through library proxy or contact staff for credentials. Remote access via VPN.'
  },
  {
    question: '6. How to use OPAC?',
    answer: 'Visit https://erp.mgmu.ac.in, login with institutional credentials to search catalogue and reserve books.'
  },
  {
    question: '7. What is the fine for overdue books?',
    answer: 'Rs. 2/- per day per book after the due date.'
  },
  {
    question: '8. Can I take personal belongings inside?',
    answer: 'Bags and personal non-library books are not allowed inside the stack area. Lockers are available.'
  },
  {
    question: '9. Is photocopying service available?',
    answer: 'Yes, photocopying facility is available at nominal rates in the library.'
  },
  {
    question: '10. How to suggest book purchases?',
    answer: 'Fill out the Book Requisition Form at the circulation counter or email the library team.'
  },
  {
    question: '11. Are journal back-volumes available?',
    answer: 'Yes, bound back-volumes are available in the Reference Section.'
  },
  {
    question: '12. Is inter-library loan available?',
    answer: 'Yes, through MGM University libraries network and DELNET/INFLIBNET.'
  },
  {
    question: '13. Who to contact for support?',
    answer: 'Email: jneclibrary@gmail.com | Phone: 0240-2481433'
  },
];

const FAQPage = () => {
  return (
    <>
      <Header />
      <NavbarComp />

      <div className="page-title-banner">
        FREQUENTLY ASKED QUESTIONS (FAQ)
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content">
          <div className="scrollable-content-box">
            <Accordion defaultActiveKey="0" className="custom-accordion">
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index} className="mb-2 border-0 shadow-sm rounded">
                  <Accordion.Header>
                    <span style={{ fontWeight: '700', color: '#703c19', fontSize: '14.5px' }}>
                      {faq.question}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body style={{ fontSize: '13.5px', color: '#374151', lineHeight: '1.6' }}>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>

            <div className="text-center mt-3 p-3" style={{ background: "#faf8f5", border: "1px solid #f1ede6", borderRadius: "8px" }}>
              <p style={{ margin: 0, fontSize: "13.5px", color: "#6b7280" }}>
                Have more questions? Contact library staff at the circulation desk or email <strong>jneclibrary@gmail.com</strong>
              </p>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default FAQPage;


