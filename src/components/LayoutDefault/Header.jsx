import './css/Header.css'
function Header() {
  return (
    <>
      <div className="component-header">
        <div className="compoment-header__title">THẦN SỐ HỌC</div>
        <div className="compoment-header__menu">
          <div className="compoment-header__menu-search">TRA CỨU</div>
          <div className="compoment-header__menu-contact">LIÊN HỆ</div>
          <div className="compoment-header__menu-login">ĐĂNG NHẬP</div>
        </div>
      </div>
    </>
  );
}
export default Header;
