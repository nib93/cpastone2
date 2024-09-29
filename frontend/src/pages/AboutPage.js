import missionImg from '../app/assets/img/missionImg.jpg';
import MyImg from '../app/assets/img/MyImg.jpg';
import whyImg from '../app/assets/img/whyImg.jpg';
import { Container, Row, Col } from 'reactstrap';
import React from 'react';
const AboutPage = () => {
    return (
        <div>
            <div className='mb-5 p-4'>
                <h1 className='fw-bold'>About Us</h1>
                <p className='lead fst-italic'>Wanna Learn Who I am?</p>
                <hr />
            </div>          
            <Container>
                <Row className='my-4 p-3 gap-3 align-items-center'>
                <Col md={6} className='d-none d-md-block'>
                    <img className='img-fluid' src={MyImg} alt='My Img'></img>
                </Col>
                <Col className='8'>
                    <h1>Who am I?</h1>
                    <p className='lead'>I am Neeti Bhatt, Software Engineer. With a strong foundation in computer science from Stanford University and hands-on experience as a Software Engineer at Microsoft, I am passionate about creating innovative web solutions that blend functionality and user experience. Throughout my career, I’ve honed my skills in front-end and back-end development, database management, and cloud technologies, delivering high-quality products and solving complex problems. My time at Microsoft allowed me to work on cutting-edge tools, while my ongoing education at Stanford keeps me at the forefront of new technologies. I am dedicated to building dynamic websites that not only meet clients' needs but exceed expectations, with a focus on performance, scalability, and design</p>
                </Col>
                </Row>
                <Row className='my-4 p-3 gap-3 align-items-center'>              
                    <Col className='8'>
                    <h1>Mission Statement</h1>
                    <p className='lead'>Our mission is to inspire outdoor adventure by providing reliable trail information and promoting sustainable hiking practices to preserve nature for future generations</p>
                    </Col>
                    <Col md={6} className='d-none d-md-block'>
                        <img className='img-fluid' src={missionImg} alt='Mission Statement'></img>
                    </Col>
                </Row>
                <Row className='my-4 p-3 gap-3 align-items-center'>
                    <Col md={6} className='d-none d-md-block'>
                        <img className='img-fluid' src={whyImg} alt='Why choose us'></img>
                    </Col>
                    <Col>
                        <h1>Why Choose Us?</h1>
                        <p className='lead'>At Hike-Spike, we are dedicated to offering hikers and adventurers the most accurate and up-to-date trail information, curated by experienced outdoor enthusiasts. Whether you’re a beginner looking for an easy hike or a seasoned trekker in search of a challenge, we provide comprehensive guides for trails of all levels. Our platform is community-driven, featuring real reviews and tips from fellow hikers to enhance your planning. We are also committed to promoting sustainable hiking practices, ensuring that the natural beauty of these trails is preserved for future generations. With a user-friendly interface and detailed maps, elevation data, and expert advice, we make it easy for you to find and enjoy your next adventure.</p>
                        <div className='text-md-start text-center'>
                            <h3>Learn more about how to get in touch with us!</h3>
                            <a href='/contact-us' className='btn btn-success'>Contact Us</a>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default AboutPage;