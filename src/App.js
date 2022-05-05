import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About/About';
import Media from './components/Media/Media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import ScrollToTop from "react-scroll-to-top";

function App() {

  const socialMedia = 
    <div className='icons'>
      <a href="https://www.facebook.com/Soma-Ansamble-168223619876493">
      <FontAwesomeIcon icon={faFacebook} /></a>
      <a href='https://www.instagram.com/involuntary.astronaut/'><FontAwesomeIcon icon={faInstagram} /></a>
      <a href='https://studio.youtube.com/channel/UCVBQrZ8fIzRYNQ2cRaW0pbw/playlists'><FontAwesomeIcon icon={faYoutube} /></a>
    </div>;

  return (
    <div className="App">
      <BrowserRouter>
        <Header socialMedia={socialMedia} />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<About />} />
            <Route path='/media' element={<Media />} />
          </Routes>
          <ScrollToTop smooth top={1000}/>
        <Footer socialMedia={socialMedia} />
      </BrowserRouter>
    </div>
  );
}

export default App;
