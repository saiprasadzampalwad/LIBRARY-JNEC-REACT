import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';
import Header from '../components/Header';
import NavbarComp from '../components/NavbarComp';
import Footer from '../components/Footer';
import Sider2 from '../components/Sider2';

const UlfsPage = () => {
  const dictionaryLinks = [
    { name: 'Acronym Finder', url: 'http://www.acronymfinder.com/' },
    { name: 'Cambridge Free English Dictionary and Thesaurus', url: 'http://dictionary.cambridge.org/' },
    { name: 'Collins Dictionaries', url: 'http://www.collinsdictionary.com/' },
    { name: 'Crossword Dictionary', url: 'http://www.oneacross.com/' },
    { name: 'Definitions.net', url: 'http://www.definitions.net/' },
    { name: 'Dictionary.com', url: 'http://dictionary.com/' },
    { name: 'FOLDOC – Computing Dictionary', url: 'http://foldoc.org/' },
    { name: 'Free online Dictionaries', url: 'http://www.thefreedictionary.com/' },
    { name: 'Macmillan Dictionary and Thesaurus', url: 'http://www.macmillandictionary.com/' },
    { name: 'Medical dictionary', url: 'http://dictionary.webmd.com/' },
    { name: 'Merriam-Webster Online: Dictionary and Thesaurus', url: 'http://www.merriam-webster.com/' },
    { name: 'Oxford Dictionary', url: 'http://www.oxforddictionaries.com/' },
    { name: "Oxford Learner's Dictionary", url: 'http://www.oxfordlearnersdictionaries.com/' },
    { name: 'Reference.com', url: 'http://www.reference.com/' },
    { name: 'Urban Dictionary', url: 'http://www.urbandictionary.com/' },
    { name: 'Visual Thesaurus', url: 'http://www.visualthesaurus.com/' },
    { name: 'Vocabulary.com', url: 'http://www.vocabulary.com/dictionary' },
  ];

  const encyclopediaLinks = [
    { name: 'Bartleby', url: 'http://bartleby.com/' },
    { name: 'Dkonline.encyclopedia', url: 'http://www.dke-encyc.com/' },
    { name: 'Encyclopedia Britannica', url: 'http://www.britannica.com/' },
    { name: 'Encyclopedia Mythica', url: 'http://www.pantheon.org/' },
    { name: 'Encyclopedia of Life', url: 'http://eol.org/' },
    { name: 'Encyclopedia of Philosophy', url: 'http://www.iep.utm.edu/' },
    { name: 'Encyclopedia.com', url: 'http://www.encyclopedia.com/' },
    { name: 'How Stuff Works', url: 'http://www.howstuffworks.com/' },
    { name: 'Infoplease', url: 'http://www.infoplease.com/' },
    { name: 'Marathi Vishwakosh', url: 'http://www.marathivishwakosh.in/' },
    { name: 'Stanford Encyclopedia of Philosophy', url: 'http://plato.stanford.edu/contents.html' },
    { name: 'Who2', url: 'http://www.who2.com/' },
    { name: 'World Digital Library', url: 'http://www.wdl.org/en/' },
  ];

  const bibliographyLinks = [
    { name: 'Biographies of great men and women from India (Bharat)', url: 'http://www.freeindia.org/biographies/' },
    { name: 'Biographies of Famous Indians', url: 'http://www.iloveindia.com/indian-heroes/index.html' },
  ];

  const careerLinks = [
    { name: 'CSIR (Council of Scientific & Industrial Research)', url: 'http://www.csirhrdg.res.in/' },
    { name: 'MPSC (Maharashtra Public Service Commission)', url: 'http://www.mpsc.gov.in/' },
    { name: 'UPSC (Union Public Service Commission)', url: 'http://www.upsc.gov.in/' },
    { name: 'UGC (University Grants Commission)', url: 'http://www.ugc.ac.in/' },
    { name: 'NET (National Eligibility Test)', url: 'http://www.ugcnetonline.in/' },
    { name: 'SET (State Eligibility Test)', url: 'http://setexam.unipune.ac.in/' },
    { name: 'Google Scholar', url: 'http://scholar.google.co.in/' },
  ];

  const competitiveLinks = [
    { name: 'INDIABIX (Quantitative Aptitude & Logic)', url: 'http://www.indiabix.com/' },
    { name: 'Tamil Cube Aptitude', url: 'http://www.tamilcube.com/' },
    { name: 'General Knowledge Today (GKToday)', url: 'http://www.gktoday.in/' },
    { name: 'Jagran Josh Exam Portal', url: 'http://www.jagranjosh.com/' },
    { name: 'Union Public Service Commission Portal', url: 'http://www.upsc.gov.in/' },
    { name: 'WizIQ Online Learning', url: 'http://www.wiziq.com/' },
    { name: 'Online General Knowledge Guide', url: 'http://www.onlinegkguide.com/' },
  ];

  const technicalLinks = [
    { name: 'Twin India Technical Portal', url: 'http://twin-india.org/' },
    { name: 'STC India (Society for Technical Communication)', url: 'http://www.stc-india.org/' },
  ];

  const renderLinks = (links) => (
    <ListGroup variant="flush">
      {links.map((link, index) => (
        <ListGroup.Item key={index} className="px-2 py-2 border-bottom">
          <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#703c19', fontSize: '13.5px', fontWeight: '600', textDecoration: 'none' }}
            onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
            onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
          >
            🔗 {link.name}
          </a>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

  return (
    <>
      <Header />
      <NavbarComp />

      <div className="page-title-banner">
        USEFUL LINKS FOR STUDENTS
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content">
          <div className="scrollable-content-box">
            <p style={{ fontSize: '13.5px', color: '#6b7280', marginBottom: '16px' }}>
              Explore curated academic, research, career, and reference websites. Click any category below to expand.
            </p>

            <Accordion defaultActiveKey="0" className="custom-accordion">
              <Accordion.Item eventKey="0" className="mb-2 border-0 shadow-sm rounded">
                <Accordion.Header><strong style={{ color: '#703c19' }}>Online Dictionary Websites</strong></Accordion.Header>
                <Accordion.Body>{renderLinks(dictionaryLinks)}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mb-2 border-0 shadow-sm rounded">
                <Accordion.Header><strong style={{ color: '#703c19' }}>Online Encyclopedia Websites</strong></Accordion.Header>
                <Accordion.Body>{renderLinks(encyclopediaLinks)}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="mb-2 border-0 shadow-sm rounded">
                <Accordion.Header><strong style={{ color: '#703c19' }}>Biographies & Autobiographies Portals</strong></Accordion.Header>
                <Accordion.Body>{renderLinks(bibliographyLinks)}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="mb-2 border-0 shadow-sm rounded">
                <Accordion.Header><strong style={{ color: '#703c19' }}>Career & Higher Education Portals</strong></Accordion.Header>
                <Accordion.Body>{renderLinks(careerLinks)}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="mb-2 border-0 shadow-sm rounded">
                <Accordion.Header><strong style={{ color: '#703c19' }}>Competitive Exams & Aptitude Portals</strong></Accordion.Header>
                <Accordion.Body>{renderLinks(competitiveLinks)}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5" className="mb-2 border-0 shadow-sm rounded">
                <Accordion.Header><strong style={{ color: '#703c19' }}>Technical Writing & Professional Portals</strong></Accordion.Header>
                <Accordion.Body>{renderLinks(technicalLinks)}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default UlfsPage;

