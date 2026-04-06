import React, { useState } from "react";
import '../../style/pos.css';
import { FaSearch } from "react-icons/fa";

function OrderSearch() {
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Dữ liệu demo
  const orders = [
    {
      id: "1001",
      date: "05/04/2026 16:15",
      total: 1422222,
      createdBy: "Em chỉ test web thôi lên đừng gọi điện nhé",
      responsible: "Em chỉ test web thôi lên đừng gọi điện nhé",
      items: [
        { name: "Ngựa", qty: 1, price: 222222, total: 222222 },
        { name: "bánh", qty: 6, price: 200000, total: 1200000 },
      ]
    }
  ];

  const filteredOrders = orders.filter(order =>
    order.id.includes(search) || 
    order.createdBy.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="order-search-container">
      {/* ==================== BÊN TRÁI ==================== */}
      <div className="cash-book-sidebar">
        <div className="cash-book__filter">
          <div className="cash-book__input">
            <FaSearch />
            <input
              type="text"
              placeholder="Tìm kiếm đơn hàng (tên, khách hàng, mã...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="cash-book__row">
            <input type="date" />
            <span>→</span>
            <input type="date" />
            <select>
              <option>Chọn kênh</option>
              <option>POS</option>
              <option>Online</option>
            </select>
          </div>
        </div>

        <div className="cash-book-voucher-list">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              onClick={() => setSelectedOrder(order)}
              className={`cash-book-voucher-item ${
                selectedOrder?.id === order.id ? 'cash-book-voucher-active' : ''
              }`}
            >
              <div className="cash-book-voucher-header">
                <div className="cash-book-voucher-id">#{order.id}</div>
                <div className="cash-book-voucher-date">{order.date}</div>
              </div>
              <div className="cash-book-voucher-amount">
                {order.total.toLocaleString('vi-VN')}đ
              </div>
            </div>
          ))}
        </div>

        <div className="cash-book-footer">
          <div className="cash-book-pagination">
            Tổng {filteredOrders.length} đơn
            <div className="cash-book-page-number">1</div>
          </div>
        </div>
      </div>

      {/* ==================== BÊN PHẢI - CHI TIẾT ĐƠN HÀNG (Theo ảnh) ==================== */}
      <div className="cash-book-main">
        {selectedOrder ? (
          <div className="order-detail-card">
            {/* Header */}
            <div className="order-detail-header">
              <div>
                <div className="order-detail-id">#{selectedOrder.id}</div>
                <div className="order-detail-time">{selectedOrder.date}</div>
              </div>

              <div className="order-detail-actions">
                <button className="refund-btn">Hoàn trả</button>
                <button className="print-btn">In hóa đơn</button>
              </div>
            </div>

            {/* Thông tin tạo & phụ trách */}
            <div className="order-info-section">
              <div className="info-row">
                <span>📝</span>
                <p>Tạo bởi {selectedOrder.createdBy}</p>
              </div>
              <div className="info-row">
                <span>👤</span>
                <p>Phụ trách bởi {selectedOrder.responsible}</p>
              </div>
            </div>

            {/* Sản phẩm */}
            <div className="products-section">
              <h3>Sản phẩm</h3>
              {selectedOrder.items.map((item, index) => (
                <div key={index} className="product-row">
                  <div className="product-image-placeholder"></div>
                  <div className="product-name">{item.name}</div>
                  <div className="product-qty">{item.qty}x</div>
                  <div className="product-unit-price">{item.price.toLocaleString('vi-VN')}đ</div>
                  <div className="product-total">{item.total.toLocaleString('vi-VN')}đ</div>
                </div>
              ))}
            </div>

            {/* Tổng kết */}
            <div className="summary-section">
              <div className="summary-row">
                <span>Tổng tiền hàng ({selectedOrder.items.length} sản phẩm)</span>
                <span>{selectedOrder.total.toLocaleString('vi-VN')}đ</span>
              </div>
              <div className="summary-row">
                <span>Giảm giá</span>
                <span>0đ</span>
              </div>
              <div className="summary-row">
                <span>VAT</span>
                <span>0đ</span>
              </div>

              <div className="summary-divider"></div>

              <div className="final-summary">
                <div className="final-left">
                  <strong>Khách phải trả</strong>
                  <div className="final-amount">{selectedOrder.total.toLocaleString('vi-VN')}đ</div>
                </div>
                <div className="final-right">
                  <strong>Còn nợ</strong>
                  <div className="final-debt">0đ</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="cash-book-empty-main">
            Chọn một đơn hàng từ bên trái để xem chi tiết
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderSearch;