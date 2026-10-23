import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-container">
        <ul className="nav-list">
          <li><a href="#">Главная</a></li>
          <li><a href="#">О компании &rsaquo;</a></li>
          <li><a href="#">Копка колодцев &rsaquo;</a></li>
          <li><a href="#">Водоснабжение в доме</a></li>
          <li><a href="#">Септик из колец &rsaquo;</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;