// CashBook.jsx
import React, { useState } from 'react';
import '../../style/pos.css';
import { FaSearch, FaUpload, FaSave, FaTimes } from "react-icons/fa";

const CashBook = () => {
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // State để chỉnh sửa
  const [editedData, setEditedData] = useState({
    description: '',
    reference: '',
  });

  const vouchers = [
    {
      id: 'RVN00001',
      date: '04/04/2026 14:41',
      amount: 4344439,
      type: 'receipt',
      reason: 'Thu tiền hoàn trả từ NCC',
      branch: 'Cửa hàng chính',
      supplier: 'Nhà cung cấp',
      description: '343',
      reference: '',
    },
  ];

  const totalReceipt = vouchers.reduce((sum, v) => sum + v.amount, 0);
  const totalPayment = 0;

  const formatCurrency = (amount) => {
    return amount.toLocaleString('vi-VN') + 'đ';
  };

  // Khi click vào voucher → load dữ liệu vào form chỉnh sửa
  const handleSelectVoucher = (voucher) => {
    setSelectedVoucher(voucher);
    setEditedData({
      description: voucher.description || '',
      reference: voucher.reference || '',
    });
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="cash-book-container">
      {/* ==================== SIDEBAR ==================== */}
      <div className="cash-book-sidebar">
        {/* Filter */}
        <div className="cash-book__filter">
          <div className="cash-book__input">
            <FaSearch />
            <input
              type="text"
              placeholder="Tìm kiếm đơn hàng (tên, khách hàng, mã...)"
            />
          </div>

          <div className="cash-book__row">
            <input type="date" defaultValue="2026-04-01" />
            <span>→</span>
            <input type="date" defaultValue="2026-04-04" />
            <select>
              <option>Chọn kênh</option>
              <option>POS</option>
              <option>Online</option>
            </select>
          </div>
        </div>

        {/* Totals */}
        <div className="cash-book-totals">
          <div className="cash-book-total-card cash-book-receipt">
            <div className="cash-book-total-icon">↓</div>
            <div className="cash-book-total-label">Tổng thu</div>
            <div className="cash-book-total-amount">
              {formatCurrency(totalReceipt)}
            </div>
          </div>

          <div className="cash-book-total-card cash-book-payment">
            <div className="cash-book-total-icon">↑</div>
            <div className="cash-book-total-label">Tổng chi</div>
            <div className="cash-book-total-amount">
              {formatCurrency(totalPayment)}
            </div>
          </div>
        </div>

        {/* Voucher List */}
        <div className="cash-book-voucher-list">
          {vouchers.length === 0 ? (
            <div className="cash-book-empty-list">Chưa có sổ quỹ nào</div>
          ) : (
            vouchers.map((voucher) => (
              <div
                key={voucher.id}
                onClick={() => handleSelectVoucher(voucher)}
                className={`cash-book-voucher-item ${
                  selectedVoucher?.id === voucher.id ? 'cash-book-voucher-active' : ''
                }`}
              >
                <div className="cash-book-voucher-header">
                  <div className="cash-book-voucher-id">{voucher.id}</div>
                  <div className="cash-book-voucher-date">{voucher.date}</div>
                </div>
                <div className="cash-book-voucher-amount">
                  {formatCurrency(voucher.amount)}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="cash-book-footer">
          <button className="cash-book-create-btn">• Tạo phiếu</button>
          <div className="cash-book-pagination">
            Tổng 1 phiếu
            <div className="cash-book-page-number">1</div>
          </div>
        </div>
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="cash-book-main">
        {selectedVoucher ? (
          <div className="cash-book-detail-wrapper">
            <div className="cash-book-detail-card">
              {/* Header với 2 nút */}
              <div className="cash-book-detail-header">
                <div>
                  <div className="cash-book-detail-id">{selectedVoucher.id}</div>
                  <span className="cash-book-type-badge">Phiếu thu</span>
                </div>

                <div className="cash-book-header-actions">
                  <button 
                    className="cash-book-action-btn save-btn"
                    onClick={() => setEditMode(!editMode)}
                  >
                    <FaSave /> {editMode ? 'Lưu' : 'Chỉnh sửa'}
                  </button>
                  <button 
                    className="cash-book-action-btn cancel-btn"
                    onClick={() => setEditMode(false)}
                  >
                    <FaTimes /> Hủy
                  </button>
                </div>
              </div>

              <div className="cash-book-detail-info">
                <div className="cash-book-info-grid">
                  <div>
                    <div className="cash-book-label">Chi nhánh nhận</div>
                    <div className="cash-book-value">📍 {selectedVoucher.branch}</div>
                  </div>
                  <div>
                    <div className="cash-book-label">Ngày nhận tiền</div>
                    <div className="cash-book-value">04/04/2026</div>
                  </div>
                </div>

                <div>
                  <div className="cash-book-label">Lý do</div>
                  <div className="cash-book-value">{selectedVoucher.reason}</div>
                </div>

                {/* Thông tin chung */}
                <div className="cash-book-section">
                  <div className="cash-book-section-title">THÔNG TIN CHUNG</div>

                  <div className="cash-book-supplier-row">
                    <div className="cash-book-supplier-info">
                      <div className="cash-book-avatar">👤</div>
                      <div>
                        <div className="cash-book-supplier-name">Nhà cung cấp</div>
                        <div className="cash-book-supplier-id">------</div>
                      </div>
                    </div>
                    <div className="cash-book-amount-right">
                      <div className="cash-book-big-amount">
                        {formatCurrency(selectedVoucher.amount)}
                      </div>
                      <div className="cash-book-currency-label">Tiền mặt</div>
                    </div>
                  </div>

                  {/* Diễn giải - có thể chỉnh sửa */}
                  <div className="cash-book-description">
                    <div className="cash-book-label">Diễn giải</div>
                    <textarea
                      name="description"
                      className="cash-book-input"
                      value={editedData.description}
                      onChange={handleInputChange}
                      placeholder="Nhập diễn giải..."
                    />
                  </div>

                  {/* Tham chiếu - có thể chỉnh sửa */}
                  <div className="cash-book-reference">
                    <div className="cash-book-label">Tham chiếu</div>
                    <input
                      type="text"
                      name="reference"
                      className="cash-book-input"
                      value={editedData.reference}
                      onChange={handleInputChange}
                      placeholder="Nhập tham chiếu..."
                    />
                  </div>
                </div>

                {/* Ảnh chứng từ + Upload */}
                <div className="cash-book-section">
                  <div className="cash-book-section-title">ẢNH CHỨNG TỪ</div>
                  <div className="cash-book-upload-area">
                    <FaUpload className="upload-icon" />
                    <p>Click hoặc kéo thả ảnh chứng từ vào đây</p>
                    <input type="file" accept="image/*" className="hidden-upload" />
                  </div>
                  {/* <div className="cash-book-image-placeholder">
                    Chưa có ảnh chứng từ
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="cash-book-empty-main">
            Chọn một phiếu từ bên trái để xem chi tiết
          </div>
        )}
      </div>
    </div>
  );
};

export default CashBook;