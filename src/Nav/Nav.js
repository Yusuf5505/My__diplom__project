import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-container">
        <ul className="nav-list">
          <li><a href="#">Главная</a></li>
          
         
          <li className="nav-item-dropdown">
            <a href="#">О компании &#9662;</a>
            <ul className="submenu">
              <li><a href="#">Отзывы</a></li>
              <li><a href="#">Ответы на вопросы</a></li>
            </ul>
          </li>

          <li><a href="#">Копка колодцев &rsaquo;</a></li>
          <li><a href="#">Водоснабжение в доме</a></li>
          
         
          <li className="nav-item-dropdown">
            <a href="#">Септик из колец &#9662;</a>
            <ul className="submenu">
              <li><a href="#">Дренаж участка</a></li>
            </ul>
          </li>
          
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;