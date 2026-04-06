import React from "react";
import "../style/report.css";

import {
  FaChartLine,
  FaShoppingCart,
  FaUsers,
  FaPercent,
  FaPizzaSlice,
  FaFire,
} from "react-icons/fa";

export default function Reports() {
  // ✅ DATA DEMO (nhiều màu)
  const chartData = [
    { day: "T2", value: 60, color: "#3b82f6" },
    { day: "T3", value: 80, color: "#10b981" },
    { day: "T4", value: 40, color: "#f59e0b" },
    { day: "T5", value: 90, color: "#ef4444" },
    { day: "T6", value: 70, color: "#8b5cf6" },
    { day: "T7", value: 85, color: "#06b6d4" },
    { day: "CN", value: 55, color: "#f97316" },
  ];

  return (
    <div className="reports-wrapper">
      {/* Header */}
      <div className="reports-header">
        <h2>Báo cáo & Thống kê</h2>
        <p className="reports-date">Tháng 4/2026</p>
      </div>

      {/* Filter */}
      <div className="filter-bar">
        <select className="filter-select" defaultValue="30days">
          <option value="today">Hôm nay</option>
          <option value="7days">7 ngày qua</option>
          <option value="30days">30 ngày qua</option>
          <option value="thisMonth">Tháng này</option>
        </select>

        <button className="view-report-btn">
          Xem báo cáo chi tiết
        </button>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon green"><FaChartLine /></div>
          <div>
            <p className="stat-label">Doanh thu</p>
            <h3 className="stat-value">15.000.000đ</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue"><FaShoppingCart /></div>
          <div>
            <p className="stat-label">Đơn hàng</p>
            <h3 className="stat-value">120</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange"><FaUsers /></div>
          <div>
            <p className="stat-label">Khách hàng</p>
            <h3 className="stat-value">45</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple"><FaPercent /></div>
          <div>
            <p className="stat-label">Tỉ lệ hoàn đơn</p>
            <h3 className="stat-value">2%</h3>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="chart-section">
        <div className="section-header">
          <h2>Biểu đồ doanh thu</h2>
        </div>

        <div className="chart-box">
          {chartData.map((item, index) => (
            <div key={index} className="bar-container">

              <div className="bar-value">{item.value}%</div>

              <div
                className="bar"
                style={{
                  height: item.value * 2 + "px", // ✅ FIX: luôn hiện
                  backgroundColor: item.color
                }}
              ></div>

              <div className="bar-label">{item.day}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Products */}
      <div className="top-products">
        <div className="section-header">
          <h2><FaFire /> Pizza bán chạy nhất</h2>
        </div>

        <table className="top-table">
          <thead>
            <tr>
              <th>Tên món</th>
              <th>Số lượng</th>
              <th>Doanh thu</th>
              <th>Tỷ lệ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-name">
                <FaPizzaSlice className="product-icon" />
                Pizza bò đặc biệt
              </td>
              <td>120</td>
              <td className="revenue">24.000.000đ</td>
              <td className="ratio">38%</td>
            </tr>

            <tr>
              <td className="product-name">
                <FaPizzaSlice className="product-icon" />
                Pizza hải sản
              </td>
              <td>90</td>
              <td className="revenue">18.000.000đ</td>
              <td className="ratio">28%</td>
            </tr>

            <tr>
              <td className="product-name">
                <FaPizzaSlice className="product-icon" />
                Pizza margarita
              </td>
              <td>65</td>
              <td className="revenue">13.000.000đ</td>
              <td className="ratio">20%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}