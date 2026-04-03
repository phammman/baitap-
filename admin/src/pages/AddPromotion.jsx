import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/promotion.css";
import{ Link } from "react-router-dom";

const mockProducts = [
  { id: 1, name: "Pizza bò" },
  { id: 2, name: "Pizza hải sản" },
  { id: 3, name: "Gà rán" },
  { id: 4, name: "Pepsi" },
];

export default function AddPromotion({ onSave }) {
  const navigate = useNavigate();

  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [expiry, setExpiry] = useState("");
  const [selected, setSelected] = useState([]);

  const toggleProduct = (product) => {
    const exists = selected.find((p) => p.id === product.id);
    if (exists) {
      setSelected(selected.filter((p) => p.id !== product.id));
    } else {
      setSelected([...selected, product]);
    }
  };

  const handleSave = () => {
    const newPromo = {
      code,
      discount,
      expiry,
      status: "active",
      products: selected,
    };

    if (onSave) onSave(newPromo);

    navigate("/promotions");
  };

  return (
    <>
    <div className="promo-page">
      <div className="emp-add-header">
        <Link to="/promotion" className="emp-back">
          &larr;
        </Link>
        <h2>Tạo khuyến mãi</h2>
      </div>
      <div className="promo-form">
        <label>Mã giảm giá</label>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <label>Phần trăm giảm</label>
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />

        <label>Ngày hết hạn</label>
        <input
          type="date"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />

        {/* CHỌN SẢN PHẨM */}
        <label>Chọn sản phẩm áp dụng</label>

        <div className="product-grid">
          {mockProducts.map((p) => {
            const isChecked = selected.some((sp) => sp.id === p.id);

            return (
              <div
                key={p.id}
                className={`product-card ${isChecked ? "active" : ""}`}
                onClick={() => toggleProduct(p)}
              >
                <div className="checkbox-custom">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleProduct(p)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span className="checkmark"></span>
                </div>

                <div className="product-info">
                  <span className="product-name">{p.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* HIỂN THỊ ĐÃ CHỌN */}
        <div className="selected-list">
          <h4>Đã chọn:</h4>
          {selected.map((p) => (
            <span key={p.id} className="selected-tag">
              {p.name}
            </span>
          ))}
        </div>

        <div className="promo-actions">
          <button
            className="cancel"
            onClick={() => navigate("/promotions")}
          >
            Hủy
          </button>
          <button className="save" onClick={handleSave}>
            Lưu
          </button>
        </div>
      </div>
    </div>
    </>
  );
}