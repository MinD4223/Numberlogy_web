// import { useNavigate } from "react-router-dom";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import "./css/Header.css";


function Header() {
  // const navigate = useNavigate();
  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  };
  const hideSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };
  return (
    <>
      <div className="nav">
        <ul className="sidebar">
          <li>
            <a href="#" onClick={hideSidebar}>
              <CloseOutlined />
            </a>
          </li>
          <li>
            <a href="#">TRA CỨU</a>
          </li>
          <li>
            <a href="#">LIÊN HỆ</a>
          </li>
          <li>
            <a href="#">ĐĂNG NHẬP</a>
          </li>
        </ul>
        <ul>
          <li>
            <a className="title" href="#">THẦN SỐ HỌC</a>
          </li>
          <li>
            <a className="hideOnMobile" href="#">
              TRA CỨU
            </a>
          </li>
          <li>
            <a className="hideOnMobile" href="#">
              LIÊN HỆ
            </a>
          </li>
          <li>
            <a className="hideOnMobile " id="compoment-header__menu-login" href="#">
              ĐĂNG NHẬP
            </a>
          </li>
          <li>
            <a className="menu" href="#" onClick={showSidebar}>
              <MenuOutlined />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Header;
