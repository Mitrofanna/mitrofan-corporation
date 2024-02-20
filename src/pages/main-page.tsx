import { Link } from "react-router-dom";
import Footer from "../components/footer";
import { Helmet } from "react-helmet-async";
import "../styles/glitch.css";

function MainPage(): JSX.Element {
    return (
        <div className="page page--main">
            <Helmet>
                <title>GO CHAT, вход</title>
            </Helmet>
            <header className="header page__header">
            <div className="header__wrapper page__header-wrapper container">
                <div className="header__logo-wrapper page__logo-wrapper">
                <Link className="header__logo-link header__logo-link--active" to="/">
                    <img className="header__logo header__logo-main" src="img/logo.png" alt="Логотип" width="170" height="170" />
                </Link>              
                <p className="header__topic page__header-topic">
                    mitrofan corporation
                </p>
                </div>
                <div className="header__nav-wrapper">
                <nav className="header__nav">
                    <ul className="header__user-nav header-right">
                    <li>
                        <Link className="header__user-button header__register-button button button--transparent" to="/registration">Регистрация</Link>
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
                <div className="intro__title box">
                    <h1 className="intro__glitch glitch">GO CHAT</h1>
                </div>
                <b className="intro__slogan">создавай контент<br></br> делись творчеством<br></br>общайся</b>
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
                    <Link to='/feed'>
                    <button className="authorization__submit button button--main" type="submit">Войти</button>
                    </Link>
                </form>
                </section>
            </div>
            </main>
        <Footer />
    </div>
    );
}

export default MainPage;