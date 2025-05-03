import Footer from "./footer/Footer";
import Header from "./header/Header";
import Categories from "../pages/secondsection/Categories"
import scss from "./Layout.module.scss";


const Layout = () => {
  return (
    <div className={scss.Layout}>
      <div className="container">
        <Header />
        <main><Categories></Categories></main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
