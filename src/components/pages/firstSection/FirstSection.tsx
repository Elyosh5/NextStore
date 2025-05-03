import scss from "./FirstSection.module.scss";

const FirstSection = () => {
  return (
    <div className={scss.FirstSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>Latest Tech at Your Fingertips </h1>
            <p>
              Discover cutting-edge electronics and gadgets for every need. From
              smartphones to laptops, we've got you covered.
            </p>
            <div className={scss.buttons}>
              <button>Shop now</button>
              <button>View Sales</button>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=700"
            alt="Tech Devices"
            className="rounded-lg shadow-lg max-h-96 w-full object-cover"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
