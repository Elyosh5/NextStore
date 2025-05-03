import React from "react";
import "./Categories.scss";

const Categories: React.FC = () => {
  return (
    <section className="categories-section">
      <h2>Browse Categories</h2>
      <p>
        Find exactly what you need from our wide range of electronic categories.
      </p>
      <div className="categories">
        <div className="category-item">
          <img
            className="category-item-img"
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=700"
            alt="Smartphones"
          />
          <p className="category-item-name">Smartphones</p>
          <p className="category-item-number">2 products</p>
        </div>
        <div className="category-item">
          <img
            className="category-item-img"
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=700"
            alt="Laptops"
          />
          <p className="category-item-name">Laptops</p>
          <p className="category-item-number">2 products</p>
        </div>
        <div className="category-item">
          <img
            className="category-item-img"
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=700"
            alt="Headphones"
          />
          <p className="category-item-name">Headphones</p>
          <p className="category-item-number">2 products</p>
        </div>
        <div className="category-item">
          <img
            className="category-item-img"
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=700"
            alt="Tablets"
          />
          <p className="category-item-name">Tablets</p>
          <p className="category-item-number">2 products</p>
        </div>
        <div className="category-item">
          <img
            className="category-item-img"
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=700"
            alt="Accessories"
          />
          <p className="category-item-name">Accessories</p>
          <p className="category-item-number">1 products</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
