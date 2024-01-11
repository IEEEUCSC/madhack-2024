import './Intro.scss'
import flutter_react from '../../assets/flutter_react.png'
import presents from '../../assets/presents.png'

export default function Intro() {
    return (
        <div className="site-section local-bootstrap" id={"about"}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="site-section-heading">
                            <h2>
                                <span>Introducing</span>
                                <span> </span>
                                <span className={"font-acquire"}>MAD</span>
                                <span className={"font-acquire"}>HACK</span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-5 mt-5 pl-lg-5" data-aos="fade-up" data-aos-delay="200">
                        <p>Unleashing Innovation and Creativity in Mobile App Development.</p>
                    </div>
                </div>
                <div className="row align-items-center speaker">
                    <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
                        <img src={presents} alt="Image" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6  ml-auto">
                        <h2 className="text-white mb-4 name pl-lg-5" data-aos="fade-right" data-aos-delay="200">What is MADHACK</h2>
                        <div className="bio pl-lg-5">
                            <p className="mb-4" data-aos="fade-right" data-aos-delay="400">
                                Introducing Sri Lanka’s first Mobile Application Development Hackathon, the IEEE Student Branch of UCSC proudly presents 'MadHack', an inter-university hackathon followed by a series of workshops. MadHack aims to let the participants put their creativity and innovation to the test by giving them the opportunity to develop in any platform of choice.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center speaker">
                    <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2" data-aos="fade" data-aos-delay="100">
                        <img src={flutter_react} alt="Image" className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 ml-auto order-lg-1">
                        <h2 className="text-white mb-4 name" data-aos="fade-left" data-aos-delay="200">Elevating Mobile App Development</h2>
                        <div className="bio pr-lg-5">
                            <p className="mb-4" data-aos="fade-left" data-aos-delay="400">
                                MadHack is a premier hackathon and workshop series for mobile app development in Sri Lanka. Participants can showcase their creativity and learn from industry experts. Whether you're a beginner or experienced developer, MadHack offers something for everyone. Join us and take the next step in your mobile app development journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}