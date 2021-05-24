import './App.css';
import { Row, Col, Button } from 'react-bootstrap';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ScrollToTop from "react-scroll-to-top";
import AOS from 'aos';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHolding, faLock, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
AOS.init();

function App() {
  return (
    <div className="container-custom">
      <div>
        <ScrollToTop smooth="True" />
    </div>
      <div 
        data-aos="fade"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="50"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
      >
        <Row>
          <Col>
            <div className="section1">
              <div className="text-center text-dark pt-5">
                    <Row>
                      <Col>
                        <div data-aos="fade-down"
                          data-aos-offset="100"
                          data-aos-delay="50"
                          data-aos-easing="ease-in-out"
                          data-aos-mirror="false"
                          data-aos-once="false"
                          data-aos-duration="1000"
                          >
                          <img className="app-logo" src="https://static.wixstatic.com/media/e3ba6e_774ccade31ac468d9aea346acff6c66b~mv2.png/v1/fill/w_159,h_159,al_c,q_85,usm_0.66_1.00_0.01/Logo400px.webp"/>
                        </div>

                        <div data-aos="fade-down"
                          data-aos-offset="200"
                          data-aos-delay="50"
                          data-aos-easing="ease-in-out"
                          data-aos-mirror="false"
                          data-aos-once="false"
                          data-aos-duration="1000"
                          >
                            <h1 className="App text-dark">SAFUMOON</h1>
                            <h5 className="text-dark pb-4">FLY SAFU-LY TO THE MOON</h5>
                        </div>
                      </Col>
                    </Row>
                      <Row>
                        <Col>
                          <div data-aos="fade-up"
                              data-aos-offset="50"
                              data-aos-delay="100"
                              data-aos-easing="ease-in-out"
                              data-aos-mirror="false"
                              data-aos-once="false"
                              data-aos-duration="1000"
                              >
                            <p>
                              The brand new DeFi cryptocurrency on the Binance Smart Chain built with community, 
                            </p>
                            <p>
                              security and SAFU-TY in mind!
                            </p>
                              <div className="button-action pt-2">
                                  <Button variant="dark" className="mr-2">BUY NOW</Button>
                                  <Button variant="dark" className="mr-2">VIEW CHART</Button>
                                  <Button variant="dark" className="mr-2">BSCSCAN</Button>
                                  <Button variant="dark" className="mr-2">TELEGRAM</Button>
                              </div>
                          </div>
                        </Col>
                      </Row>
                </div>
            </div>
          </Col>
        </Row>
      </div>
      <div 
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <Row>
          <Col>
            <div className="section2">
                <div 
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  >
                  <div className="text-center text-white pt-5">
                    <Row>
                      <Col>
                        <h1 className="App text-white pb-4">Marketing & LP Fund</h1>
                        <p>
                        As a community project our growth is driven by your activism and your donations. 
                        </p>
                        <p>
                        If you'd like to contribute to the project please send BNB to our marketing & LP wallet
                        </p>
                        <h5 className="text-orange pt-2">
                          0x0Fd4AA484416332FdAB6594a2af7535A556Cb543
                        </h5>
                      </Col>
                    </Row>
                      <Row>
                        <Col>
                          <h1 className="App text-white pt-4">WELCOME!</h1>
                          <h5 className="text-yellow pb-4">YOUR FUNDS ARE SAFU.</h5>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <div className="button-action pt-4 pl-5 pr-5">
                              <Row>
                                  <Col lg="4 pr-0 pl-5">
                                      <Row>
                                          <Col>
                                            <FontAwesomeIcon size="4x" color="yellow" icon={faShieldAlt} />
                                          </Col>
                                      </Row>
                                      <Row>
                                          <Col className="pt-5">
                                              <h6>SECURE</h6>
                                              <p>
                                                  Liquidity burnt = rug-proof. Contract renounced. Maximum comfort as we blast off into space.
                                              </p>
                                          </Col>
                                      </Row>
                                  </Col>
                                  <Col lg="4">
                                    <Row>
                                        <Col>
                                          <FontAwesomeIcon size="4x" color="yellow" icon={faHandHolding} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pt-5 pr-0">
                                            <h6>ONLY UP</h6>
                                            <p>
                                            Fully community driven!
                                            Sick of rugs, we built this rocket for us all to reach the Moon, safuly
                                            </p>
                                        </Col>
                                    </Row>
                                 </Col>
                                 <Col lg="4">
                                    <Row>
                                        <Col>
                                          <FontAwesomeIcon size="4x" color="yellow" icon={faLock} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pt-5">
                                            <h6>TOKENOMICS</h6>
                                            <p>
                                              10% Tax. Passive income: 4% redistributed to holders, 6% burnt! Liquidity Burnt Forever
                                            </p>
                                        </Col>
                                    </Row>
                                 </Col>
                              </Row>
                          </div>
                        </Col>
                      </Row>
                  </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div 
        data-aos="fade"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <Row>
          <Col>
            <div className="section3">
              <div className="text-center text-dark pt-5">
                    <Row>
                      <Col>
                      <h1 className="App text-dark">WHY JOIN ?</h1>
                      <h5 className="text-dark pb-4">FLY SAFU-LY TO THE MOON</h5>
                      <img className="app-img" src="https://static.wixstatic.com/media/e3ba6e_54f8c485c14349e98468e0b0c0155cdb~mv2.png/v1/fill/w_469,h_721,al_c,q_85,usm_0.66_1.00_0.01/safu.webp"/>
                      <p className="pl-5 pr-5 pt-4 pb-2">
                      Lately everything on BSC has been rugs, tugs, reach-arounds, and honeypots. 
                      Sick of it, we decided to build our own meme rocket and make it very SAFU! It is the community that makes projects great and our community has only one goal... 
                      </p>
                      <p>
                      security and SAFU-TY in mind!
                      </p>
                      </Col>
                    </Row>
                      <Row>
                         <Col>
                          <div data-aos="fade-left"
                                data-aos-anchor="center"
                                data-aos-offset="500"
                                data-aos-duration="500">
                                <div className="list pt-2 pb-5">
                                    <ul>
                                      <li>Contract Renounced ✔</li>
                                      <li>Liquidity Burnt ✔</li>
                                      <li>Forever Rug-Proof ✔</li>
                                    </ul>
                                </div>
                          </div>
                         </Col>
                      </Row>
                  </div>
            </div>
          </Col>
        </Row>
      </div>
      <div 
        data-aos="fade"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <Row>
          <Col>
            <div className="section4">
                <div 
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false">
                  <div className="text-center text-dark pt-5">
                    <Row>
                      <Col>
                      <h1 className="App text-dark">ROADMAP</h1>
                      <img className="app-img" src="https://static.wixstatic.com/media/1e47b2_cd5df08585b64f40a575e620ed3bf997.jpg/v1/fill/w_1349,h_716,al_c,q_85,usm_0.66_1.00_0.01/1e47b2_cd5df08585b64f40a575e620ed3bf997.webp"/>
                      <p className="pl-5 pr-5 pt-4 pb-2">
                      Lately everything on BSC has been rugs, tugs, reach-arounds, and honeypots. 
                      Sick of it, we decided to build our own meme rocket and make it very SAFU! It is the community that makes projects great and our community has only one goal... 
                      </p>
                      <p>
                      security and SAFU-TY in mind!
                      </p>
                      </Col>
                    </Row>
                      <Row>
                         <Col>
                          <div data-aos="fade-left"
                                data-aos-anchor="center"
                                data-aos-offset="500"
                                data-aos-duration="500">
                                <div className="list pt-2 pb-5">
                                    <ul>
                                      <li>Contract Renounced ✔</li>
                                      <li>Liquidity Burnt ✔</li>
                                      <li>Forever Rug-Proof ✔</li>
                                    </ul>
                                </div>
                          </div>
                         </Col>
                      </Row>
                  </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
