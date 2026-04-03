import React from "react";

function AddPos({ products, onAddProduct }) {
  return (
    <div className="product-section">
      <h3>Sản phẩm</h3>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt="" />

            <div className="product-info">
              <h4>{product.name}</h4>
              <p>{product.price.toLocaleString()}đ</p>
            </div>

            <button onClick={() => onAddProduct(product)}>
              Mua
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddPos;