import React from 'react';
import { Book, School ,InsertLink } from "@material-ui/icons";
import "./about.scss"

function About() {
  return  <div className="acerca">
  <section className="about">
    <h1 className="heading">
      {" "}
      about <span>me</span>{" "}
    </h1>

    <div className="row">
      <div className="info-container">
        <h1>personal info</h1>

        <div className="box-container">
          <div className="box">
            <h3>
              {" "}
              <span>name : </span> Carlos Orozco{" "}
            </h3>
         
            <h3>
              {" "}
              <span>email : </span> corozco6489@gmail.com
            </h3>
            <h3>
              {" "}
              <span>address : </span> Ecuador
            </h3>
          </div>

          <div className="box">
          
            <h3>
              {" "}
              <span>skill : </span> front-end{" "}
            </h3>
            <h3>
              {" "}
              <span>experience : </span> 1 years{" "}
            </h3>
            <h3>
              {" "}
              <span>language : </span> Spanish, English(basic){" "}
            </h3>
          </div>
        </div>

       
      </div>

      <div className="count-container">
        <div className="box">
          <h3>1+</h3>
          <p>years of experience</p>
        </div>

        <div className="box">
          <h3>4+</h3>
          <p>happy clients</p>
        </div>

        <div className="box">
          <h3>10+</h3>
          <p>project completed</p>
        </div>

        <div className="box">
          <h3>1+</h3>
          <p>awards won</p>
        </div>
      </div>
    </div>
  </section>

  <section class="skills">
    <h1 class="heading">
      {" "}
      <span>my</span> skills{" "}
    </h1>

    <div class="box-container">
      <div class="box">
        <img loading="lazy" src="assets/images/icon-1.png" />
        <h3>html</h3>
      </div>
      <div class="box">
        <img loading="lazy" src="assets/images/icon-2.png" />
        <h3>css</h3>
      </div>
      <div class="box">
        <img loading="lazy" src="assets/images/icon-3.png" />
        <h3>javascript</h3>
      </div>
      <div class="box">
        <img loading="lazy" src="assets/images/icon-8.png" />
        <h3>Matlab</h3>
      </div>
      <div class="box">
        <img loading="lazy" src="assets/images/icon-7.png" />
        <h3>Python</h3>
      </div>
      <div class="box">
        <img loading="lazy" src="assets/images/icon-6.png" />
        <h3>react.js</h3>
      </div>
    </div>
  </section>


</div>;
}

export default About;
