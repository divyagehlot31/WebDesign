import React from 'react'
import './Services.scss'
import Herobtn1 from '../ui/Herobtn1'

const Services = () => {
    return (
        <section className="services-section">
          <div className="container">
            <div className="row services-row">
              <div className="col-lg-6 col-sm-12">
                <div className="services-content">
                  <h2 className="services-title">Start now and get the best services</h2>
                  <p className="services-description">
                    Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat congue orci, eget tellus pellentesque
                    aliquet. Felis fringilla morbi dui ac consequat risus pharetra odio pulvinar. Id pellentesque in tortor
                    nec nulla cras sapien. Adipiscing nisi tellus quisque aliquet sit risus elementum scelerisque.
                  </p>
                  <div className="services-button">
                    {/* <Herobtn1/> */}
                    <a href="#" className="sbutton">Get Started</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 services-image">
                <img src="src/assets/images/services-img.png" alt="Services-img" className="services-img" />
              </div>
            </div>
          </div>
        </section>
      )

}

export default Services
