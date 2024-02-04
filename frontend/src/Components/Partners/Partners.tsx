// Import your images as necessary
import pagero from '../../assets/pagero.png';
import hackthon from '../../assets/hackaton.png';

import './Partners.scss';

import React from 'react';


function Partners() {
    return (
        <div className="site-section local-bootstrap remove-top-pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="site-section-heading">
                            <h2>
                                <span>Partners</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className={"row align-items-center"}>
                    <a className="partner" href={"https://www.pagero.com/"}>
                        <img src={pagero} alt="Pagero" className={"gradient-border gold-border"}/>
                        <p>Gold Partner</p>
                    </a>
                    <a className="partner" href={"https://blog.hackathons.lk/"}>
                        <img src={hackthon} alt="Hackathon" />
                        <p>Digital Media Partner</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Partners;