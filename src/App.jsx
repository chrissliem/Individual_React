import React, { useState } from "react";
import { products } from "./index";
import ProductCard from "./productcard";
import ProductDetails from "./detailproduct";
import './style.css';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <h1>Product Page</h1>
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} onBack={handleBack} />
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
