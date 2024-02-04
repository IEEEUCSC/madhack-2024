import React, {useEffect, useState} from 'react'
import './Hero.scss'
import { Link } from 'react-router-dom';


function Hero() {

    const sentences = [
        'Battle out your Mobile Application Development Skills',
        "Sri lanka's first ever Mobile App Development Hackathon",
        'A project by IEEE student branch of UCSC',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [offset, setOffset] = useState(0);
    const [forwards, setForwards] = useState(true);
    const [skipCount, setSkipCount] = useState(0);
    const skipDelay = 15;
    const speed = 70;

    useEffect(() => {
        const handleAnimation = () => {
            if (forwards) {
                if (offset >= sentences[currentIndex].length) {
                    setSkipCount(skipCount + 1)
                    if (skipCount === skipDelay) {
                        setForwards(false);
                        setSkipCount(0);
                    }
                }
            } else if (offset === 0) {
                setForwards(true);
                setCurrentIndex((currentIndex + 1) % sentences.length);
            }

            if (skipCount === 0) {
                forwards ? setOffset(offset + 1) : setOffset(offset - 1);
            }
        };

        const timerId = setTimeout(handleAnimation, speed);
        return () => clearTimeout(timerId); // Clean up on unmount
    }, [currentIndex, offset, forwards, skipCount]);


    return (
      <div className="site-section site-hero local-bootstrap" id={"home"}>
          <div className='wrap'>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
              <div className='c'></div>
          </div>

          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-10">
                      <span className="d-block mb-3 caption" data-aos="fade-up" data-aos-delay="100">By IEEE Student Branch of UCSC</span>
                      <h1 className="d-block mb-4" data-aos="fade-up" data-aos-delay="200">MADHACK 3.0</h1>
                      <div className="sentence-container">
                          <span className="sentence" data-aos="fade-up" data-aos-delay="300" style={{display: 'table'}}>{sentences[currentIndex].substring(0, offset)}</span>
                      </div>
                      <br className={"d-block"}></br>
                      <Link to="/register" className="btn-custom mt-5" data-aos="fade-up" data-aos-delay="400"><span>Register Now</span></Link>
                        {/* <Link to="/team" className="btn-custom mt-5" data-aos="fade-up" data-aos-delay="400"><span>Register Now </span></Link> */}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Hero
