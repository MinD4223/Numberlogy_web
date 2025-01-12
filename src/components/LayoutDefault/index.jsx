import Main from "./Main";
import "../LayoutDefault/LayoutDefault.css";
import Header from "./Header";
import Footer from "./Footer";
function LayoutDefault() {
  return (
    <>
      <div className="layout-default">
        <header className="layout layer-1">
          <Header />
        </header>
        <Main className="layout layer-2" />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default LayoutDefault;
