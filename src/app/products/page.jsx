import React from "react";

const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div>
      <h1>Products: {products.length} </h1>
    </div>
  );
};

export default ProductsPage;
