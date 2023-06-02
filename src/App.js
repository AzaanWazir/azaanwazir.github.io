import './App.css';
import Navbar from './components/Navbar/Navbar';
import myImage from './images/Hero.jpg';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='hero'>
        <img src={myImage}></img>
        <h1 className='mainText'>Azaan Wazir</h1>
        <div className='subText'>
          <span>Systems Design Engineer, University of Waterloo</span>
        </div>
        <div className='jobExperience'>
          <span>
            <Typewriter
              options={{
                strings: ['FullStack Developer @ Tremeng Group', 'Software Engineer @ Alert Driving' , 'Product Lead @ Tulip Retail'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
