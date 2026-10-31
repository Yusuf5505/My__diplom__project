import './Main.css';
import img from './Колодец_после_постройки.jpg';
import watsapp from './Whatsapp_37229.png';
import telegramm from './icons8-телеграм-48.png';
import leaf from './icons8-лист-48.png';
import drop from "./icons8-капля-48.png";
import imgKolod from './kopka2.jpg';

function Main() {
    return (
        <>
            <main className="main-hero" style={{ backgroundImage: `url(${img})` }}>
                <div className="wrap hero-content">
                    <h1>УСТРОЙСТВО ВОДОНОСНЫХ<br />КОЛОДЦЕВ С ГАРАНТИЕЙ И ВЫЕЗДОМ<br />В МОСКОВСКОЙ ОБЛАСТИ</h1>
                    <p>Работаем с глиной, песком, суглинком — ручной или механизированный. Строим проверенные колодцы для воды. Предлагаем недорогие решения с упором на качество.</p>

                    <div className="hero-messengers">
                        <a href="#" className="hero-icon-link">
                            <img src={watsapp} alt="WhatsApp" />
                        </a>
                        <a href="#" className="hero-icon-link">
                            <img src={telegramm} alt="Telegram" />
                        </a>
                    </div>

                    <div className="hero-buttons">
                        <button className="btn-light">ПОСМОТРЕТЬ ЦЕНЫ</button>
                        <button className="btn-dark">ЗАЯВКА НА РАСЧЕТ</button>
                    </div>
                </div>

                <div className="wrap features-container">
                    <div className="features-box">
                        <div className="feature-item">
                            <img src={drop} alt="Капля" />
                            <span>Чистая вода</span>
                        </div>
                        <div className="feature-item">
                            <img src={leaf} alt="Лист" />
                            <span>Экологично</span>
                        </div>
                        <div className="feature-item">
                            <img src={drop} alt="Капля" />
                            <span>Гарантия</span>
                        </div>
                    </div>
                </div>
            </main>

        
            <section className="why-us-section">
                <div className="wrap why-us-container">

                    <div className="why-us-image-wrapper">
                        <img src={imgKolod} alt="Колодцы" className="why-us-image" />
                    </div>

                    <div className="why-us-content">
                        <h2>ПОЧЕМУ НАШИ КОЛОДЦЫ<br />НАДЕЖНЫЕ</h2>
                        <p>
                            Мы роем колодцы так, чтобы они служили долго — не заиливались,
                            не оседали, не трескались. Всё делаем по технологии: от оценки
                            грунта до герметизации швов жидким стеклом. Обслуживаем
                            участки в Москве и ближайших районах, учитываем тип грунта,
                            включая известняк и работу в условиях плывуна.
                        </p>
                        <div className="why-us-buttons">
                            <button className="btn-light">Расчёт цены</button>
                            <button className="btn-dark">Заказать консультацию</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Main;