import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FindMyTrailLogo from '../app/assets/img/hike-spike-logo.png';
import React from 'react';
const Footer = () => {
  return (
    <footer className='bg-dark text-white'>
      <Container>
        <Row>
          <Col>
            <h5>Links</h5>
            <ul className='list-unstyled'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about-us'>About</Link>
              </li>
              <li>
                <Link to='/safety'>Safety</Link>
              </li>
              <li>
                <Link to='trail-directory'>Directory</Link>
              </li>
              <li>
                <Link to='contact-us'>Contact</Link>
              </li>
            </ul>
          </Col>
          <Col className='text-center'>
            <img src={FindMyTrailLogo} className='footer-logo' alt='Find My Trail logo'></img>
            <br />
            <a className='btn btn-social-icon btn-instagram' href='http://instagram.com/'>
              <i className='fa fa-instagram' />
            </a>{' '}
            <a className='btn btn-social-icon btn-facebook' href='http://www.facebook.com/'>
              <i className='fa fa-facebook' />
            </a>{' '}
            <a className='btn btn-social-icon btn-twitter' href='http://twitter.com/'>
              <i className='fa fa-twitter' />
            </a>{' '}
          </Col>
          <Col className='text-center'>
            <a role='button' className='btn btn-link' href='tel:+14087974422'>
              <i className='fa fa-phone' /> (408) 797-4422
            </a>
            <br />
            <a role='button' className='btn btn-link' href='mailto:neetibhatt2018@gmail.com'>
              <i className='fa fa-envelope-o' /> neetibhtt2018@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
