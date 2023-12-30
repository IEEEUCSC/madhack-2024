import React from 'react'
import logo from '../../assets/logo.png'
import './NavBar.scss'

function NavBar() {
  return (
      <>
          <div className="site-mobile-menu">
              <div className="site-mobile-menu-header">
                  <div className="site-mobile-menu-close mt-3">
                      <span className="icon-close2 js-menu-toggle"></span>
                  </div>
              </div>
              <div className="site-mobile-menu-body"></div>
          </div>
          <header className="site-navbar py-3" role="banner">
              <div className="container-fluid">
                  <div className="row align-items-center">
                      <div className="col-11 col-xl-2">
                          <div className="logo">
                              <img src={logo} alt="logo" />
                          </div>
                      </div>
                      <div className="col-12 col-md-10 d-none d-xl-block">
                          <nav className="site-navigation position-relative text-right" role="navigation">
                              <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                  <li><a href="#about">about</a></li>
                                  <li><a href="#guidelines">guidelines</a></li>
                                  <li><a href="#timeline">timeline</a></li>
                                  <li><a href="#prizes">prizes</a></li>
                                  <li><a href="#merchandise">merchandise</a></li>
                                  <li><a href="#contact">contact us</a></li>
                                  <li><a href="#register">register</a></li>
                                  <li className="cta"><a href="#">Buy Tickets</a></li>
                              </ul>
                          </nav>
                      </div>
                      <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{position: "relative", top: "3px"}}><a
                          href="#" className="site-menu-toggle js-menu-toggle text-white">
                          <span className="icon-menu h3"></span></a></div>
                  </div>
              </div>
          </header>
      </>
//     <header className="header">
//     <nav className="navbar">
//         <div className="logo">
//             <img src={logo} alt="logo" />
//         </div>
//         <ul>
//             <li><a href="#about">about</a></li>
//             <li><a href="#guidelines">guidelines</a></li>
//             <li><a href="#timeline">timeline</a></li>
//             <li><a href="#prizes">prizes</a></li>
//             <li><a href="#merchandise">merchandise</a></li>
//             <li><a href="#contact">contact us</a></li>
//             <li><a href="#register">register</a></li>
//         </ul>
//     </nav>
// </header>
  )
}

export default NavBar
