import FirstSection from "../pages/firstSection/FirstSection";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Categories from "../pages/secondsection/Categories"
// import ThirdSection from "../pages/thirdsection/ThirdSection"
import scss from "./Layout.module.scss";


const Layout = () => {
  return (
    <div className={scss.Layout}>
        <Header />
        <main>
          <FirstSection/>
          <Categories/>
          {/* <ThirdSection/> */}
        </main>
        <Footer />
    </div>
  );
};

export default Layout;
