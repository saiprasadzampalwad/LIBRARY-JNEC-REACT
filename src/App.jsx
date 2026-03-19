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
    </Routes>
  );
}

export default App;
