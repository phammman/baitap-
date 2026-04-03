import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCog, FaShoppingCart, FaUtensils, FaHome, FaBoxOpen } from "react-icons/fa";

function PosLayout() {
  // 👉 state đặt ở Layout để dùng chung
  const [tabs, setTabs] = useState([{ id: 1, name: 'Đơn 1' }]);
  const [activeTab, setActiveTab] = useState(1);

  const handleAddTab = () => {
    const newId = Date.now();
    const newTab = {
      id: newId,
      name: `Đơn ${tabs.length + 1}`
    };

    setTabs(prev => [...prev, newTab]);
    setActiveTab(newId);
  };

  const sidebarItems = [
    { icon: <FaHome />, path: "/" },
    { icon: <FaShoppingCart />, path: "/pos" },
    { icon: <FaBoxOpen />, path: "/pos/products" },
    { icon: <FaUtensils />, path: "/pos/menu" },
    { icon: <FaCog />, path: "/pos/setting" }
  ];

  const handleRemoveTab = (id) => {
  const newTabs = tabs.filter(tab => tab.id !== id);

  // Nếu xoá tab đang active
  if (id === activeTab) {
    if (newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1].id); // chuyển sang tab cuối
    } else {
      setActiveTab(null);
    }
  }

  setTabs(newTabs);
};

  return (
    <div className="pos-wrapper">

      {/* Sidebar */}
      <nav className="pos-sidebar">
        {sidebarItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === "/pos"}
            className={({ isActive }) =>
              isActive ? "pos-sidebar-item active" : "pos-sidebar-item"
            }
          >
            {item.icon}
          </NavLink>
        ))}
      </nav>

      <div className="pos-main">

        {/* Header */}
        <header className="pos-header">
          <input 
            type="text" 
            className="pos-search-box" 
            placeholder="Nhập tên sản phẩm"
          />

          {/* <div className="pos-tabs-list">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`pos-tab-item ${activeTab === tab.id ? 'pos-active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </div>
            ))}

            <button 
              className="pos-add-tab-btn"
              onClick={handleAddTab}
              title="Thêm đơn hàng"
            >
              +
            </button>
          </div> */}

          <div className="pos-tabs-list">
  {tabs.map((tab) => (
    <div
      key={tab.id}
      className={`pos-tab-item ${activeTab === tab.id ? 'pos-active' : ''}`}
      onClick={() => setActiveTab(tab.id)}
    >
      <span>{tab.name}</span>

      {/* Nút X */}
      <span
        className="pos-tab-close"
        onClick={(e) => {
          e.stopPropagation(); // 
          handleRemoveTab(tab.id);
        }}
      >
        ×
      </span>
    </div>
  ))}

  <button 
    className="pos-add-tab-btn"
    onClick={handleAddTab}
  >
    +
  </button>
</div>
        </header>

        {/* Content */}
        <div className="pos-content-area">
          <Outlet context={{ tabs, activeTab, setActiveTab }} />
        </div>

      </div>
    </div>
  );
}

export default PosLayout;