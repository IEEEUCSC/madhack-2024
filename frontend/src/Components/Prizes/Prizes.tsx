// Import your images as necessary
import img1 from '../../assets/prizes/1.png';
import img2 from '../../assets/prizes/2.png';
import img3 from '../../assets/prizes/3.png';

import React, { ReactNode } from 'react';

import './Prizes.scss';
import Faq from "react-faq-component";



function Prizes() {
  return (
      <div className="site-section local-bootstrap remove-top-pad" id={"prizes"}>
          <div className="container">
              <div className="row">
                  <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                      <div className="site-section-heading">
                          <h2>
                              <span>Prizes</span>
                          </h2>
                      </div>
                  </div>
              </div>
              <div className="row align-items-center speaker">
                  <div className="prizes">
                      <div className="prizes-container">
                          <div className="prize">
                              <img className='prize-image' src={img1} alt="Prize 1" />
                              <h2>Silver</h2>
                              <p>RS. 50,000</p>

                          </div>
                          <div className="prize">
                              <img className='prize-image' src={img2} alt="Prize 1" />
                              <h2>Gold</h2>
                              <p>RS. 75,000</p>

                          </div>
                          <div className="prize">
                              <img className='prize-image' src={img3} alt="Prize 1" />
                              <h2>Bronze</h2>
                              <p>RS. 25,000</p>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Prizes;