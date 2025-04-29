import React from 'react'
import './feature.scss'
import { featuresData } from '../../constant/featuresData'

const Feature = () => {
  return (
    <section className="feature-section">
    <div className="container">
      <div className="row fe-row" id="feature-container">
        {featuresData.map((feature, index) => (
          <div className="col-lg-4 col-sm-12 fe" key={index}>
            <img className="fe" src={feature.img} alt={feature.alt} />
            <h6 className="fe-heading">{feature.heading}</h6>
            <p className="fe-text">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Feature;
