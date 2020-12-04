import './App.css';

function App() {
  return (
    <div>
      <header className='header'>
        <h1 className='bootstrap'> Start Bootstrap</h1>
        <button className='header-button'>
          <p>MENU</p>
          <img className='hamburger' src='https://icon-library.com/images/white-menu-icon/white-menu-icon-4.jpg' />
        </button>

        <nav className='mobile-nav'></nav>

      </header>

      <div className='top-main'>
        <h2 className='welcome'> Welcome To Our Studio </h2>
        <div className="meet">IT'S NICE TO MEET YOU</div>
        <div className='more-info'>TELL ME MORE</div>


      </div>
    </div>
  );
}

export default App;
