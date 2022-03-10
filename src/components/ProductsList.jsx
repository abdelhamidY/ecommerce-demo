import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./ProductList.scss";
import ProductCart from "./ProductCart";

const ProductList = () => {
  const [term, setTerm] = useState("");
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [list, setList] = useState(false);
  useEffect(() => {
    if (term) {
      axios({
        url: `/products/category/${term}`,
        baseURL: "https://fakestoreapi.com",
        method: "GET",
      }).then(response => {
        setData(response.data);
      });
    } else {
      axios({
        url: "/products",
        baseURL: "https://fakestoreapi.com",
        method: "GET",
      }).then(response => {
        setData(response.data);
      });
    }
  }, [term]);
  const handleCard = index => {
    setActiveIndex(index);
  };
  const handleInput = e => {
    setTerm(e.target.value);
  };
  const handlViewGrid = () => {
    setList(false);
  };
  const handlViewList = () => {
    setList(true);
  };
  const showcontent = () => {
    if (data.length === 0) {
      return (
        <div className="row">
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="row row-list">
          {data.map((product, index) => {
            const activate = activeIndex === index ? "" : "hidden";
            return (
              <ProductCart
                key={product.id}
                product={product}
                index={index}
                activate={activate}
                handleCard={handleCard}
              />
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className={`container ${list ? "list" : ""}`}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <label htmlFor="category">Search By Category Name</label>
        <br />
        <input
          onChange={handleInput}
          value={term}
          type="text"
          id="category"
          placeholder="electronics.."
        />
      </div>
      <div className="show-option" style={{ textAlign: "center" }}>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label
            onClick={handlViewGrid}
            className={`btn btn-info ${list ? "" : "active"}`}
          >
            Grid
          </label>
          <label
            onClick={handlViewList}
            className={`btn btn-info ${list ? "active" : ""}`}
          >
            List
          </label>
        </div>
      </div>
      {showcontent()}
    </div>
  );
};

export default ProductList;
