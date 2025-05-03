import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <ul>
            <li>
              <h2>Tech logo</h2>
              <p>
                Your one-stop shop for the latest electronics and tech products.
              </p>
            </li>
            <li>
              <h2>Quick Links</h2>
              <a href="">Home</a>
              <a href="">Catalog</a>
              <a href="">Admin</a>
            </li>
            <li>
              <h2>Contacts</h2>
              <p>Email: info@techstore.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Tech Street, Digital City</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
