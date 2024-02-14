import { Link } from "react-router-dom";
import Footer from "../components/footer";

function MainPage(): JSX.Element {
    return (
        <div className="page page--main">
            <header className="header page__header">
            <div className="header__wrapper page__header-wrapper container">
                <div className="header__logo-wrapper page__logo-wrapper">
                <Link className="header__logo-link header__logo-link--active" to="/">
                    <img className="header__logo" src="img/logo.svg" alt="Логотип" width="172" height="32" />
                </Link>
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
                <h2 className="visually-hidden">Наши преимущества</h2>
                <b className="intro__slogan">Создавай контент,<br></br> делись творчеством,<br></br>общайся </b>
                <ul className="intro__advantages-list">
                    <li className="intro__advantage intro__advantage--ease">
                    <p className="intro__advantage-text">
                        Общайся&nbsp;с&nbsp;друзьями, находи единомышленников
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