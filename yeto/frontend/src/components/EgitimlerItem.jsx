import { Link } from "react-router-dom"
import "./EgitimlerItem.css";
const EgitimlerItem = () => {
    return (
      <li className="egitimler-item">
        <a href="#" className="egitimler-image">
           
        </a>
        <div className="egitimler-info">
          <div className="egitimler-info-top">
            <span>Şimdi Başla! </span>
          </div>
          <div className="egitimler-info-center">
           <Link to='/VideoAcilma'> Web Geliştirme!</Link>
          </div>
          <div className="egitimler-info-bottom">
            <a href="#">Web Geliştirme Eğitimi</a>
          </div>
        </div>
        <br />
        <div className="egitimler-info">
          <div className="egitimler-info-top">
            <span>Şimdi Başla! </span>
          </div>
          <div className="egitimler-info-center">
            <a href="#">Mobil Uygulama!</a>
          </div>
          <div className="egitimler-info-bottom">
            <a href="#">Mobil Uygulama Geliştirme Eğitimi</a>
          </div>
        </div>
        <br />
        <div className="egitimler-info">
          <div className="egitimler-info-top">
            <span>Şimdi Başla! </span>
          </div>
          <div className="egitimler-info-center">
            <a href="#">Veri Bilimi!</a>
          </div>
          <div className="egitimler-info-bottom">
            <a href="#">Veri Bilimi Eğitimi</a>
          </div>
        </div>
        br
        <div className="egitimler-info">
          <div className="egitimler-info-top">
            <span>Şimdi Başla! </span>
          </div>
          <div className="egitimler-info-center">
            <a href="#">Oyun Geliştirme!</a>
          </div>
          <div className="egitimler-info-bottom">
            <a href="#">Oyun Geliştirme Eğitimi</a>
          </div>
        </div>
        <br />
        
      </li>
    );
  };
  
  export default EgitimlerItem;