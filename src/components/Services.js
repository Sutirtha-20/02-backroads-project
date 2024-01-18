import React from 'react';
import { services } from '../data';

function Services() {
  return (
    <div>
      <section className="section services" id="services">
        <div className="section-title">
          <h2>our <span>services</span></h2>
        </div>
        <div className="section-center services-center">
          {services.map((data) => {
            return (
              <article className="service">
                <span className="service-icon"><i className={data.icon}></i></span>
                <div className="service-info">
                  <h4 className="service-title">{data.title}</h4>
                  <p className="service-text">
                   {data.text}
                  </p>
                </div>
              </article>
            )
          })}


          {/* <article className="service">
            <span className="service-icon"><i className="fas fa-tree fa-fw"></i></span>
            <div className="service-info">
              <h4 className="service-title">endless hiking</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>

          <article className="service">
            <span className="service-icon"><i className="fas fa-socks fa-fw"></i></span>
            <div className="service-info">
              <h4 className="service-title">amazing comfort</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article> */}
        </div>
      </section>
    </div>
  )
}

export default Services