import React from 'react'
import "../ContactUs/ContactUs.scss"
import poto1 from '../../assets/Savini.png'
import poto2 from '../../assets/Noji.png'
import poto3 from '../../assets/lakitha.png'
import poto4 from '../../assets/Radhia.png'

function ContactUS() {

    return (
        <div className="site-section" id={"contact"}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="site-section-heading">
                            <h2>
                                <span>Contact Us</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm-6 ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="p-4 mb-3 contact-card">
                                <img src={poto4} alt="radhia" className="img" />
                            <p></p>
                                <p className="mb-3 font-weight-bold">Radiyah Hassan</p>
                                <p className="mb-0 ">Organizing committee president</p>
                                <p className="mb-0 text-secondary">Phone</p>
                                <p className="mb-2"><a>+94 722501919</a></p>
                                <p className="mb-0 text-secondary">Email Address</p>
                                <p className="mb-0"><a href="mailto:savini.ur@gmail.com">radiyah.hassan2001@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="col-sm-6 ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="p-4 mb-3 contact-card">
                            <img src={poto1} alt="savini" className="img" />
                            <p></p>
                            <p className="mb-3 font-weight-bold">Savini Rathnayake</p>
                            <p className="mb-3 ">Program Team</p>
                            <p className="mb-0 text-secondary">Phone</p>
                            <p className="mb-3"><a>+94 71 926 1699</a></p>
                            <p className="mb-0 text-secondary">Email Address</p>
                            <p className="mb-0"><a href="mailto:savini.ur@gmail.com">savini.ur@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="col-sm-6 ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="p-4 mb-3 contact-card">
                            <img src={poto2} alt="noji" className="img" />
                            <p></p>
                            <p className="mb-3 font-weight-bold">Noji Yudara</p>
                            <p className="mb-3 ">Program Team</p>
                            <p className="mb-0 text-secondary">Phone</p>
                            <p className="mb-3"><a>+94 70 351 7563</a></p>
                            <p className="mb-0 text-secondary">Email Address</p>
                            <p className="mb-0"><a href="mailto:noji.yu123@gmail.com">noji.yu123@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="col-sm-6 ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="p-4 mb-3 contact-card">
                            <img src={poto3} alt="lakitha" className="img" />
                            <p></p>
                            <p className="mb-3 font-weight-bold">Likitha Chathubhashini</p>
                            <p className="mb-3 ">Program Team</p>
                            <p className="mb-0 text-secondary">Phone</p>
                            <p className="mb-3"><a>+94 76 698 8362</a></p>
                            <p className="mb-0 text-secondary">Email Address</p>
                            <p className="mb-0"><a href="mailto:likithachathu@gmail.com">likithachathu@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUS