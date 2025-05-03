import FirstSection from "../pages/firstSection/FirstSection";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Categories from "../pages/secondsection/Categories"
import scss from "./Layout.module.scss";


const Layout = () => {
  return (
    <div className={scss.Layout}>
        <Header />
        <main>
          <FirstSection/>
          <Categories/>
        </main>
        <Footer />
    </div>
  );
};

export default Layout;
