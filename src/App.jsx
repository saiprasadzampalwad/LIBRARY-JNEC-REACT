
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';

const HeaderLazy = lazy(() => import('./components/Header'));
const NavbarCompLazy = lazy(() => import('./components/NavbarComp'));
const SliderLazy = lazy(() => import('./components/Slider'));
const TopMarqueeLazy = lazy(() => import('./components/TopMarquee'));
const SidebarLazy = lazy(() => import('./components/Sidebar'));
const Sider2Lazy = lazy(() => import('./components/Sider2'));
const MainContentLazy = lazy(() => import('./components/MainContent'));
const FooterLazy = lazy(() => import('./components/Footer'));

const UlfsPage = lazy(() => import('./pages/UlfsPage'));
const PhotoGalleryPage = lazy(() => import('./pages/PhotoGalleryPage'));
const JournalsPage = lazy(() => import('./pages/JournalsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const FeedbackPage = lazy(() => import('./pages/FeedbackPage'));
const EResourcesPage = lazy(() => import('./pages/EResourcesPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const QuestionPapersPage = lazy(() => import('./pages/QuestionPapersPage'));
const LibRulesPage = lazy(() => import('./pages/LibRulesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AskLibrarianPage = lazy(() => import('./pages/AskLibrarianPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PrintResourcesPage = lazy(() => import('./pages/PrintResourcesPage'));
const ENewsPapersPage = lazy(() => import('./pages/ENewsPapersPage'));
const NewArrivalBooksPage = lazy(() => import('./pages/NewArrivalBooksPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderLazy />
              <NavbarCompLazy />
              <SliderLazy />
              <TopMarqueeLazy />
              <Container fluid="xl" className="mb-4 mt-2 px-2">

                <Row className="g-3">

                  <Col lg={3} md={4}>
                    <SidebarLazy />
                  </Col>
                  <Col lg={9} md={8}>
                    <div className="page-main-content">
                      <MainContentLazy />
                    </div>
                  </Col>
                </Row>
              </Container>
              <FooterLazy />
            </>
          }
        />
        <Route path="/ulfs" element={<UlfsPage />} />
        <Route path="/gallery" element={<PhotoGalleryPage />} />
        <Route path="/journals" element={<JournalsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/e-resources" element={<EResourcesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/question-papers" element={<QuestionPapersPage />} />
        <Route path="/lib-rules" element={<LibRulesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ask-librarian" element={<AskLibrarianPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/print" element={<PrintResourcesPage />} />
        <Route path="/e-news-papers" element={<ENewsPapersPage />} />
        <Route path="/new-arrival-books" element={<NewArrivalBooksPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;

