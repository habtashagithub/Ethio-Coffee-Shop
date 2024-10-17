import React from "react";

function AboutUs() {
  return (
    <section className="about" id="about">
      <h1 className="about-heading">About us</h1>
      <div className="row">
        <div className="image">
          <img src="https://i.ibb.co/0YsgKwm/fgj.jpg" alt="" />
        </div>
        <div className="about-content">
          <h3>What makes our Coffee Special</h3>
          <p>
            Each cup of Ethiopian coffee tells a story through its distinct
            flavor. Our beans are known for their bright acidity, floral notes,
            and hints of fruit such as blueberries, jasmine, or citrus. These
            unique profiles are a result of Ethiopia’s diverse growing regions,
            which impart their own characteristics to the beans, making each cup
            a journey for the senses.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
