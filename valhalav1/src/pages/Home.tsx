import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Logo from "../assets/img/logo.png";
import ServiceImage1 from "../assets/img/service-image1.png";
import ServiceImage2 from "../assets/img/service-image2.png";
import TwitterIcon from "../assets/img/twitter-icon.png";
import TelegramIcon from "../assets/img/telegram-icon.png";
import AboutImage from "../assets/img/about-image.png";

import CoinIcon1 from "../assets/img/coin-icon1.png";
import CoinIcon2 from "../assets/img/coin-icon2.png";
import CoinIcon3 from "../assets/img/coin-icon3.png";
import CoinIcon4 from "../assets/img/coin-icon4.png";
import CoinIcon5 from "../assets/img/coin-icon5.png";
import CoinIcon6 from "../assets/img/coin-icon6.png";
import CoinIcon7 from "../assets/img/coin-icon7.png";
import CoinIcon8 from "../assets/img/coin-icon8.png";
import CoinIcon9 from "../assets/img/coin-icon9.png";
const Home: React.FC = () => {
  return (
    <div className="home">
      <Container fluid>
        <Row className="justify-content-md-left wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.20s">
            <div className="logo w-100">
              <div className="container pt-5">
                <img src={Logo} alt="BNB" />
              </div>
            </div>
            <div className="hero-section w-100">
              <div className="hero-container container">
                <h2>Valhalla.finance is a defi application agregator on the Binance Smart-Chain </h2>
                <div className="hero-buttons mt-4">
                  <button className="btn btn-primary mr-3 mt-3">Drakkar App <span>VALHA</span></button>
                  <button className="btn btn-primary mr-3 mt-3">Longhouse App</button>
                  <button className="btn btn-primary mr-3 mt-3">ValhallaSwap</button>
                  <button className="btn btn-secondary mt-3">VALHA Presale</button><br/>
                  <button className="btn btn-brown mt-3">Drakkar App <span>BNB</span></button>
                </div>
              </div>
            </div>
        </Row>
        <Row >
          <div className="service-Outersec wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.20s">
            <div className="service-section">
              <div className="section-title">
                <div className="container">
                  <h3>
                  The  <i>Drakkar</i>, a semi closed-circuit Defi app.
                  </h3>
                </div>
              </div>
              <div className="service-container container">
                <div className="row">
                  <div className="col-md-6 mb-2 wow fadeInLeft " data-wow-duration="1.6s" data-wow-delay="0.20s">
                    <div className="service-item text-center">
                      <img src={ServiceImage1} alt="Service1" />
                      <h5 className="mt-5 mb-3">Earn BNB by holding V-Bonds</h5>
                      <p>Launch the app and purchase some V-Bonds, V-Bonds will produce dividends in V-Cash at the rate of 1 V-Cash per V-Bond per Day.</p>
                      <p>(example: 24 V-Bond will produce 24 V-Cash per day)</p>
                    </div>
                  </div>
                  <div className="col-md-6 wow fadeInRight" data-wow-duration="1.6s" data-wow-delay="0.20s">
                    <div className="service-item text-center">
                      <img src={ServiceImage2} alt="Service1" />
                      <h5 className="mt-5 mb-3">Compound or Sell your V-Cash</h5>
                      <p>Every 24h you can transform your earned V-Cash in V-Bonds to earn more V-Cash the next day.</p>
                      <p>Alternatively, you can sell your V-Cash back to the contract for BNB.</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="question-section wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.20s">
              <div className="question-container container">         
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="text-center">
                      A Sustainable Defi Protocol on BSC 
                    </h2>
                  </div>
                </div>     
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="text-center font-weight-normal pb-3">
                        Any questions? 
                        <div className="arrowbx"></div>
                      </h4>
                      
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 mb-2 wow fadeInLeft" data-wow-duration="1.6s" data-wow-delay="0.20s">
                      <div className="question-card">
                        <h5>Sustainable?</h5>
                        <p>The Valhalla.finance smart contract market automatically inflates as users interact with it, which maintains contract balance and prevents  buyers from profiting much more than late buyers.</p>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.20s">
                      <div className="question-card">
                        <h5>Semi Closed Circuit?</h5>
                        <p>V-Bonds can’t be sold and V-Cash can only be sold back to the contract for BNB and not on the open market. That allows the contract to work without the influence of market fluctuations.</p>
                      </div>
                    </div>
                    <div className="col-md-4 wow fadeInRight" data-wow-duration="1.6s" data-wow-delay="0.20s">
                      <div className="question-card">
                        <h5>Future Development?</h5>
                        <p>This contract is only the first brick of a much larger Dapp ecosystem. Valhalla.finance will launch a token on BSC in a near future so keep in touch with us on social networks!</p>
                      </div>
                    </div>
                  </div>            
                </div>
              </div>
            </div>
            


            <div className="question-section stable-coin wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.6s">
              <div className="section-title">
                <div className="container">
                  <h3>
                    <i>The Longhouse</i>, a stable coin farm.
                  </h3>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <div className="question-card">
                      <h5>A stable coin farm?</h5>
                      <p>The Longhouse is a Defi application will be a BSC stable coins automatic market maker and staking platform n ot unlike CRV on ETH but with more liquidity providing options like: BUSD, DAI, USDT, USDC, UST, AMPL, RAI, PAX, sUSD and many others. Those pair will also work with VALHA to compound VALHA dividends interest.</p>
                    </div>
                  </div>
                  <div className="col-md-5 mt-2">
                    <div className="coin-container">
                      <div className="row mb-2">
                        <div className="col-4">
                          <img src={CoinIcon1} alt=""/>
                        </div>
                        <div className="col-4">
                          <img src={CoinIcon2} alt=""/>
                        </div>
                        <div className="col-4">
                          <img src={CoinIcon3} alt=""/>
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-4">
                          <img src={CoinIcon4} alt=""/>
                        </div>
                        <div className="col-4">
                          <img src={CoinIcon5} alt=""/>
                        </div>
                        <div className="col-4">
                          <img src={CoinIcon6} alt=""/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4">
                          <img src={CoinIcon7} alt=""/>
                        </div>
                        <div className="col-4">
                          <img src={CoinIcon8} alt=""/>
                        </div>
                        <div className="col-4">
                          <img src={CoinIcon9} alt=""/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
          <div className="about-section wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.80s">
            <div className="section-title">
              <div className="container">
                <h3>
                  <i>ValhallaSwap</i>, a synthetic asset Dex.
                </h3>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <img src={AboutImage} alt="" />
                </div>
                <div className="col-md-7">
                  <div className="question-card">
                    <h5>A synthetic asset Dex?</h5>
                    <p>a decentralized exchanged focused on stable coin and synthetic stocks (like mTSLA or mNFLX) based on Mirror protocol and Pancake swap) with a polished and user friendly UI to compete directly with Robin Hood and other popular stock trading apps.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div  className="footOuter wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.20s">
            <div className="road-map-section">
              <div className="road-map-container container">
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="text-center font-weight-normal pb-5">
                      2021 Roadmap
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="road-item right-marked">
                      <span className="road-mark">
                        Q1
                      </span>
                      <p>First app</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="road-item right-marked left-marked">
                      <span className="road-mark">
                        Q2
                      </span>
                      <p>VALHA Token Launch</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="road-item right-marked left-marked">
                      <span className="road-mark">
                        Q3
                      </span>
                      <p>Staking Platform</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="road-item left-marked">
                      <span className="road-mark">
                        Q4
                      </span>
                      <p>Futur development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-section w-100 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.60s">        
              <div className="logo w-100">
                <div className="container py-4 d-flex justify-content-between">
                  <div className="logo-part">
                    <img src={Logo} alt="BNB" />
                    <p>The BSC Defi Dapp ecosystem</p>
                  </div>
                  <div className="contact-icons">
                    <a href="#"><img src={TelegramIcon} alt="telegram" className="mr-4" /></a>
                    <a href="#"><img src={TwitterIcon} alt="twitter"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
