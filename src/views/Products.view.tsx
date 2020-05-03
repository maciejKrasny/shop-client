import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";

const Products: React.FC<{}> = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8080/product', {
      headers: {}
    })
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [products]);

  return (
    <>
      <div>
        <Link to="/products/5">DETAILS</Link>
      </div>
      <div>
        <Link to="/cart">CART</Link>
      </div>
      <div>
      </div>
    </>
  )
    ;
};

export default Products;
