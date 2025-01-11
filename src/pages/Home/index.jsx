import { Button, Col, Form, Input, Row, Select } from "antd";
import "./Home.css";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <div className="home-content main-title">THẦN SỐ HỌC</div>
        <div className="home-content content">TÌM RA CON SỐ CỦA BẠN</div>
        <div
          className="home-content button"
          onClick={() => {
            const targetElement = document.querySelector(".search-form");
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }}
        >
          TRA CỨU
        </div>
      </div>
      <div className="search-form">
        <div className="search">
          <img className="image_left" src="/assets/image2.png" />
          <div className="form-information">
            <div className="form-title">TRA CỨU THẦN SỐ HỌC</div>
            <Form>
              <Row className="form-row" gutter={16}>
                <Col className="form-col" span={24}>
                  <p className="form-label">Nhập họ tên khai sinh:</p>
                  <Form.Item className="form-field" name="name">
                    <Input />
                  </Form.Item>
                </Col>

                <Col className="form-col" span={14}>
                  <p className="form-label">Tên thường dùng:</p>
                  <Form.Item className="form-field" name="name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col className="form-col" span={10}>
                  <p className="form-label">Giới tính:</p>
                  <Form.Item name="city" className="form-field">
                    <Select allowClear />
                  </Form.Item>
                </Col>
                <Col className="form-col" span={8}>
                  <p className="form-label">Ngày sinh:</p>
                  <Form.Item name="city" className="form-field">
                    <Select allowClear />
                  </Form.Item>
                </Col>
                <Col className="form-col" span={8}>
                  <p className="form-label">Tháng sinh:</p>
                  <Form.Item name="city" className="form-field">
                    <Select allowClear />
                  </Form.Item>
                </Col>
                <Col className="form-col" span={8}>
                  <p className="form-label">Năm sinh:</p>
                  <Form.Item name="city" className="form-field">
                    <Select allowClear />
                  </Form.Item>
                </Col>
                <Col className="form-col" span={24}>
                  <Form.Item>
                    <Button
                      className="form-button"
                      icon={<SearchOutlined />}
                      type="primary"
                      htmlType="submit"
                      onClick={() => {
                        navigate('/result');
                      }}
                    >
                      TRA CỨU
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
      <div className="information">
        <div className="information-contact">
          <div className="contact">
            <div className="contact-content">
              Lá số chuyên sâu dự báo chính xác:
            </div>
            <hr />
            <div className="contact-content">Liên hệ</div>
          </div>
          <img className="image_right" src="/assets/mt-2267-img1.png" />
        </div>
      </div>
    </>
  );
}

export default Home;
