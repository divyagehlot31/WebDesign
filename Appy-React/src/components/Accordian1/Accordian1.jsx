import React,{useState} from 'react'
import './Accordian1.scss'
import { accordionData } from '../../constant/accordionData';

const Accordian1 = () => {
    const [activeIndex, setActiveIndex] = useState(accordionData.findIndex(item => item.active));
  
    const toggleAccordion = (index) => {
      setActiveIndex(index);
    };
  
    return (
      <section className="slider1-section">
        <div className="container slider1-content">
          <div>
            <h1 className="s1-heading text-center">All the essential tools</h1>
            <p className="s1-subheading text-center">
              Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.
            </p>
          </div>
  
          <div className="row s1-row">
            <div className="col-lg-6 col-sm-12 text-center">
              <img src="src/assets/images/slider1.png" className="img-fluid s1-img" alt="Slider" />
            </div>
  
            <div className="col-lg-6 col-sm-12 tab">
              <div className="accordion-container">
                {accordionData.map((item, index) => (
                  <div 
                    className={`accordion-item ${activeIndex === index ? 'active' : ''}`} 
                    key={index}
                  >
                    <div 
                      className="accordion-header" 
                      onClick={() => toggleAccordion(index)}
                    >
                      {item.title}
                    </div>
                    <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
          </div>
        </div>
      </section>
    )
}

export default Accordian1
