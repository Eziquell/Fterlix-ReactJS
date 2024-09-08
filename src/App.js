// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import SuperHero from './components/Superhero';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/landingPage.css"

function App() {
  return (
    <div>
      {/* INTRO START */}
      <div className='backGround'>
        <NavBar />
        <Intro />
      </div>
      {/* INTRO END */}

      {/* TRENDING START */}
      <div className='trending'>
        <Trending />
      </div>
      {/* TRENDING END */}
    </div>

  );
}

export default App;

