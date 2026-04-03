import React, { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import '../../style/pos.css';
import AddPos from './AddPos';

function Pos() {
  const { tabs, activeTab } = useOutletContext();
  const [orders, setOrders] = useState({});

  const currentTab = tabs.find(t => t.id === activeTab);

  // 🔥 data demo
  const products = [
    {
      id: 1,
      name: "Pizza Hải sản",
      price: 120000,
      img: "http://thepizzacompany.vn/images/thumbs/000/0004647_bo-doi-nhu-y-combo-1_300.jpeg"
    },
    {
      id: 2,
      name: "Burger bò",
      price: 80000,
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
      id: 3,
      name: "Trà sữa trân châu",
      price: 40000,
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
    },
    {
      id: 4,
      name: "Cà phê đá",
      price: 30000,
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    }
  ];

  // 🔥 thêm sản phẩm
  const handleAddProduct = (product) => {
    setOrders(prev => {
      const currentOrder = prev[activeTab] || [];
      const exist = currentOrder.find(p => p.id === product.id);

      let newOrder;

      if (exist) {
        newOrder = currentOrder.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        newOrder = [...currentOrder, { ...product, quantity: 1 }];
      }

      return {
        ...prev,
        [activeTab]: newOrder
      };
    });
  };

  const currentOrder = orders[activeTab] || [];

  const total = currentOrder.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="pos-container">

      {/* 🔥 LEFT: PRODUCT */}
      <AddPos 
        products={products} 
        onAddProduct={handleAddProduct} 
      />

      {/* 🔥 RIGHT: ORDER */}
      <div className="order-section">
        <h3>{currentTab ? `Đơn: ${currentTab.name}` : "Chưa chọn đơn"}</h3>

        <div className="order-list">
          {currentOrder.length === 0 ? (
            <p>Chưa có sản phẩm</p>
          ) : (
            currentOrder.map(item => (
              <div key={item.id} className="order-item">
                <img src={item.img} alt="" />

                <div className="info">
                  <p>{item.name}</p>
                  <span>
                    {item.quantity} x {item.price.toLocaleString()}đ
                  </span>
                </div>

                <strong>
                  {(item.price * item.quantity).toLocaleString()}đ
                </strong>
              </div>
            ))
          )}
        </div>

        <div className="order-summary">
          <div>
            <span>Tổng tiền</span>
            <span>{total.toLocaleString()}đ</span>
          </div>

          <button className="checkout-btn">
            THANH TOÁN
          </button>
        </div>
      </div>

    </div>
  );
}

export default Pos;