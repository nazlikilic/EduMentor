import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>Adım Adım Yazılım</p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <a href="index.html" className="logo">
                EduMentor
              </a>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link to={"/"} className="menu-link active">
                      Haydi Alanını Öğren
                    </Link>
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    <Link to={"Egitimler"} className="menu-link">
                      Eğitimler
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link to={"GelistiriciTestler"} className="menu-link">
                      Geliştirici Testler
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link to={"AuthPage"} className="menu-link">
                      Üye Ol
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link to={"BizeKatil"} className="menu-link">
                      Bize Katıl!
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <a href="account.html" className="header-account">
                  <i className="bi bi-person"></i>
                </a>
                <button className="search-button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
