import React from "react";
import './Slider.scss'
import { slider3Data } from "../../constant/slider3Data";


const Slider3 = () => {
  return (
    <section className="slider3-section">
      <div className="container main-container">
        <div
          id="slider3-container"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="inner-container">
            <div className="carousel-inner">
              {slider3Data.map((item, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="row carousel-rows">
                    <div className="col-lg-6 col-md-12 carousel-item1">
                      <img
                        src={item.imgSrc}
                        className="carousel-img"
                        alt="carousel"
                      />
                    </div>
                    <div className="col-lg-6 col-md-12 carousel-item2">
                      <div className="carousel-content">
                        <div>
                          <h1 className="carousel-heading">{item.heading}</h1>
                          <p className="carousel-text">
                            <span className="highlight-start">“</span>
                            {item.text}
                            <span className="highlight-end">”</span>
                          </p>
                        </div>
                        <div className="carousel-heads">
                          {item.author},<br />
                          <span className="name">{item.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-indicators">
              {slider3Data.map((item,index) => (
                <button
                  type="button"
                  key={index}
                  data-bs-target="#slider3-container"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#slider3-container"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true">
              <img src="assets/icons/prev.svg" alt="prev" />
            </span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#slider3-container"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true">
              <img src="assets/icons/next.svg" alt="next" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider3;
