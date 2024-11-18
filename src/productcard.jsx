import React from "react";

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img src={`https://via.placeholder.com/150?text=${product.name}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.type}</p>
      <p>{product.price}</p>
      <p className={product.status === "Out of Stock" ? "out-of-stock" : "in-stock"}>
        {product.status}
      </p>
    </div>
  );
};

export default ProductCard;
