import React from "react";

const ProductDetails = ({ product, onBack }) => {
  return (
    <div className="product-details">
      <button onClick={onBack}>Back</button>
      <h2>{product.name}</h2>
      <p><strong>Type:</strong> {product.type}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Status:</strong> {product.status}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ProductDetails;
