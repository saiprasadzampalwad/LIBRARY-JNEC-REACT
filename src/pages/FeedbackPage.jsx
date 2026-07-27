import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import NavbarComp from '../components/NavbarComp';
import Footer from '../components/Footer';
import Sider2 from '../components/Sider2';
import { submitToGoogleSheets } from '../services/googleSheetsSubmit';

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    regNo: '',
    section: '',
    purpose: '',
    frequency: '',
    staffBehavior: '',
    staffKnowledge: '',
    staffEfficiency: '',
    staffEffectiveness: '',
    envCleanliness: '',
    envLighting: '',
    envEquipment: '',
    opac: '',
    internet: '',
    circulation: '',
    reference: '',
    magazine: '',
    readingHall: '',
    sufficiency: '',
    condition: '',
    suggestions: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Required';
    if (!formData.department) newErrors.department = 'Required';
    if (!formData.regNo) newErrors.regNo = 'Required';
    if (!formData.section) newErrors.section = 'Required';
    if (!formData.purpose) newErrors.purpose = 'Required';
    if (!formData.frequency) newErrors.frequency = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      const scriptUrl = import.meta.env.VITE_FEEDBACK_SCRIPT_URL || import.meta.env.VITE_GAS_ENDPOINT_URL || '';
      await submitToGoogleSheets(scriptUrl, formData);

      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        department: '',
        regNo: '',
        section: '',
        purpose: '',
        frequency: '',
        staffBehavior: '',
        staffKnowledge: '',
        staffEfficiency: '',
        staffEffectiveness: '',
        envCleanliness: '',
        envLighting: '',
        envEquipment: '',
        opac: '',
        internet: '',
        circulation: '',
        reference: '',
        magazine: '',
        readingHall: '',
        sufficiency: '',
        condition: '',
        suggestions: '',
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  const ratings = ['Excellent', 'Very Good', 'Good', 'Fair'];

  const sectionStyle = {
    marginBottom: '2rem',
    padding: '1.5rem',
    border: '1px solid #e5e7eb',
    borderRadius: '10px',
    backgroundColor: '#faf8f5',
  };

  const labelStyle = {
    fontWeight: '600',
    color: '#703c19',
    marginBottom: '0.5rem',
    fontSize: '13.5px'
  };

  const radioGroupStyle = {
    marginBottom: '1rem',
  };

  return (
    <>
      <Header />
      <NavbarComp />

      <div className="page-title-banner">
        LIBRARY FEEDBACK FORM
      </div>

      <div className="page-container">
        <div className="page-sidebar">
          <Sider2 />
        </div>

        <div className="page-main-content">
          <div className="scrollable-content-box">
            {showSuccess && (
              <Alert 
                variant="success" 
                onClose={() => setShowSuccess(false)} 
                dismissible 
                className="mb-4" 
                style={{ borderRadius: '8px', borderLeft: '4px solid #16a34a' }}
              >
                <Alert.Heading style={{ fontSize: "16px", fontWeight: "700" }}>
                  ✓ Feedback Submitted Successfully!
                </Alert.Heading>
                <p style={{ fontSize: "14px", margin: 0 }}>
                  Thank you! Your feedback has been submitted successfully. We appreciate your valuable input to improve our library services.
                </p>
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <div style={sectionStyle}>
                <h5 style={{ color: '#703c19', borderBottom: '2px solid #703c19', paddingBottom: '0.5rem', fontWeight: '700' }}>
                  SECTION A: VISITOR DETAILS
                </h5>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={labelStyle}>1. Name of Staff/Student <span style={{color: 'red'}}>*</span></Form.Label>
                      <Form.Control name="name" value={formData.name} onChange={handleChange} isInvalid={!!errors.name} style={{ borderRadius: '5px' }} />
                      <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={labelStyle}>2. Department <span style={{color: 'red'}}>*</span></Form.Label>
                      <Form.Control name="department" value={formData.department} onChange={handleChange} isInvalid={!!errors.department} style={{ borderRadius: '5px' }} />
                      <Form.Control.Feedback type="invalid">{errors.department}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={labelStyle}>3. Library Registration No <span style={{color: 'red'}}>*</span></Form.Label>
                      <Form.Control name="regNo" value={formData.regNo} onChange={handleChange} isInvalid={!!errors.regNo} style={{ borderRadius: '5px' }} />
                      <Form.Control.Feedback type="invalid">{errors.regNo}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={labelStyle}>4. Section Visited <span style={{color: 'red'}}>*</span></Form.Label>
                      <Form.Select name="section" value={formData.section} onChange={handleChange} isInvalid={!!errors.section} style={{ borderRadius: '5px' }}>
                        <option value="">Select Section</option>
                        <option>Circulation Section</option>
                        <option>Reading Section</option>
                        <option>Reference Section/Journals</option>
                        <option>Internet/E-Library</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">{errors.section}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={labelStyle}>5. Purpose of Library Visit <span style={{color: 'red'}}>*</span></Form.Label>
                      <Form.Select name="purpose" value={formData.purpose} onChange={handleChange} isInvalid={!!errors.purpose} style={{ borderRadius: '5px' }}>
                        <option value="">Select Purpose</option>
                        <option>To Issue Books</option>
                        <option>For Reference Material</option>
                        <option>Research Purpose</option>
                        <option>To Access E-Resources</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">{errors.purpose}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label style={labelStyle}>6. Frequency of Library Visit <span style={{color: 'red'}}>*</span></Form.Label>
                      <Form.Select name="frequency" value={formData.frequency} onChange={handleChange} isInvalid={!!errors.frequency} style={{ borderRadius: '5px' }}>
                        <option value="">Select Frequency</option>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                        <option>Once in Two Months</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">{errors.frequency}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
              </div>

              <div style={sectionStyle}>
                <h5 style={{ color: '#703c19', borderBottom: '2px solid #703c19', paddingBottom: '0.5rem', fontWeight: '700' }}>
                  SECTION B: FEEDBACK (Help us evaluate our services)
                </h5>
                <h6 style={labelStyle}>A) STAFF:</h6>
                <Row>
                  <Col md={6}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>1. Behavior of Library Staff</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="staffBehavior" value={r} label={r} checked={formData.staffBehavior === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>2. Knowledge of Library Staff</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="staffKnowledge" value={r} label={r} checked={formData.staffKnowledge === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>3. Efficiency and Promptness of Library Staff</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="staffEfficiency" value={r} label={r} checked={formData.staffEfficiency === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>4. Effectiveness of Library Staff</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="staffEffectiveness" value={r} label={r} checked={formData.staffEffectiveness === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                </Row>

                <h6 style={labelStyle}>B) ENVIRONMENT:</h6>
                <Row>
                  <Col md={6}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>1. Cleanliness & Ambiance of Library</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="envCleanliness" value={r} label={r} checked={formData.envCleanliness === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>2. Lighting & Ventilation of Library</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="envLighting" value={r} label={r} checked={formData.envLighting === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>3. Equipment & Facilities of Library</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="envEquipment" value={r} label={r} checked={formData.envEquipment === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                </Row>

                <h6 style={labelStyle}>C) SERVICES:</h6>
                <Row>
                  <Col md={6}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>1. OPAC/Search Module Facility</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="opac" value={r} label={r} checked={formData.opac === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>2. Internet & Multimedia Services</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="internet" value={r} label={r} checked={formData.internet === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>3. Circulation Services (Weekly)</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="circulation" value={r} label={r} checked={formData.circulation === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>4. Reference Services</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="reference" value={r} label={r} checked={formData.reference === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>5. Magazine/Journal Services</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="magazine" value={r} label={r} checked={formData.magazine === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>6. Reading Hall & 24 Hours Library Service in PL</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="readingHall" value={r} label={r} checked={formData.readingHall === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                </Row>

                <h6 style={labelStyle}>D) COLLECTION OF BOOKS, JOURNALS:</h6>
                <Row>
                  <Col md={6}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>1. Sufficiency & Availability of Library Books</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="sufficiency" value={r} label={r} checked={formData.sufficiency === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group style={radioGroupStyle}>
                      <Form.Label style={labelStyle}>2. Physical Condition of Library Books</Form.Label>
                      {ratings.map((r) => (
                        <Form.Check key={r} type="radio" name="condition" value={r} label={r} checked={formData.condition === r} onChange={handleRadioChange} />
                      ))}
                    </Form.Group>
                  </Col>
                </Row>

                <h6 style={labelStyle}>E) Suggestions:</h6>
                <Form.Group className="mb-3">
                  <Form.Label style={labelStyle}>Do you have any suggestion on how we can serve you better?</Form.Label>
                  <Form.Control as="textarea" rows={4} name="suggestions" value={formData.suggestions} onChange={handleChange} style={{ borderRadius: '5px' }} />
                </Form.Group>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-100 btn-primary-custom btn-lg py-3">
                {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              </Button>
            </Form>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default FeedbackPage;



