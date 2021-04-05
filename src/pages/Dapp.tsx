import React from "react";

import Logo from "../assets/img/logo.png";
import BondImage1 from "../assets/img/bond1.png";
import BondImage1bg from "../assets/img/cardbg.png";
import BondImage2 from "../assets/img/bond2.png";
import BondImagebg from "../assets/img/wheelbg.png";
import VCashCoin from "../assets/img/v-cash-coin.png";
import CoinIcon from "../assets/img/coin-icon.png";
import arrow from "../assets/img/arrow.png";
import Bondl1 from "../assets/img/bondl1.png";
import Bondl2 from "../assets/img/bondl2b.png";
import logbg from "../assets/img/logobg.png";

const Dapp: React.FC = () => {
    return (
        <div className="dapp dapporg">
            <header className="header">
                <div className="container py-3 d-flex justify-content-between flex-column flex-md-row">
                    <div className="logo">
                        <img src={Logo} alt="BNB" />
                    </div>
                    <div className="wallet-info d-flex flex-column flex-md-row justify-content-between align-items-end align-items-md-center">
                        <div className="wallet-info-item text-md-left text-right">
                            <span>VALHA IN WALLET</span>
                            <p className="font-weight-bold">3.23321</p>
                        </div>
                        <div className="wallet-info-item text-md-left text-right">
                            <span>V-BONDS IN WALLET</span>
                            <p className="font-weight-bold">24</p>
                        </div>
                        <div className="wallet-info-item text-md-left text-right">
                            <span>V-CASH IN VAULT</span>
                            <p className="font-weight-bold">13</p>
                        </div>
                        <div className="wallet-info-item">
                            <button className="btn btn-secondary">
                                CONNECT WALLET
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="container">
                    <section className="v-cash-section">
                        <p className="text-white">Buy <strong>V-Bonds</strong> to become a Bondholder and start earning <strong>V-Cash</strong> (V-Cash can be exchanged for BNB)</p>
                        <div className="form-group d-flex flex-md-row flex-column w-100 justify-content-center m-0">
                            <div className="d-flex align-items-center flex-md-row flex-column w-100 w-md-75">
                                <div className="amount-input-box">
                                    <input type="text" className="amount-input" placeholder="Enter amount"/>
                                    <span className="font-weight-bold">VALHA</span>
                                </div>
                                <p className="text-white m-0 ml-2">Receive <strong>0.0000 V-Bonds</strong></p>
                            </div>
                            <button className="btn btn-secondary btn-block w-md-25">Buy V-Bonds</button>
                        </div>
                    </section>
                    <section className="wallet-section">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="wallet-card">
                                <img src={BondImage1bg} alt="" className="card-background card-background1" />
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="wallet-card-info">
                                                <h5 className="text-white font-weight-normal">
                                                    My <strong>24</strong> V-Bonds
                                                </h5>
                                                <img src={BondImage1} alt="" />
                                                <small className="my-2 d-block">Produce</small>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="coin-value-bar">
                                                <img src={VCashCoin} alt="" />
                                                <p className="display-4 font-weight-bold text-white m-0 ml-2">
                                                    1
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <small className="text-white d-block pl-5 mt-3">
                                        <strong>V-Cash</strong> per hour.
                                    </small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="wallet-card">
                                <img src={BondImagebg} alt="" className="card-background" />
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="wallet-card-info">
                                                <h5 className="text-white font-weight-normal">
                                                    My <strong>Vault</strong>
                                                </h5>
                                                <img src={BondImage2} alt="" />
                                                <small className="my-2 d-block">Contains</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="coin-value-bar">
                                                <img src={VCashCoin} alt="" />
                                                <p className="display-4 font-weight-bold text-white m-0 ml-2">
                                                    13
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <small className="text-white d-block pl-5 mt-3">
                                        <strong>V-Cash</strong> (10 Hours 43 Minutes until your vault is full)
                                    </small>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="sell-v-cash-section transform-section">                        
                        <p className="text-white">Sell my <strong>13 V-Cash</strong>  and receive 0.432142 <strong>VALHA</strong></p>
                        <div className="v-cash-diagram d-flex ">
                            <div className="diagram-part d-flex justify-content-between">
                                <img src={Bondl2} alt="" />
                                {/* <img src={arrow} alt="" className="arrow"/>
                                <img src={CoinIcon} alt=""/> */}
                            </div>
                            <button className="btn btn-secondary">
                                Sell V-Cash For VALHA
                            </button>
                        </div>
                    </section>
                    <section className="transform-v-cash-section transform-section">                        
                        <p className="text-white">Tramsform  my <strong>13 V-Cash</strong> into more <strong>V-Bonds</strong> and start earning more <strong>(1 V-Bond = +1 V-Cash)</strong></p>
                        <div className="v-cash-diagram d-flex">
                            <div className="diagram-part d-flex justify-content-between">
                                <img src={Bondl1} alt="" />
                            </div>
                            <button className="btn btn-secondary">
                            TRANSFORM V-CASH INTO V-BONDS
                            </button>
                        </div>
                    </section>
                    <section className="log-section">      
                        <img src={logbg} alt="" className="logsecbg"/>                  
                        <p className="text-white">Bondholders <strong>Leaderboard</strong></p>
                        <div className="log-section-outer">
                            <div className="log-section-rw text-white mb-1"><div>1. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f</div> <div>owns</div> <div><strong>356</strong></div> <div>V-Bonds & earns</div> <div><strong>14.375</strong></div> <div>V-Cash per hour</div></div>
                            <div className="log-section-rw text-white mb-1"><div>2. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f</div> <div>owns</div> <div><strong>356</strong></div> <div>V-Bonds & earns</div> <div><strong>14.375</strong></div> <div>V-Cash per hour</div></div>
                            <div className="log-section-rw text-white mb-1"><div>3. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f</div> <div>owns</div> <div><strong>356</strong></div> <div>V-Bonds & earns</div> <div><strong>14.375</strong></div> <div>V-Cash per hour</div></div>
                            <div className="log-section-rw text-white mb-1"><div>4. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f</div> <div>owns</div> <div><strong>356</strong></div> <div>V-Bonds & earns</div> <div><strong>14.375</strong></div> <div>V-Cash per hour</div></div>
                            <div className="log-section-rw text-white mb-1"><div>5. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f</div> <div>owns</div> <div><strong>356</strong></div> <div>V-Bonds & earns</div> <div><strong>14.375</strong></div> <div>V-Cash per hour</div></div>
                            <div className="log-section-rw text-white mb-1"><div>6. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f</div> <div>owns</div> <div><strong>356</strong></div> <div>V-Bonds & earns</div> <div><strong>14.375</strong></div> <div>V-Cash per hour</div></div>
                            <div className="log-section-rw text-white mb-1"><div>7. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f</div> <div>owns</div> <div><strong>356</strong></div> <div>V-Bonds & earns</div> <div><strong>14.375</strong></div> <div>V-Cash per hour</div></div>
                            <div className="log-section-rw text-white mb-1"><div>8. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f</div> <div>owns</div> <div><strong>356</strong></div> <div>V-Bonds & earns</div> <div><strong>14.375</strong></div> <div>V-Cash per hour</div></div>
                            <div className="log-section-rw text-white mb-1"><div>9. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f</div> <div>owns</div> <div><strong>356</strong></div> <div>V-Bonds & earns</div> <div><strong>14.375</strong></div> <div>V-Cash per hour</div></div>
                            <div className="log-section-rw text-white mb-1"><div>1. 0xCA1F0623DeC82594a124e20024aFCC7F78B4A56f</div> <div>owns</div> <div><strong>356</strong></div> <div>V-Bonds & earns</div> <div><strong>14.375</strong></div> <div>V-Cash per hour</div></div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Dapp;
