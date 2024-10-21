import React from "react";
import Header from "../header/header";
import "./style.css";
import backgroundImg from "../../assets/design.png";
import coverImg from "../../assets/image 1.png";

const Category = () => {
  const divArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="categoryLayout">
      <Header />
      <div className="categoryLayout-content-container">
        <div className="category-content">
          <div className="category-content-heading">Categories of Pooja</div>
          <div className="categories">
            {divArray.map((item) => (
              <div className="category">
                <img src={coverImg} alt="" />
                <div className="category-left">
                  <div className="category-left-top">
                    Graph Pravesh <span>( गृह प्रवेश)</span>{" "}
                  </div>
                  <div className="category-left-bottom">
                    The Puja is performed by a Pandit ji by doing Ganesh puja,
                    along with the Navagraha Jaaps.
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="category-button">Next</div>
        </div>
        <img src={backgroundImg} alt="" className="backgroundImg1" />
        <img src={backgroundImg} alt="" className="backgroundImg2" />
      </div>
    </div>
  );
};

export default Category;
