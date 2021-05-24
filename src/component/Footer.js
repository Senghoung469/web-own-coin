import { Row, Col } from 'react-bootstrap';

function Footer() {
    return (
      <div className="Header">
        <footer className="footer">
           <Row>
              <Col>
                  <p className="text-center">
                    <p>DISCLAIMER:</p>
                    Trading crypto/digital assets is highly risky and extremely volatile, and you should never invest more than you can afford to lose. 
                    Your funds are SAFU, but always make sure to seek professional advice before making any investment!
                  </p>
              </Col>
           </Row>
           <Row>
              <Col>
                  <p className="text-center">
                     © 2021 SAFUMOON, All rights reserved.
                  </p>
              </Col>
           </Row>
        </footer>
      </div>
    );
  }
  
  export default Footer;