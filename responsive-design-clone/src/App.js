import './App.css';
import { useState } from 'react';

export default function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <header className='header'>
        <div className='container'>
          <h1 className='bootstrap'> Start Bootstrap</h1>
          <div className='larger-nav'>
            <p>SERVICES</p>
            <p>PORTFOLIO</p>
            <p>ABOUT</p>
            <p>TEAM</p>
            <p>CONTACT</p>
          </div>
          <button className='header-button' onClick={toggleMenu}>
            <div>MENU</div>
            <img className='hamburger' src='https://icon-library.com/images/white-menu-icon/white-menu-icon-4.jpg' alt='top background' />
          </button>
        </div>

        <nav className={`mobile-nav ${isMenuOpen ? null : 'hide-mobile-nav'}`}>
          <div className='mobile-nav-container'>
            <p>SERVICES</p>
            <p>PORTFOLIO</p>
            <p>ABOUT</p>
            <p>TEAM</p>
            <p>CONTACT</p>
          </div>
        </nav>

      </header>

      <div className='top-main'>
        <h2 className='welcome'> Welcome To Our Studio </h2>
        <div className="meet">IT'S NICE TO MEET YOU</div>
        <div className='more-info'>
          <p className='tell'>TELL ME MORE</p>
        </div>


      </div>
    </div >
  );
}


