import { Card, Image } from 'react-bootstrap';
import antmanImage from '../assets/images/antman.jpg';
import avengerImage from '../assets/images/avenger.jpg';
import batmanImage from '../assets/images/batman.jpg';
import spidermanImage from '../assets/images/spiderman.jpg';
import robinhoodImage from '../assets/images/robinhood.jpg';
import supermanImage from '../assets/images/superman.jpg';

const SuperHero = () => {
  return (
    <div>
      <div className='container'  id='superhero'>
        <br></br>
        <h1 className='text-light'>SUPERHERO</h1>
        <div className='row justify-content-center'>
          <div className='col-md-2'>
            <Card className="text-light bg-dark p-1 m-2">
              <Image src={antmanImage} alt="Dune" className='img-fluid images'/>
                <Card.Title className='text-center'>Dune</Card.Title>
                <Card.Text className='text-center'>
                  2021
                </Card.Text>
            </Card>
          </div>
          <div className='col-md-2'>
            <Card className="text-light bg-dark p-1 m-2">
              <Image src={avengerImage} alt="Dune" className='img-fluid images'/>
                <Card.Title className='text-center'>Dune</Card.Title>
                <Card.Text className='text-center'>
                  2021
                </Card.Text>
            </Card>
          </div>
          <div className='col-md-2'>
            <Card className="text-light bg-dark p-1 m-2">
              <Image src={batmanImage} alt="Dune" className='img-fluid images'/>
                <Card.Title className='text-center'>Dune</Card.Title>
                <Card.Text className='text-center'>
                  2021
                </Card.Text>
            </Card>
          </div>
          <div className='col-md-2'>
            <Card className="text-light bg-dark p-1 m-2">
              <Image src={spidermanImage} alt="Dune" className='img-fluid images'/>
                <Card.Title className='text-center'>Dune</Card.Title>
                <Card.Text className='text-center'>
                  2021
                </Card.Text>
            </Card>
          </div>
          <div className='col-md-2'>
            <Card className="text-light bg-dark p-1 m-2">
              <Image src={robinhoodImage} alt="Dune" className='img-fluid images'/>
                <Card.Title className='text-center'>Dune</Card.Title>
                <Card.Text className='text-center'>
                  2021
                </Card.Text>
            </Card>
          </div>
          <div className='col-md-2'>
            <Card className="text-light bg-dark p-1 m-2">
              <Image src={supermanImage} alt="Dune" className='img-fluid images'/>
                <Card.Title className='text-center'>Dune</Card.Title>
                <Card.Text className='text-center'>
                  2021
                </Card.Text>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperHero;