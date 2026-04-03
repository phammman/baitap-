import { useState } from "react";
import AddPromotion from "./AddPromotion";
import "../style/promotion.css";
import { Link } from "react-router-dom";

export default function Promotions() {
  const [showModal, setShowModal] = useState(false);

  const [promoData, setPromoData] = useState([
    {
      code: "PIZZA10",
      discount: 10,
      expiry: "30/03/2026",
      status: "active",
      products: []
    },
    {
      code: "SALE20",
      discount: 20,
      expiry: "01/04/2026",
      status: "exp",
      products: []
    }
  ]);

  const handleAddPromo = (newPromo) => {
    setPromoData([...promoData, newPromo]);
  };

  return (
    <div className="promo-wrapper">
      <h2 className="promo-title">Quản lý khuyến mãi</h2>

      {/* TOP BAR */}
      <div className="promo-top">
        <input placeholder="Tìm mã giảm giá..." />
        {/* <button onClick={() => setShowModal(true)}>
          + Tạo khuyến mãi
        </button> */}
        <Link to="/addPromotion" className="btn">
          + Tạo khuyến mãi
        </Link>
      </div>

      {/* TABLE */}
      <div className="promo-box">
        <table className="promo-table">
          <thead>
            <tr>
              <th>Mã</th>
              <th>Giảm (%)</th>
              <th>Hạn</th>
              <th>Trạng thái</th>
              <th>Sản phẩm</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {promoData.map((promo, index) => (
              <tr key={index}>
                <td>{promo.code}</td>
                <td>{promo.discount}%</td>
                <td>{promo.expiry}</td>
                <td>
                  <span className={`promo-status ${promo.status}`}>
                    {promo.status === "active" ? "Hoạt động" : "Sắp hết"}
                  </span>
                </td>

                {/* HIỂN THỊ SẢN PHẨM */}
                <td>
                  {promo.products?.length > 0
                    ? promo.products.map((p) => p.name).join(", ")
                    : "—"}
                </td>

                <td>
                  <button className="edit">Sửa</button>
                  <button className="delete">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {/* {showModal && (
        <AddPromotion
          onClose={() => setShowModal(false)}
          onSave={handleAddPromo}
        />
      )} */}
    </div>
  );
}