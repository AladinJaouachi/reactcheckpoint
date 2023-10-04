import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import"./App.css";
import logo from"./logo.svg";

function Entete() {
    return(
        <div className='aa'>
         <Navbar expand="lg" className="bg-body-tertiary" id='test'>
      <Container  >
        <img src={logo} alt='logo' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Contact us </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        </div>
    )
    
}
export default Entete;