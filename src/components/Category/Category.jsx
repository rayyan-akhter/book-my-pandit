import React, { useEffect, useState } from "react";
import Header from "../header/header";
import "./style.css";
import backgroundImg from "../../assets/design.png";
import coverImg from "../../assets/image 1.png";
import { CategoryData }from "../../data.js"

const Category = () => {
  const [ categories, setCategories] = useState([]);

  useEffect(()=>{
    
    setCategories(CategoryData);
    console.log(categories,"categories")  
  },[])


  return (
    <div className="categoryLayout">
      <Header />
      <div className="categoryLayout-content-container">
        <div className="category-content">
          <div className="category-content-heading">Categories of Pooja</div>
          <div className="categories">
            {categories.map((category) => (
              <div className="category" key={category.id}>
                <img src={coverImg} alt="" />
                <div className="category-left">
                  <div className="category-left-top">
                    {category.name} <span> ({category.translation})</span>{" "}
                  </div>
                  <div className="category-left-bottom">
                  {category.description}
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
