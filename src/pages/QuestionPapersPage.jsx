import React, { useEffect, useMemo, useState } from 'react';
import { Accordion, Table } from 'react-bootstrap';

import Header from "../components/Header";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import Sider2 from "../components/Sider2";

function buildQuestionPaperLink(department, semester, filename) {
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
    return (
      <>
        <Header />
        <NavbarComp />

        <div className="page-title-banner">
          PREVIOUS YEAR QUESTION PAPERS
        </div>

        <div className="page-container">
          <div className="page-sidebar">
            <Sider2 />
          </div>

          <div className="page-main-content">
            <div className="scrollable-content-box">
              <p style={{ fontSize: '13.5px', color: '#6b7280', marginBottom: '16px' }}>
                Download previous year examination question papers for preparation. Select department and semester below.
              </p>

              <Accordion defaultActiveKey="0" className="custom-accordion">
                {departments.map((dept, deptIndex) => (
                  <Accordion.Item eventKey={deptIndex.toString()} key={dept.name} className="mb-2 border-0 shadow-sm rounded">
                    <Accordion.Header>
                      <span style={{ fontWeight: '700', color: '#703c19', fontSize: '15px' }}>
                        {dept.name} ({dept.papers.length} Papers Available)
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Table className="modern-table mb-0">
                        <thead>
                          <tr>
                            <th>Semester</th>
                            <th>Subject</th>
                            <th>Year</th>
                            <th>Download Paper</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dept.papers.map((paper, index) => (
                            <tr key={`${paper.link}-${index}`}>
                              <td style={{ fontWeight: '600' }}>{paper.semester}</td>
                              <td>{paper.subject}</td>
                              <td style={{ textAlign: 'center' }}>{paper.year || 'N/A'}</td>
                              <td>
                                <a
                                  href={paper.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{ color: '#703c19', fontWeight: '600', fontSize: '13px', textDecoration: 'underline' }}
                                >
                                  📄 View PDF
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
          </div>

        </div>

        <Footer />
      </>
    );
  }, [departments]);

  return content;
}


