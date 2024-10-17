import React, { useState } from "react";
import data from "../../json/data.json";

function Products() {
  const [filter, setFilter] = useState("Orginal Ethiopian coffee beans");
  return (
    <section className="products section" id="products">
      <div className="products__container container">
        <h2 className="section__title">
          Find Your Type of Ethiopian Coffee  <br />
        </h2>
        <ul className="products__filters">
          <li
            className={`products__item products__line ${
              filter === "Orginal Ethiopian coffee beans" && "active-product"
            }`}
            onClick={() => setFilter("Orginal Ethiopian coffee beans")}
            data-filter=".delicacies"
          >
            <h3 className="products__title">Orginal Ethiopian coffee beans</h3>
            <span className="products__stock">4 products</span>
          </li>
          <li
            className={`products__item products__line ${
              filter === "coffee" && "active-product"
            }`}
            onClick={() => setFilter("coffee")}
            data-filter=".coffee"
          >
            <h3 className="products__title">Coffee</h3>
            <span className="products__stock">4 products</span>
          </li>
          <li
            className={`products__item products__line ${
              filter === "desserts" && "active-product"
            }`}
            onClick={() => setFilter("desserts")}
            data-filter=".cake"
          >
            <h3 className="products__title">Desserts</h3>
            <span className="products__stock">4 products</span>
          </li>
        </ul>
        <div className="products__content grid">
          {data.categories.map((category, index) => {
            return (
              category.category === filter && (
                <article
                  key={index}
                  className={`products__card ${category.type}`}
                >
                  <div className="products__shape">
                    <img
                      src={category.imageUrl}
                      alt=""
                      className="products__img"
                    />
                  </div>
                  <div className="products__data">
                    <h2 className="products__price">${category.price}</h2>
                    <h3 className="products__name">{category.title}</h3>

                    <button className="button products__button">
                      <i className="bx bx-shopping-bag"></i>
                    </button>
                  </div>
                </article>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
