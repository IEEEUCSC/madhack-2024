import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { styles } from "../style";
import { timelineData } from "../data";

import "./Timeline.scss";
import Faq from "react-faq-component";


interface TimelineCardProps {
  timeline: {
    title: string;
    date: string;
    iconBg: string;
    point?: string; // Assuming 'point' is a string, modify as needed
  };
  position?: string;
}



const TimelineCard: React.FC<TimelineCardProps> = ({ timeline,position }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <VerticalTimelineElement
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={timeline.date}
      iconStyle={{ background: timeline.iconBg }}
      icon={<div></div>}
      position={position}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{timeline.title}</h3>
        <p className="text-secondary text-[16px] font-semibold"></p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {timeline.point}
      </ul>
    </VerticalTimelineElement>
  </motion.div>
);

const Timeline: React.FC = () => {

  let items = [
    {
      date: "Jan 6th",
      event: "Awareness Session",
      description: "Mobile App Designing Session",
      state: "Virtual"
    },
    {
      date: "Jan 21st",
      event: "Flutter Session - Basics",
      description: "Flutter Session - Advance & Open Initial Round",
      state: "Virtual"
    },
    {
      date: "Jan 28th",
      event: "Close Initial Round",
      description: "Announcement of Finalists",
      state: "Onsite"
    },
    {
      date: "Feb 3rd",
      event: "Final Hackathon",
      description: "Final Hackathon & Award Ceremony",
      state: "Onsite"
    },
  ]

  function timelineItem(date: string, event: string, description: string, state: string, dataDelay: number, borderTop: boolean = false) {
    return (
        <div className={`col-12 border-bottom py-5 ${borderTop ? " border-top " : ""}`} data-aos="fade" data-aos-delay={`${dataDelay}`}>
          <div className="row align-items-stretch">
            <div className="col-md-3 text-white mb-3 mb-md-0"><span className="h4">{date}</span> <span>{state}</span></div>
            <div className="col-md-9">
              <h2 className="text-white">{event}</h2>
              <span>{description}</span>
            </div>
          </div>
        </div>
    )
  }

  return (
      <div className="site-section" id={"timeline"}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-4" data-aos="fade-up">
              <div className="site-section-heading">
                <h2>Programs</h2>
              </div>
            </div>
            <div className="col-lg-6 mt-5 pl-lg-5" data-aos="fade-up" data-aos-delay="100">
              {/*<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus*/}
              {/*  eligendi. Nesciunt repellendus ab voluptatibus.</p>*/}
            </div>
          </div>
          <div className="row align-items-stretch program">
            {
              items.map((item, index) => {
                return timelineItem(item.date, item.event, item.description, item.state,
                    200 + 100*index, index == 0)
              })
            }
          </div>
        </div>
      </div>
  );
};

export default Timeline;
