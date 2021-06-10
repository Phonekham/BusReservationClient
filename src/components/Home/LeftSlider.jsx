import React from "react";
import Slider from "react-slick";

const LeftSlider = () => {
  return (
    <Slider className="slide-1 home-slider">
      <div>
        <div className="home home1 text-center">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="slider-contain">
                  <div>
                    <h4>welcome to fashion</h4>
                    <h1>men fashion</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default LeftSlider;
