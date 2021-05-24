import { Nav, Navbar } from 'react-bootstrap';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AOS from 'aos';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons';

AOS.init();

function Header() {
  return (
    <div className="Header">
      <header>
      <Navbar bg="dark" expand="lg" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <div 
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-duration="1000"
            >
                <Nav className="mr-auto">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#link">TOKENOMICS</Nav.Link>
                    <Nav.Link href="#link">SAFUVISION</Nav.Link>
                    <Nav.Link href="#link">ROADMAP</Nav.Link>
                    <Nav.Link href="#link">FAQ</Nav.Link>
                </Nav>
            </div>
            </Navbar.Collapse>
            <div 
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-duration="1000"
            >
                <Nav className="mr-auto p-0 m-0">
                    <Nav.Link href="#link" className="pr-0"><FontAwesomeIcon color="white" size="2x" icon={faTelegram} /></Nav.Link>
                    <Nav.Link href="#link" className="pl-0"><FontAwesomeIcon color="white" size="2x" icon={faTwitter} /></Nav.Link>
                </Nav>
            </div>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;