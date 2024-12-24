import { Button, Col, Form, Input, Row } from "antd";
import "./Login.css";
function Login() {
  return (
    <>
      <div className="login">
        <div className="login-title">THẦN SỐ HỌC</div>
        <div className="login-form">
        <div className="login-form__title">
           ĐĂNG NHẬP
          </div>
          <Form className="form">
            <Row className="form-row" gutter={16}>
              <Col className="form-col" span={24}>
                <p className="form-label">Nhập tài khoản:</p>
                <Form.Item className="form-field" name="name">
                  <Input />
                </Form.Item>
              </Col>
              <Col className="form-col" span={24}>
                <p className="form-label">Nhập mật khẩu:</p>
                <Form.Item className="form-field" name="name">
                  <Input.Password />
                </Form.Item>
              </Col>

              <Col className="form-col" span={24}>
                <Form.Item>
                  <Button
                    className="form-button"
                    type="primary"
                    htmlType="submit"
                  >
                    ĐĂNG NHẬP
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div className="login-contact">
            Nếu chưa có tài khoản vui lòng liên hệ: 029384849
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
