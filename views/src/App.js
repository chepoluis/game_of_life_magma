import React from 'react';
import './App.css';
import { startLife } from './game.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import magmaImg from './magma.png'

function App() {
  const canvasRef = React.useRef();

  React.useEffect(() => {
    const element = canvasRef.current; 
    startLife(element);
  }, []);

  return (
    <div className="App">
      <Navbar className='mb-5' expand="lg" bg="dark" variant="dark">
        <img
          alt="Magmalabs"
          src={magmaImg}
          width="197"
          height="95"
          className="d-inline-block align-top"
        />
        <Nav className='ml-5'>
          <Navbar.Brand className='ml-5' href="/">Game of Life</Navbar.Brand>
        </Nav>
        <Navbar aria-controls="responsive-navbar-nav" />
          <Nav className='ml-5'>
            <Navbar.Brand href="/">José Luis Villa Serratos</Navbar.Brand>
          </Nav>
      </Navbar>
      
      <canvas id="board" ref={canvasRef} style={{border: "1px solid black"}}></canvas>
    </div>
  );
}

export default App;
