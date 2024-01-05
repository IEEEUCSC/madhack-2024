import React from "react";
import Faq from "react-faq-component";

import "./Faq.scss";
import presents from "../../assets/presents.png";
import flutter_react from "../../assets/flutter_react.png";


const data = {
    // title: "FAQ (How it works)",
    rows: [
        {
            title: "What is MadHack 3.0?",
            content: `MadHack 3.0 is a coding competition where enthusiasts come together to showcase their skills in mobile app development. It's a platform to learn, collaborate, and compete in creating innovative solutions for real-world challenges.`,
        },
        {
            title: "Who can participate in MadHack 3.0?",
            content:
                "MadHack 3.0 is open to all undergraduate students! Whether you're a seasoned developer or just starting, we welcome participants of all skill levels and backgrounds.",
        },
        {
            title: "How can I register for MadHack 3.0?",
            content: `To register, visit our website and navigate to the registration page. Fill in the required details for yourself and your team members (if applicable) to secure your spot.`,
        },
        {
            title: "Do I need a team to participate?",
            content:"Yes, for the Initial Round and the Final Hackathon, participants are encouraged to form teams of four members each.",
        },
        {
            title: "What if I'm a beginner in coding? Can I still participate?",
            content:"Absolutely! MadHack 3.0 is designed for participants of all skill levels. It's a great opportunity for beginners to learn and for experienced coders to showcase their expertise.",
        },
        {
            title: "Is the usage of Flutter mandatory for MadHack 3.0 projects?",
            content:"No, it's not mandatory to use Flutter for your projects in MadHack 3.0. While we have Flutter sessions to help you, you are free to use other frameworks or technologies that best suit your project requirements.",
        },
    ],
};

const styles = {
    bgColor: 'transparent',
    titleTextColor: "#fff",
    rowTitleColor: "#fff",
    rowContentColor: '#d1d1d1',
    arrowColor: "#fff",
};

const config = {
    animate: true,
    tabFocus: true
};

export default function FaqComponent() {
    return (
        <div className="site-section local-bootstrap remove-top-pad" id={"faq"}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="site-section-heading">
                            <h2>
                                <span>FAQ</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center speaker">
                    <div className="faq">
                        <div className="faq-container">
                            <Faq data={data} styles={styles} config={config} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}