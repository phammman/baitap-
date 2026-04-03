import { Link } from "react-router-dom";
import { useState } from "react";
import "../../style/products.css";

export default function AddProduct() {
  const [isPromo, setIsPromo] = useState(false);
  const [promoType, setPromoType] = useState("percent");

  return (
    <div className="add-product">
      <div className="title-add">
        <Link className="come-back" to="/products">&larr;</Link>
        <h2>Thêm sản phẩm</h2>
      </div>

      <div className="form">
        {/* LEFT */}
        <div className="form-left">
          <label>Tên sản phẩm</label>
          <input type="text" placeholder="Nhập tên pizza..." />

          <label>Loại sản phẩm</label>
          <select>
            <option>Pizza</option>
            <option>Gà rán</option>
            <option>Mì ý</option>
            <option>Nui bỏ lò</option>
            <option>Khai vị</option>
            <option>Salad</option>
            <option>Thức uống</option>
          </select>

          <label>Giá</label>
          <input type="number" placeholder="200000" />

          <label>Mô tả</label>
          <textarea placeholder="Mô tả sản phẩm..." rows={4}></textarea>

          {/* ===== KHUYẾN MÃI ===== */}
          {/* ===== KHUYẾN MÃI ===== */}
<div className="promo-section">
  <div className="promo-header">
    <span>Khuyến mãi</span>

    <label className="switch">
      <input
        type="checkbox"
        checked={isPromo}
        onChange={() => setIsPromo(!isPromo)}
      />
      <span className="slider"></span>
    </label>
  </div>

  {isPromo && (
    <div className="promo-card">
      <div className="promo-row">
        <div>
          <label>Loại giảm</label>
          <select
            value={promoType}
            onChange={(e) => setPromoType(e.target.value)}
          >
            <option value="percent">%</option>
            <option value="amount">VNĐ</option>
          </select>
        </div>

        <div>
          <label>Giá trị</label>
          <input type="number" placeholder="Nhập..." />
        </div>
      </div>

      <div className="promo-row">
        <div>
          <label>Bắt đầu</label>
          <input type="date" />
        </div>

        <div>
          <label>Kết thúc</label>
          <input type="date" />
        </div>
      </div>

      {/* Preview giá */}
      <div className="promo-preview">
        <span className="old-price">200.000đ</span>
        <span className="arrow">→</span>
        <span className="new-price">180.000đ</span>
      </div>
    </div>
  )}
</div>
        </div>

        {/* RIGHT */}
        <div className="form-right">
          <label>Ảnh sản phẩm</label>
          <div className="upload-box">
            <p>+ Tải ảnh lên</p>
          </div>

          <label>Trạng thái</label>
          <div className="status-toggle">
            <input type="checkbox" defaultChecked />
            <span>Đang bán</span>
          </div>
        </div>
      </div>

      {/* ACTION */}
      <div className="actions">
        <button className="cancel">Hủy</button>
        <button className="submit">Lưu sản phẩm</button>
      </div>
    </div>
  );
}