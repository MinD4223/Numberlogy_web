import Chat from "../../components/Chat";
import "./ResultAnswer.css";
import ResultDetailAnswer from "./ResultDetailAnswer";
function ResultAnswer() {
  return (
    <>
      <div className="result">
        <div className="result-number">11</div>
        <div className="result-button__more">Xem chi tiết</div>
      </div>
      <div className="result-detail__title">
        <img className="image_info" src="/src/assets/image3.png" />
        <img className="image_info" src="/src/assets/image4.png" />
        <p>THÔNG TIN CHI TIẾT</p>
        <img className="image_info" src="/src/assets/image5.png" />
        <img className="image_info" src="/src/assets/image6.png" />
      </div>
      <div className="result-detail__content">
        <div className="result-detail__content-table">
          <div className="result-detail__table">Họ và tên: Nguyễn Văn A</div>
          <div className="result-detail__table">Ngày sinh: 05/07/2098</div>
          <div className="result-detail__table">Chi tiết:</div>
          <div className="result-detail__table">
            <table className="table-custom">
              <tbody>
                <tr>
                  <td>ĐƯỜNG ĐỜI</td>
                  <td>3</td>
                  <td>
                    <div className="detail-button">
                      <ResultDetailAnswer />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>NGÀY SINH</td>
                  <td>3</td>
                  <td>
                    <div className="detail-button">Xem</div>
                  </td>
                </tr>
                <tr>
                  <td>SỨ MỆNH</td>
                  <td>3</td>
                  <td>
                    <div className="detail-button">Xem</div>
                  </td>
                </tr>
                <tr>
                  <td>LINH HỒN</td>
                  <td>3</td>
                  <td>
                    <div className="detail-button">Xem</div>
                  </td>
                </tr>
                <tr>
                  <td>TRUNG NIÊN</td>
                  <td>3</td>
                  <td>
                    <div className="detail-button">Xem</div>
                  </td>
                </tr>
                <tr>
                  <td>THÁI ĐỘ</td>
                  <td>3</td>
                  <td>
                    <div className="detail-button">Xem</div>
                  </td>
                </tr>
                <tr>
                  <td>NHÂN CÁCH</td>
                  <td>3</td>
                  <td>
                    <div className="detail-button">Xem</div>
                  </td>
                </tr>
                <tr>
                  <td>NĂM CÁ NHÂN</td>
                  <td>3</td>
                  <td>
                    <div className="detail-button">Xem</div>
                  </td>
                </tr>
                <tr>
                  <td>ĐƯỜNG ĐỜI</td>
                  <td>3</td>
                  <td>
                    <div className="detail-button">Xem</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="result-detail__table2">NĂM ĐỈNH CAO THÀNH CÔNG</div>
          <div className="result-detail__table">
            <table className="table-custom2">
              <tbody>
                <tr>
                  <td>ĐỈNH</td>
                  <td>ĐỈNH</td>
                  <td>TUỔI</td>
                  <td>NĂM</td>
                  <td>THAO TÁC</td>
                </tr>
                <tr>
                  <td>ĐỈNH 1</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>
                    <div className="detail-button2">Xem </div>
                  </td>
                </tr>
                <tr>
                  <td>ĐỈNH 2</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>
                    <div className="detail-button2">Xem </div>
                  </td>
                </tr>
                <tr>
                  <td>ĐỈNH 3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>
                    <div className="detail-button2">Xem </div>
                  </td>
                </tr>
                <tr>
                  <td>ĐỈNH 4</td>
                  <td>3</td>
                  <td>3</td>
                  <td>3</td>
                  <td>
                    <div className="detail-button2">Xem </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Chat/>
    </>
  );
}
export default ResultAnswer;
