import React, { useEffect, useMemo, useState } from 'react';
import { Accordion, Button, Table } from 'react-bootstrap';

import Header from "../components/Header";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import QuickLinks from "../components/QuickLinks";

const styles = {
  layout: {
    display: 'flex',
    maxWidth: 1180,
    margin: '0 auto',
    padding: '22px 16px',
    gap: 22,
    alignItems: 'flex-start',
  },
  sideBox: {
    background: '#ede8db',
    border: '1px solid #b8a888',
    padding: '10px 14px 14px',
    marginBottom: 16,
  },
  quickTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#8B3A00',
    fontSize: 14,
    marginBottom: 10,
    textDecoration: 'underline',
  },
  goGreen: {
    background: 'linear-gradient(170deg, #eaf7e8 0%, #c5e8b8 100%)',
    border: '2px solid #5aaa3a',
    borderRadius: 3,
    padding: '14px 10px 12px',
    textAlign: 'center',
  },
};

function buildQuestionPaperLink(department, semester, filename) {
  // JSON is built from public/Question_papers/ paths.
  // Expected runtime URL:
  //   /Question_papers/<department>/<semester>/<filename>
  const encodedDepartment = encodeURIComponent(department);
  const encodedSemester = encodeURIComponent(semester);
  const encodedFilename = encodeURIComponent(filename);
  return `/Question_papers/${encodedDepartment}/${encodedSemester}/${encodedFilename}`;
}

export default function QuestionPapersPage() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const loadFromStaticIndex = async () => {
      try {
        const res = await fetch('/question-papers-index.json');
        if (!res.ok) throw new Error(`Failed to load /question-papers-index.json: ${res.status}`);
        const data = await res.json();

        const grouped = Object.entries(data).map(([department, semMapObj]) => {
          const papers = Object.entries(semMapObj || {}).flatMap(([semester, filenames]) => {
            const safeFiles = Array.isArray(filenames) ? filenames : [];

            return safeFiles.map((file) => {
              const filenameOnly = file.split('/').pop();
              const subject = filenameOnly.replace(/\.pdf$/i, '').replace(/\s+/g, ' ').trim();

              const yearMatch = subject.match(/(19\d{2}|20\d{2})/);
              const year = yearMatch ? yearMatch[1] : '';

              return {
                semester,
                subject,
                year,
                link: buildQuestionPaperLink(department, semester, filenameOnly),
              };
            });
          });

          return { name: department, papers };
        });

        setDepartments(grouped);
      } catch (err) {
        console.error(err);
      }
    };

    loadFromStaticIndex();
  }, []);

  const content = useMemo(() => {
    const handleDownload = (fileUrl) => {
      const a = document.createElement('a');
      a.href = fileUrl;
      a.target = '_blank';
      a.rel = 'noreferrer';
      a.download = fileUrl.split('/').pop();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    return (
      <>
        <Header />
        <NavbarComp />

        <div style={styles.layout}>
          {/* Main Area */}
          <div style={{ flex: 1 }}>
            <h1
              style={{
                textAlign: 'center',
                fontSize: 26,
                fontWeight: 'bold',
                letterSpacing: 4,
                color: '#1a1a1a',
                marginBottom: 18,
                fontFamily: 'Georgia, serif',
              }}
            >
              PREVIOUS YEAR QUESTION PAPERS
            </h1>

            <p className="text-center mb-4" style={{ fontSize: '1.2rem', color: '#666' }}>
              Download previous year question papers for exam preparation. Select department and semester.
            </p>

            <Accordion defaultActiveKey="0">
              {departments.map((dept, deptIndex) => (
                <Accordion.Item eventKey={deptIndex.toString()} key={dept.name}>
                  <Accordion.Header style={{ fontWeight: 'bold', color: '#703c19', fontSize: '1.3rem' }}>
                    {dept.name}
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr style={{ backgroundColor: '#703c19', color: 'white' }}>
                          <th>Semester</th>
                          <th>Subject</th>
                          <th>Year</th>
                          <th>Download</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dept.papers.map((paper, index) => (
                          <tr key={`${paper.link}-${index}`}>
                            <td>{paper.semester}</td>
                            <td>{paper.subject}</td>
                            <td>{paper.year}</td>
                            <td>
                              <a
                                href={paper.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: '#0d6efd', textDecoration: 'underline', fontSize: 13 }}
                              >
                                📄 {paper.subject}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>

          {/* Right Sidebar */}
          <div style={{ width: 195, flexShrink: 0 }}>
            <QuickLinks />

            {/* Go Green */}
            <div style={styles.goGreen}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: '#276010',
                  fontStyle: 'italic',
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}
              >
                This is your planet
              </div>
              <div style={{ fontSize: 52, lineHeight: 1, marginBottom: 6 }}>🌍</div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: '900',
                  color: '#276010',
                  letterSpacing: 1,
                  fontStyle: 'italic',
                }}
              >
                go green!
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }, [departments]);

  return content;
}

