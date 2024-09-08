import { Container, Col, Row, Button } from 'react-bootstrap';

const Intro = () => {
  return (
    <div className='intro d-flex justify-content-center align-item-center'>
          <Container className='text-center text-white'>
            <Row>
              <Col>
                <div className='title'>Watch something incredible.</div>
                <div className='subTitle mt-3'>
                  Millions of movies, TV shows and people to discover. Explore now.
                </div>
                <div className='introButton mt-4'>
                  <Button href='#trending' variant="danger">
                    Get Started
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
  );
};

export default Intro;