import React from 'react';
import "../style/dashboard.css";

import { 
  FaMoneyBillWave, 
  FaClipboardList, 
  FaUsers, 
  FaPizzaSlice, 
  FaExclamationTriangle 
} from 'react-icons/fa';

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <h2>Tổng quan cửa hàng</h2>
        <p className="dashboard-date">Cập nhật hôm nay • 04/04/2026</p>
      </div>

      {/* Hàng 1: 4 KPI Cards */}
      <div className="kpi-grid">
        <div className="kpi-card green">
          <FaMoneyBillWave className="kpi-icon" />
          <div>
            <p className="kpi-label">Doanh thu hôm nay</p>
            <h3 className="kpi-value">6.500.000đ</h3>
          </div>
          <p className="kpi-change positive">↑ 12% so với hôm qua</p>
        </div>

        <div className="kpi-card blue">
          <FaClipboardList className="kpi-icon" />
          <div>
            <p className="kpi-label">Đơn hàng hôm nay</p>
            <h3 className="kpi-value">58</h3>
          </div>
          <p className="kpi-change positive">↑ 8 đơn</p>
        </div>

        <div className="kpi-card orange">
          <FaUsers className="kpi-icon" />
          <div>
            <p className="kpi-label">Khách hàng mới</p>
            <h3 className="kpi-value">18</h3>
          </div>
          <p className="kpi-change positive">+4 so với tuần trước</p>
        </div>

        <div className="kpi-card rose">
          <FaPizzaSlice className="kpi-icon" />
          <div>
            <p className="kpi-label">Sản phẩm đang bán</p>
            <h3 className="kpi-value">72</h3>
          </div>
          <p className="kpi-change">12 món sắp hết</p>
        </div>
      </div>

      {/* Hàng 2: Doanh thu tuần này */}
      <div className="section-card revenue-section">
        <div className="section-header">
          <h2>Doanh thu tuần này</h2>
          <select className="month-select">
            <option>Tháng 4/2026</option>
          </select>
        </div>
        <div className="weekdays">
          <span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>T8</span>
        </div>
        <div className="chart-container">
          {[40, 70, 55, 85, 65, 50, 78].map((h, i) => (
            <div key={i} className="bar-wrapper">
              <div className="bar" style={{ height: `${h}%` }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Hàng 3: Cảnh báo + Đơn hàng mới nhất */}
      <div className="bottom-row">
        {/* Cảnh báo */}
        <div className="section-card warning-section">
          <div className="warning-header">
            <FaExclamationTriangle className="warning-icon" />
            <h2>Cảnh báo</h2>
          </div>
          <ul className="warning-list">
            <li>Phô mai Mozzarella sắp hết (còn 2kg)</li>
            <li>Bột mì chỉ còn 15% mức an toàn</li>
            <li>2 đơn hàng đang trễ thời gian</li>
          </ul>
        </div>

        {/* Đơn hàng mới nhất */}
        <div className="section-card orders-section">
          <div className="section-header">
            <h2>Đơn hàng mới nhất</h2>
            <button className="view-all-btn">Xem tất cả →</button>
          </div>

          <table className="orders-table">
            <thead>
              <tr>
                <th>Mã đơn</th>
                <th>Khách hàng</th>
                <th>Món chính</th>
                <th>Thời gian</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="order-id">#101</td>
                <td>Nguyễn Văn Minh</td>
                <td>Pizza bò đặc biệt</td>
                <td className="time">14:32</td>
                <td><span className="status success">Đã giao</span></td>
              </tr>
              <tr>
                <td className="order-id">#102</td>
                <td>Trần Thị Hà</td>
                <td>Mì ý sốt kem</td>
                <td className="time">14:15</td>
                <td><span className="status processing">Đang chuẩn bị</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}