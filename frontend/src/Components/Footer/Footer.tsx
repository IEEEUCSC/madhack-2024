import React from 'react'

import './Footer.scss'

import logo from '../../assets/logo.png'
import facebookLogo from '../../assets/facebook.png'
import instagramLogo from '../../assets/instergram.png'
import linkedinLogo from '../../assets/linkedin.png'

function Footer() {
  return (
    <div className='footer'>

      <div className='footer-container'>
        <div>

            <div className='footer-left'>
            <img className='footer-logo' src={logo} alt="logo" />
              </div>
          <div className='socials links'>
          <ul>
              <a href="https://www.facebook.com/IEEE.UCSC" target="_blank" rel="noopener noreferrer">
                <img className='logo' src={facebookLogo} alt="Facebook Logo" />
              </a>
              <a href="https://www.instagram.com/ucsc.ieee/" target="_blank" rel="noopener noreferrer">
        <img className='logo' src={instagramLogo} alt="Instagram Logo" />
              </a>
              <a href="https://www.linkedin.com/company/ieee-student-branch-ucsc" target="_blank" rel="noopener noreferrer">
        <img className='logo' src={linkedinLogo} alt="LinkedIn Logo" />
      </a>
            </ul>
          </div>
                  <div className='year'>
          <p>© 2024 MadHack</p>
        </div>
            {/* <div className='footer-right'>
            {/* <h2>Links</h2> 
            <ul className='footer-links'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Timeline</a></li>
            <li><a href="#">Prizes</a></li>
            <li><a href="#">FAQ</a></li>
            </ul>
          </div> */}
    </div>
          </div>
    </div>
  )
}

export default Footer
