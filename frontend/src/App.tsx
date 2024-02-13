import React from 'react'

import {
    Route, Routes
} from 'react-router-dom'

import './App.scss'
import "@fontsource/ibm-plex-mono"

import NavBar from './Components/NavBar/NavBar'
import Hero from "./Components/Hero/Hero";

import Timeline from './Components/Timeline/Timeline';
import Prizes from './Components/Prizes/Prizes';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';


import Registration from './Components/Registration/Registration'
import TeamRegistration from './Components/Registration/Team'

import Intro from "./Components/Introduction/Intro";
import ContactUS from "./Components/ContactUs/ContactUs";


import Teams from './Components/Admin/Teams'
import Partners from "./Components/Partners/Partners";
import Task from "./Components/Task/Task.";


const App = () => {
    return (
        <div className="app-container">
            <NavBar/>
            <Routes>
    <Route path="/register" element={<Registration/>} />
    <Route path="/task" element={<Task/>} />
    {/* <Route path="/team" element={<TeamRegistration/>} /> */}

    <Route path="/admin/teams/:key" element={<Teams/>} />

    <Route path="/*" element={
        <div>
            <Hero/>
            <Intro/>
            <Timeline/>
            <Prizes/>
            <Partners/>
            <Faq/>
            <ContactUS/>
        </div>
    }/>
</Routes>
            <Footer/>
        </div>
    );
}

export default App;
