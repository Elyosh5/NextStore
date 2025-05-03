import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={scss.Layout}>
      <div className="container">
        <Header />
        <main></main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
