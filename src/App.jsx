import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavbarComp from './components/NavbarComp';
import Slider from './components/Slider';
import TopMarquee from './components/TopMarquee';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UlfsPage from './pages/UlfsPage';
import PhotoGalleryPage from './pages/PhotoGalleryPage';
import JournalsPage from './pages/JournalsPage';
import AboutPage from './pages/AboutPage';
import FeedbackPage from './pages/FeedbackPage';
import EResourcesPage from './pages/EResourcesPage';
import FAQPage from './pages/FAQPage';
import QuestionPapersPage from './pages/QuestionPapersPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <NavbarComp />
          <Slider />
          <TopMarquee />
          <Container fluid>
            <Row>
              <Col sm={3}>
                <Sidebar />
              </Col>
              <Col sm={9}>
                <MainContent />
              </Col>
            </Row>
          </Container>
          <Footer />
        </>
      } />
      <Route path="/ulfs" element={<UlfsPage />} />
      <Route path="/gallery" element={<PhotoGalleryPage />} />
      <Route path="/journals" element={<JournalsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/e-resources" element={<EResourcesPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/question-papers" element={<QuestionPapersPage />} />
    </Routes>
  );
}

export default App;
