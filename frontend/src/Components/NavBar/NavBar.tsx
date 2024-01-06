import React from 'react'
import logo from '../../assets/logo.png'
import './NavBar.scss'
import { HashLink } from 'react-router-hash-link'

function NavBar() {

    function hideNavBar() {
        if (document.body.classList.contains("offcanvas-menu")) {
            document.body.classList.remove("offcanvas-menu");
        }
    }
  return (
      <div className="nav-bar local-bootstrap">
          <div className="site-mobile-menu">
              <div className="site-mobile-menu-header">
                  <div className="site-mobile-menu-close mt-3">
                      <span className="icon-close2 js-menu-toggle text-primary"></span>
                  </div>
              </div>
              <div className="site-mobile-menu-body">
                  <ul className={"site-nav-wrap"}>
                      <li><HashLink onClick={hideNavBar} smooth to="/#">Home</HashLink></li>
                      <li><HashLink onClick={hideNavBar} smooth to="/#about">About</HashLink></li>
                      <li><HashLink onClick={hideNavBar} smooth to="/#timeline">Timeline</HashLink></li>

                      {/* <li><HashLink onClick={hideNavBar} smooth to="/#prizes">Prizes</HashLink></li> */}


                      <li><HashLink onClick={hideNavBar} smooth to="/#faq">Faq</HashLink></li>
                      <li><HashLink onClick={hideNavBar} smooth className="cta" to="/register">Register Now</HashLink></li>
                  </ul>
              </div>
          </div>
          <header className="site-navbar py-3 site-container" role="banner">
              <div className="container">
                  <div style={{flexWrap: "nowrap"}} className="row align-items-center">
                      <div className="col-11 col-xl-2">
                        <HashLink smooth to="/#">
                          <div className="logo">
                              <img src={logo} alt="logo" />
                          </div>
                        </HashLink>
                      </div>
                      <div className="col-12 col-md-10 d-none d-xl-block">
                          <nav className="site-navigation position-relative text-right" role="navigation">
                              <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                  <li><a href="/#">Home</a></li>
                                  <li><a href="/#about">About</a></li>
                                  <li><a href="/#timeline">Timeline</a></li>

                                  {/* <li><a href="/#prizes">Prizes</a></li> */}

                                  <li><a href="/#faq">Faq</a></li>
                                  {/* <li><a className="cta" href="/register">Register Now</a></li> */}
                                    <li><HashLink className="cta" to="/register">Register Now</HashLink></li>
                              </ul>
                          </nav>
                      </div>
                      <div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
                           style={{position: "relative", top: "3px", width: "unset"}}><a
                          href="#" className="site-menu-toggle js-menu-toggle text-white">
                          <span className="icon-menu h3"></span></a></div>
                  </div>
              </div>
          </header>
      </div>
  )
}

export default NavBar
