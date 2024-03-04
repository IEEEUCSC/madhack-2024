import React,{useState} from 'react'
import './Task.scss'
import job from '../../assets/Task/job.png'
import application from '../../assets/Task/application.png'
import job_list from '../../assets/Task/job_list.png'
import profile from '../../assets/Task/profile.png'
import saved from '../../assets/Task/saved.png'
import signin from '../../assets/Task/signin.png'

import emp_dash from '../../assets/Task/emp_dash.png'
import emp_job from '../../assets/Task/emp_job.png'
import emp_reg from '../../assets/Task/emp_reg.png'


export default function Task() {

    return (
        <div className="site-section task-section">

            <h1>Initial Round Task</h1>

            <p>
                In a bustling city, a professional is on the lookout for opportunities. They discover a job searching app that connects candidates with employers. Meanwhile, a tech firm urgently needs a software developer.

                The app notifies the professional about the job opening, and they apply seamlessly. The hiring manager receives their application and schedules an interview directly through the app.

                Efficient and streamlined, the app revolutionizes the job search process, making it easier for both candidates and employers to connect and interact.


                As the task of MADHack 3.0 create a cutting-edge  job searching app. Choose a catchy name, design a captivating logo, and build the app with essential functionalities for professionals and companies. Let the innovation begin!
            </p>

            <h1>Judging Criteria</h1>
            <ul>
                <li>UI/UX - 20%</li>
                <li>Functionality - 70%</li>
                <li>Code quality/Architecture - 10%</li>
            </ul>

            <h1>Functionalities</h1>
            <h3>User 1 - Job Applicant</h3>
            <div className="grid-container">
                <div className="grid-item">
                    <img src={signin} alt="Image 1"/>
                </div>
                <div className="grid-item">
                    <h3>1. User Registration/Login</h3>
                    <p>Allow job seekers to create accounts or log in using existing credentials.</p>
                </div>

                <div className="grid-item">
                    <img src={profile} alt="Image 2"/>
                </div>
                <div className="grid-item">
                    <h3>2. Profile Creation/Management</h3>
                    <p>Enable users to create and manage their profiles, including personal information, skills, qualifications, and work experience.
                    </p>
                </div>

                <div className="grid-item">
                    <img src={job} alt="Image 2"/>
                </div>
                <div className="grid-item">
                    <h3>3. Job Search</h3>
                    <p> To implement a search feature allowing users to find relevant job listings based on various criteria such as job title, location, industry, and salary range, and to also implement a feature where applicants can save job openings for later, which will enhance the user experience by allowing users to easily bookmark job listings they are interested in for future reference.</p>
                </div>

                <div className="grid-item">
                    <img src={job_list} alt="Image 2"/>
                </div>
                <div className="grid-item">
                    <h3>4. Job Listing Viewing</h3>
                    <p>Display detailed information about job listings, including job description, requirements, responsibilities, and company details.
                    </p>
                </div>

                <div className="grid-item">
                    <img src={application} alt="Image 2"/>
                </div>
                <div className="grid-item">
                    <h3>5. Application Submission</h3>
                    <p>Allow users to apply for jobs directly within the app, attaching their resumes or other necessary documents.
                    </p>
                </div>

                <div className="grid-item">
                    <img src={saved} alt="Image 2"/>
                </div>
                <div className="grid-item">
                    <h3>6. Saved Jobs</h3>
                    <p>Provide functionality for users to save job listings for future reference or consideration.
                    </p>
                </div>
            </div>
            <h3>
                Extra Points
            </h3>
            <ol>
                <li>Notifications
                    <ul>
                        Implement notifications to alert users about new job listings matching their preferences, application status updates, and other relevant information.
                    </ul>
                </li>

                <li> Feedback/Ratings
                    <ul>
                        Enable users to provide feedback or ratings on their job application experiences and interactions with employers.
                    </ul>
                </li>
            </ol>

            <hr/>

            <h3>User 2 - Employer</h3>
            <div className="grid-container">
                <div className="grid-item">
                    <img src={emp_reg} alt="Image 1"/>
                </div>
                <div className="grid-item">
                    <h3>1. Company Registration/Login</h3>
                    <p>Allow employers to register their companies or log in using existing credentials.
                    </p>
                </div>

                <div className="grid-item">
                    <img src={emp_dash} alt="Image 2"/>
                </div>
                <div className="grid-item">
                    <h3>2. Job Posting</h3>
                    <p>Enable employers to create and post job listings, including job title, description, requirements, responsibilities, location, and salary information.
                    </p>
                </div>

                <div className="grid-item">
                    <img src={emp_job} alt="Image 2"/>
                </div>
                <div className="grid-item">
                    <h3>3. Candidate Management</h3>
                    <p> Provide tools for employers to manage job applications, including viewing applicant profiles, shortlisting candidates, and scheduling interviews.
                    </p>
                </div>
            </div>
            <h3>
                Extra Points
            </h3>
            <ol>
                <li>Communication
                    <ul>
                        Implement features for employers to communicate with job seekers, such as sending messages, requesting additional information, and arranging interviews.
                    </ul>
                </li>

                <li> Application Tracking
                    <ul>
                        Enable employers to track the status of job applications, review applicant details, and make hiring decisions.
                    </ul>
                </li>
            </ol>

            <hr/>

            <h1>Important Link</h1>
            <ul>
                <li><a href={"https://github.com/IEEEUCSC/madhack-2024-initial-api"}>REST API </a> (Not mandatory but recommended to use to save time.)</li>
            </ul>
        </div>
    );
}