import "./Header.css";
import img from "./free-h2o-icon-Kz1QSE7klgI6.webp";
import telegram from './icons8-телеграм-48.png';
import wapsap from './Whatsapp_37229.png';

function Header() {
  return (
    <header className="header">
      <div className="wrap header-container">
        
       
        <div className="header-logo">
          <img src={img} alt="Логотип" className="logo-img" />
          <div className="logo-text">
            <span className="green-text">Eko</span>Kolodec
          </div>
        </div>

        {/* Описание услуг */}
        <div className="header-services">
          Комплексное обустройство участка:<br />
          колодцы, септики, водопровод и дренаж<br />
          в Московской области
        </div>

        {/* Адрес и время работы */}
        <div className="header-info">
          <p>Адрес: Московская область и Москва</p>
          <p>Пн–Вс: 8:00–20:00</p>
        </div>

        {/* Контакты */}
        <div className="header-contacts">
          <div className="phones">
            <a href="tel:+79023454005" className="phone-link">+7(908) 349-42-05</a>
            <a href="tel:+79685839052" className="phone-link">+7(968) 582-50-08</a>
          </div>
          
          {/* Кнопки с картинками */}
          <div className="messengers">
            <a href="#" className="messenger-btn">
              <img src={telegram} alt="Telegram" className="messenger-icon" />
            </a>
            <a href="#" className="messenger-btn">
              <img src={wapsap} alt="WhatsApp" className="messenger-icon" />
            </a>
          </div>

          <button className="cta-button">Расчёт стоимости</button>
        </div>

      </div>
    </header>
  );
}

export default Header;