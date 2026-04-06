import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { 
  FaCog, 
  FaShoppingCart, 
  FaHome, 
  FaBoxOpen, 
  FaFileInvoiceDollar 
} from "react-icons/fa";
import userIcon from "../assets/userIcon.png";

function PosLayout() {
  const location = useLocation();
  const isPosPage = location.pathname === "/pos";

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

  const handleRemoveTab = (id) => {
    const newTabs = tabs.filter(tab => tab.id !== id);
    if (id === activeTab) {
      setActiveTab(newTabs.length > 0 ? newTabs[newTabs.length - 1].id : null);
    }
    setTabs(newTabs);
  };

  const sidebarItems = [
    { icon: <FaHome />, path: "/", label: "Trang chủ" },
    { icon: <FaShoppingCart />, path: "/pos", label: "Bán hàng" },
    { icon: <FaBoxOpen />, path: "/pos/orderSearch", label: "Tra cứu đơn hàng" },
    { icon: <FaFileInvoiceDollar />, path: "/pos/cashBook", label: "Sổ quỹ" },
    { icon: <FaCog />, path: "/pos/setting", label: "Cài đặt" }
  ];

  return (
    <div className="pos-wrapper">

      {/* Sidebar với Tooltip */}
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
            {/* Tooltip */}
            <span className="sidebar-tooltip">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="pos-main">

        {/* Header - Chỉ hiển thị khi ở /pos */}
        <header className="pos-header">
          {isPosPage && (
            <>
              <input 
                type="text" 
                className="pos-search-box" 
                placeholder="Nhập tên sản phẩm"
              />

              <div className="pos-tabs-list">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`pos-tab-item ${activeTab === tab.id ? 'pos-active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span>{tab.name}</span>
                    <span
                      className="pos-tab-close"
                      onClick={(e) => {
                        e.stopPropagation();
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
            </>
          )}

          {!isPosPage &&
          <h3 className='pos-layout-label'>{sidebarItems.find(item => item.path === location.pathname)?.label}</h3>
          }
          <div className="pos-header-user">
            <h4>Cửa hàng chính</h4>
            <img src={userIcon} alt="User" />
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