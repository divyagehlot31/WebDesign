import React,{useState} from 'react'
import './Accordian2.scss'
import { accordionData2 } from '../../constant/accordionData2';

const Accordian2 = () => {
    const [activeIndex, setActiveIndex] = useState(accordionData2.findIndex(item => item.active));
  
    const toggleAccordion = (index) => {
      setActiveIndex(index);
    };
  
    return (
      <section className="slider2-section">
        <div className="container slider2-content">
          <div>
            <h1 className="s2-heading text-center">Why our customers love working with us</h1>
            <p className="s2-subheading text-center">
              Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.
            </p>
          </div>
  
          <div className="row s2-row">
            <div className="col-lg-6 col-sm-12 text-center">
              <img src="src/assets/images/slider2.png" className="img-fluid s2-img" alt="Slider2" />
            </div>
  
            <div className="col-lg-6 col-sm-12 tab">
              <div className="accordion-container">
                {accordionData2.map((item, index) => (
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
  };


export default Accordian2
