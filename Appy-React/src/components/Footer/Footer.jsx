import React from 'react'
import './Footer.scss'
import { footerData } from '../../constant/footerData'

const Footer =() =>{
  return (
    <footer className="footer-section">
    <div className="container">
      <div className="footer-links">
        <div className="row footer-row">
          {footerData.map((category, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-sm-6 col-12 footer-category">
              <h4 className="footer-title">{category.title}</h4>
              <ul className="footer-points">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-copyright">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-4 col-sm-12 footer-logo">
            <a href="#" className="logo">Appy</a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 copyright-text">
            <p>@ 2023 All rights reserved.</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 social-icons">
            {[
              { icon: "../..//assets/icons/yt.svg", alt: "YouTube", label: "YouTube" },
              { icon: "../../assets/icons/fb.svg", alt: "Facebook", label: "Facebook" },
              { icon: "../../assets/icons/twitt.svg", alt: "Twitter", label: "Twitter" },
              { icon: "../../assets/icons/insta.svg", alt: "Instagram", label: "Instagram" },
              { icon: '../../assets/icons/linkedin.svg', alt: "LinkedIn", label: "LinkedIn" }
            ].map((social, idx) => (
              <a key={idx} href="#" className="social-icon">
                <img src={`src/assets/icons/${social.icon}`} alt={social.alt} />
                <span className="social-tooltip">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
