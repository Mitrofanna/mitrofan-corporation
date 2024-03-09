import { Link, NavLink } from "react-router-dom";

type THeader = {
  isAuthorized: boolean;
}

function Header({isAuthorized = true}: THeader): JSX.Element {
    return (
      <header className="header">
      <div className="header__wrapper container">
        <div className="header__logo-wrapper">
          <Link className="header__logo-link" to="/">
            <img className="header__logo" src="img/logo.png" alt="Логотип readme" width="70" height="70" />
          </Link>
          <p className="header__topic">
            mitrofan corporation
          </p>
        </div>
        {isAuthorized ? 
        (<><form className="header__search-form form" action="#" method="get">
              <div className="header__search">
                <label className="visually-hidden">Поиск</label>
                <input className="header__search-input form__input" type="search" />
                <button className="header__search-button button" type="submit">
                  <svg className="header__search-icon" width="18" height="18">
                    <use xlinkHref="#icon-search"></use>
                  </svg>
                  <span className="visually-hidden">Начать поиск</span>
                </button>
              </div>
            </form><div className="header__nav-wrapper">
                <nav className="header__nav">
                  <ul className="header__my-nav">
                    <li className="header__my-page header__my-page--popular">
                      <NavLink className="header__page-link" to="/popular" title="Популярный контент">
                        <span className="visually-hidden">Популярный контент</span>
                      </NavLink>
                    </li>
                    <li className="header__my-page header__my-page--feed">
                      <NavLink className="header__page-link" to="/feed" title="Моя лента">
                        <span className="visually-hidden">Моя лента</span>
                      </NavLink>
                    </li>
                    <li className="header__my-page header__my-page--messages">
                      <NavLink className="header__page-link" to="/messages" title="Личные сообщения">
                        <span className="visually-hidden">Личные сообщения</span>
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="header__user-nav">
                    <li className="header__profile">
                      <NavLink className="header__profile-link" to="/profile">
                        <div className="header__avatar-wrapper">
                          <img className="header__profile-avatar" src="img/userpic-medium.jpg" alt="Аватар профиля" />
                        </div>
                        <div className="header__profile-name">
                          <span>Антон Глуханько</span>
                          <svg className="header__link-arrow" width="10" height="6">
                            <use xlinkHref="#icon-arrow-right-ad"></use>
                          </svg>
                        </div>
                      </NavLink>
                      <div className="header__tooltip-wrapper">
                        <div className="header__profile-tooltip">
                          <ul className="header__profile-nav">
                            <li className="header__profile-nav-item">
                              <a className="header__profile-nav-link" href="#">
                                <span className="header__profile-nav-text">
                                  Мой профиль
                                </span>
                              </a>
                            </li>
                            <li className="header__profile-nav-item">
                              <a className="header__profile-nav-link" href="#">
                                <span className="header__profile-nav-text">
                                  Сообщения
                                  <i className="header__profile-indicator">2</i>
                                </span>
                              </a>
                            </li>
                            <li className="header__profile-nav-item">
                              <a className="header__profile-nav-link" href="#">
                                <span className="header__profile-nav-text">
                                  Выход
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a className="header__post-button button button--transparent" href="adding-post.html">Пост</a>
                    </li>
                  </ul>
                </nav>
              </div></>): (
                <ul className="header__user-nav header__login">
                  <li className="header__authorization">
                    <NavLink className="header__user-button header__authorization-button button" to="/">Вход</NavLink>
                  </li>
                  <li>
                    <a className="header__user-button header__user-button--active header__register-button button">Регистрация</a>
                  </li>
              </ul>
              )}
      </div>
    </header>
    );
}

export default Header;