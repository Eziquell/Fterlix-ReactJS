import { useEffect, useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import duneImage from '../assets/images/dune.jpg';
import axios from 'axios';

const Trending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_KEY,
      }
    }).then((res) => {
      setMovies(res.data.results);
    }).catch((err) => {
      console.log(err);
    })

  }, [])


  return (
    <div>
      <div className='container'  id='trending'>
        <br></br>
        <h1 className='text-light'>TRENDING</h1>
        <div className='row justify-content-center'>
          {movies.map((result, index) => {
            return(
              <div className='col-md-2 movieWrapper' key={index}>
                <Card className="text-light bg-dark p-1 m-2">
                  <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="" className='img-fluid'/>
                    <Card.Title className='text-center'>{result.title}</Card.Title>
                    <Card.Text className='text-center'>{result.release_date}</Card.Text>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending;