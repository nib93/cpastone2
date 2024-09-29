import ContactForm from '../components/ContactForm';
import { Container, Row, Col } from 'reactstrap';
import React from 'react';
const ContactPage = () => {
  return (
    <div>
      <div className='mb-5 p-4'>
          <h1 className='fw-bold'>Contact Us</h1>
          <p className='lead fst-italic'>Submit the form if you have any questions</p>
          <hr />
      </div>
      <Container className='ml-auto my-5'>
          <Row>
            <Col lg='6'>
              <h3 className='my-2'>Contact Form:</h3> 
              <ContactForm />
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default ContactPage;