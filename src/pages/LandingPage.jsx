import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div>
      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly'>
        <Row>
          <Col>
            <h3 className='textStyle'>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p className='textStyle mt-5' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, commodi pariatur aut perferendis similique minima laudantium eveniet delectus id. Hic, expedita omnis numquam ipsam asperiores corporis voluptatibus quasi earum et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequuntur quo expedita deleniti fugiat modi magnam amet molestias soluta ratione nihil repellat eum reprehenderit, debitis voluptate suscipit blanditiis. Dolores, sed. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi soluta dolore est ipsum impedit non, dolores quidem autem, blanditiis architecto fugit neque culpa nihil labore sint, ducimus facilis nemo rem.</p>
            <Link to={'/home'}>
              <button className='btn btn-warning mt-4'>Get Started <i className="fa-solid fa-arrow-right"></i></button>
            </Link>
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" style={{ width: '400px' }} className='ms-5' alt="" />
          </Col>
        </Row>
      </Container>

      {/* second section features */}
      <div className='container'>
        <h3 className='textStyle'>Features</h3>
        <div className='d-flex align-items-center justify-content-evenly'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Add Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}>
                <Button variant="primary">Add Video</Button>
              </Link>


            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>View Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/home'}>
                <Button variant="primary">View Video</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Link to={'/watch'}>
                <Button variant="primary">View History</Button>
              </Link>

            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container mt-5 mb-5 p-5 border border-2 border-secondary rounded">
        <Row>
          <Col>
            <h3 className='textStyle'>SIMPLE AND POWERFULL</h3>
            <p className='textStyle'><span className='textStyle fs-5 '>Play Everything:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nobis eligendi sapiente! Cumque officia ullam asperiores quis nesciunt perspiciatis, rem deserunt impedit cupiditate suscipit mollitia ipsum ea sapiente saepe doloribus.</p>
            <p className='textStyle'><span className='textStyle fs-5 '>Play Everything:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nobis eligendi sapiente! Cumque officia ullam asperiores quis nesciunt perspiciatis, rem deserunt impedit cupiditate suscipit mollitia ipsum ea sapiente saepe doloribus.</p>
            <p className='textStyle'><span className='textStyle fs-5 '>Play Everything:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nobis eligendi sapiente! Cumque officia ullam asperiores quis nesciunt perspiciatis, rem deserunt impedit cupiditate suscipit mollitia ipsum ea sapiente saepe doloribus.</p>
          </Col>
          <Col>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/V9PVRfjEBTI" title="Billie Eilish - BIRDS OF A FEATHER (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default LandingPage