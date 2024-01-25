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
      description: "",
      state: "Virtual"
    },
    {
      date: "Jan 10th",
      event: "Mobile App Designing Session",
      description: "",
      state: "Virtual"
    },
    {
      date: "Feb 4th",
      event: "Workshop - Flutter Session - Basics",
      description: "",
      state: "Onsite"
    },
    {
      date: "Feb 5th",
      event: "Open Initial Round Submissions",
      description: "",
      state: ""
    },
    {
      date: "Feb 11th",
      event: "Workshop - Flutter Session - Advanced",
      description: "",
      state: "Onsite"
    },
    {
      date: "Feb 13th",
      event: "Close Initial Round Submissions",
      description: "",
      state: ""
    },
    {
      date: "Feb 19th",
      event: "Announcement of Finalists",
      description: "",
      state: "Virtual"
    },
    {
      date: "Feb 24th",
      event: "Final Hackathon",
      description: "",
      state: "Onsite"
    },
    {
      date: "Feb 25th",
      event: "Final Hackathon & Award Ceremony",
      description: "",
      state: "Onsite"
    },
  ]

  function timelineItem(date: string, event: string,state: string, index: number) {
    console.log(index%2)
    return (
        <div className={`timeline-4 ${index%2===0?'left':'right'}-4`} key={index}>
          <div className={`card gradient-custom${index%2===0?'-4':''}`}>
            <div className="card-body p-4">
              <i className="fas fa-brain fa-2x mb-3"></i>
              <h4>{event}</h4>
              <p className="small text-secondary-50 mb-4">{state}</p>
              <p>
                {date}
              </p>
            </div>
          </div>
        </div>
    )
  }

  return (
      <div className="site-section local-bootstrap remove-top-pad" id={"timeline"}>
        <div className="container py-5">
          <div className="row py-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="site-section-heading">
                <h2>
                  <span>Timeline</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="main-timeline-4 text-white">
            {
              items.map((item, index) => {
                return timelineItem(item.date, item.event, item.state, index)
              })
            }
          </div>
        </div>
      </div>
  );
};

export default Timeline;
