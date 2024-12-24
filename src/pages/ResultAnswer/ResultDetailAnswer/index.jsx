import { Modal } from "antd";
import { useState } from "react";

function ResultDetailAnswer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={showModal}>Xem thông tin</div>
      <Modal
        title="THÔNG TIN CHI TIẾT: NGÀY SINH"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="modal-number">3</div>
        <div className="modal-content">
          <ul>
            <li>
              Bạn là người thân thiện và tràn đầy năng lượng, và khả năng sáng
              tạo của bạn không có giới hạn.
            </li>
            <li>
              Bạn là người rất thân thiện, hòa đồng, vui vẻ và là người thích
              cuộc sống của những bữa tiệc.
            </li>
            <li>
              Bài học của bạn là học cách quản lý cảm xúc và ngừng tìm kiếm sự
              thỏa mãn tức thì.
            </li>
          </ul>
        </div>
        <div className="modal-button"> <div className="button-ok" onClick={handleOk}>OK</div></div>
      </Modal>
    </>
  );
}
export default ResultDetailAnswer;
