import React from "react";

function MainPage() {
    return (
        <div className="page page--main">
            <header className="header page__header">
            <div className="header__wrapper page__header-wrapper container">
                <div className="header__logo-wrapper page__logo-wrapper">
                <a className="header__logo-link header__logo-link--active">
                    <img className="header__logo" src="img/logo.svg" alt="Логотип readme" width="172" height="32" />
                </a>
                <p className="header__topic page__header-topic">
                    mitrofan corporation
                </p>
                </div>
                <div className="header__nav-wrapper">
                <nav className="header__nav">
                    <p className="header__register-slogan">
                    Еще нет аккаунта?
                    </p>
                    <ul className="header__user-nav">
                    <li>
                        <a className="header__user-button header__register-button button button--transparent" href="registration.html">Регистрация</a>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
            </header>

            <main>
            <h1 className="visually-hidden">Главная страница блога</h1>
            <div className="page__main-wrapper page__main-wrapper--intro container">
                <section className="intro">
                <h2 className="visually-hidden">Наши преимущества</h2>
                <b className="intro__slogan">Создавай контент,<br></br> делись творчеством,<br></br> и зарабатывай </b>
                <ul className="intro__advantages-list">
                    <li className="intro__advantage intro__advantage--ease">
                    <p className="intro__advantage-text">
                        Общайся с друзьями&nbsp;или найди единомышленников
                    </p>
                    </li>
                    <li className="intro__advantage intro__advantage--no-excess">
                    <p className="intro__advantage-text">
                        Делись всем, что считаешь важным
                    </p>
                    </li>
                </ul>
                </section>
                <section className="authorization">
                <h2 className="visually-hidden">Авторизация</h2>
                <form className="authorization__form form" action="#" method="post">
                    <div className="authorization__input-wrapper form__input-wrapper">
                        <input className="authorization__input authorization__input--login form__input" type="text" name="login" placeholder="Логин" />
                        <svg className="form__input-icon" width="19" height="18">
                            <use xlinkHref="#icon-input-user"></use>
                        </svg>
                        <label className="visually-hidden">Логин</label>
                        <span className="form__error-label form__error-label--login">Неверный логин</span>
                    </div>
                    <div className="authorization__input-wrapper form__input-wrapper">
                        <input className="authorization__input authorization__input--password form__input" type="password" name="password" placeholder="Пароль" />
                        <svg className="form__input-icon" width="16" height="20">
                            <use xlinkHref="#icon-input-password"></use>
                        </svg>
                        <label className="visually-hidden">Пароль</label>
                        <span className="form__error-label">Пароли не совпадают</span>
                    </div>
                    <a className="authorization__recovery" href="#">Восстановить пароль</a>
                    <button className="authorization__submit button button--main" type="submit">Войти</button>
                </form>
                </section>
            </div>
            </main>

            <footer className="footer footer--main">
            <div className="footer__wrapper">
                <div className="footer__container container">
                <div className="footer__site-info">
                    <div className="footer__site-nav">
                    <ul className="footer__info-pages">
                        <li className="footer__info-page">
                            <a className="footer__page-link" href="#">О проекте</a>
                        </li>
                        <li className="footer__info-page">
                            <a className="footer__page-link" href="#">Реклама</a>
                        </li>
                        <li className="footer__info-page">
                            <a className="footer__page-link" href="#">О разработчиках</a>
                        </li>
                        <li className="footer__info-page">
                            <a className="footer__page-link" href="#">Работа у нас</a>
                        </li>
                        <li className="footer__info-page">
                            <a className="footer__page-link" href="#">Соглашение пользователя</a>
                        </li>
                        <li className="footer__info-page">
                            <a className="footer__page-link" href="#">Политика конфиденциальности</a>
                        </li>
                    </ul>
                    </div>
                    <p className="footer__license">
                    При использовании любых материалов с сайта обязательно указывайте блог в качестве источника. Все авторские и исключительные права в рамках проекта защищены в соответствии с положениями 4 части Гражданского Кодекса Российской Федерации.
                    </p>
                </div>
                <div className="footer__my-info">
                    <ul className="footer__my-pages">
                        <li className="footer__my-page footer__my-page--feed">
                            <a className="footer__page-link" href="feed.html">Моя лента</a>
                        </li>
                        <li className="footer__my-page footer__my-page--popular">
                            <a className="footer__page-link" href="popular.html">Популярный контент</a>
                        </li>
                        <li className="footer__my-page footer__my-page--messages">
                            <a className="footer__page-link" href="messages.html">Личные сообщения</a>
                        </li>
                    </ul>
                    <div className="footer__copyright">
                    <a className="footer__copyright-link" href="#">
                        <span>Разработано Mitrofan corporation</span>
                        <svg className="footer__copyright-logo" width="27" height="34">
                            <use xlinkHref="#icon-heart"></use>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    </div>
    );
}

export default MainPage;