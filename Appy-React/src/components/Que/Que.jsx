import React, { useState } from 'react';
import './Que.scss'
import { accordionQuestions } from '../../constant/accordionQuestions ';

const Que = () => {

  return (
    <section className="que-section">
    <div className="container que-container">
      <div>
        <h2 className="que-heading">Answers to your questions</h2>
      </div>
      <div className="accordion qacc">
        <div className="accordion" id="que-accordion">
          {accordionQuestions.map((item, index) => (
            <div key={index} className={`accordion-item qacc-item ${item.active ? 'active' : ''}`}>
              <h2 className="accordion-header qacc-header">
                <button
                  className="accordion-button qacc-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index + 1}`}
                  aria-expanded={item.active ? "true" : "false"}
                  aria-controls={`collapse${index + 1}`}
                >
                  {item.title}
                </button>
              </h2>
              <div
                id={`collapse${index + 1}`}
                className={`accordion-collapse collapse ${item.active ? "show" : ""}`}
                data-bs-parent="#que-accordion"
              >
                <div className="accordion-body qacc-body">
                  <strong>{item.content}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Que;
