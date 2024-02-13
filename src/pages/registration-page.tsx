import Footer from "../components/footer";

function RegistrationPage(): JSX.Element {
    return(
        <div>
        <header className="header">
        <div className="header__wrapper container">
            <div className="header__logo-wrapper">
            <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="Логотип readme" width="128" height="24" />
            </a>
            <p className="header__topic">
                mitrofan corporation
            </p>
            </div>
            <form className="header__search-form form" action="#" method="get">
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
            </form>
            <div className="header__nav-wrapper">
            <nav className="header__nav">
                <ul className="header__my-nav">
                <li className="header__my-page header__my-page--popular">
                    <a className="header__page-link" href="popular.html" title="Популярный контент">
                    <span className="visually-hidden">Популярный контент</span>
                    </a>
                </li>
                <li className="header__my-page header__my-page--feed">
                    <a className="header__page-link" href="feed.html" title="Моя лента">
                    <span className="visually-hidden">Моя лента</span>
                    </a>
                </li>
                <li className="header__my-page header__my-page--messages">
                    <a className="header__page-link" href="messages.html" title="Личные сообщения">
                    <span className="visually-hidden">Личные сообщения</span>
                    </a>
                </li>
                </ul>
                <ul className="header__user-nav">
                <li className="header__authorization">
                    <a className="header__user-button header__authorization-button button" href="login.html">Вход</a>
                </li>
                <li>
                    <a className="header__user-button header__user-button--active header__register-button button">Регистрация</a>
                </li>
                </ul>
            </nav>
            </div>
        </div>
        </header>

        <main className="page__main page__main--registration">
        <div className="container">
            <h1 className="page__title page__title--registration">Регистрация</h1>
        </div>
        <section className="registration container">
            <h2 className="visually-hidden">Форма регистрации</h2>
            <form className="registration__form form" action="#" method="post" encType="multipart/form-data">
            <div className="form__text-inputs-wrapper">
                <div className="form__text-inputs">
                <div className="registration__input-wrapper form__input-wrapper">
                    <label className="registration__label form__label" htmlFor="registration-email">Электронная почта <span className="form__input-required">*</span></label>
                    <div className="form__input-section">
                    <input className="registration__input form__input" id="registration-email" type="email" name="email" placeholder="Укажите эл.почту" />
                    <button className="form__error-button button" type="button">!<span className="visually-hidden">Информация об ошибке</span></button>
                    <div className="form__error-text">
                        <h3 className="form__error-title">Заголовок сообщения</h3>
                        <p className="form__error-desc">Текст сообщения об ошибке, подробно объясняющий, что не так.</p>
                    </div>
                    </div>
                </div>
                <div className="registration__input-wrapper form__input-wrapper">
                    <label className="registration__label form__label" htmlFor="registration-login">Логин <span className="form__input-required">*</span></label>
                    <div className="form__input-section">
                    <input className="registration__input form__input" id="registration-login" type="text" name="login" placeholder="Укажите логин" />
                    <button className="form__error-button button" type="button">!<span className="visually-hidden">Информация об ошибке</span></button>
                    <div className="form__error-text">
                        <h3 className="form__error-title">Заголовок сообщения</h3>
                        <p className="form__error-desc">Текст сообщения об ошибке, подробно объясняющий, что не так.</p>
                    </div>
                    </div>
                </div>
                <div className="registration__input-wrapper form__input-wrapper">
                    <label className="registration__label form__label" htmlFor="registration-password">Пароль<span className="form__input-required">*</span></label>
                    <div className="form__input-section">
                    <input className="registration__input form__input" id="registration-password" type="password" name="password" placeholder="Придумайте пароль" />
                    <button className="form__error-button button" type="button">!<span className="visually-hidden">Информация об ошибке</span></button>
                    <div className="form__error-text">
                        <h3 className="form__error-title">Заголовок сообщения</h3>
                        <p className="form__error-desc">Текст сообщения об ошибке, подробно объясняющий, что не так.</p>
                    </div>
                    </div>
                </div>
                <div className="registration__input-wrapper form__input-wrapper">
                    <label className="registration__label form__label" htmlFor="registration-password-repeat">Повтор пароля<span className="form__input-required">*</span></label>
                    <div className="form__input-section">
                    <input className="registration__input form__input" id="registration-password-repeat" type="password" name="password-repeat" placeholder="Повторите пароль" />
                    <button className="form__error-button button" type="button">!<span className="visually-hidden">Информация об ошибке</span></button>
                    <div className="form__error-text">
                        <h3 className="form__error-title">Заголовок сообщения</h3>
                        <p className="form__error-desc">Текст сообщения об ошибке, подробно объясняющий, что не так.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="form__invalid-block">
                <b className="form__invalid-slogan">Пожалуйста, исправьте следующие ошибки:</b>
                <ul className="form__invalid-list">
                    <li className="form__invalid-item">Заголовок. Это поле должно быть заполнено.</li>
                    <li className="form__invalid-item">Цитата. Она не должна превышать 70 знаков.</li>
                </ul>
                </div>
            </div>
            <div className="registration__input-file-container form__input-container form__input-container--file">
                <div className="registration__input-file-wrapper form__input-file-wrapper">
                <div className="registration__file-zone form__file-zone dropzone">
                    <input className="registration__input-file form__input-file" id="userpic-file" type="file" name="userpic-file" title=" " />
                    <div className="form__file-zone-text">
                    <span>Перетащите фото сюда</span>
                    </div>
                </div>
                <button className="registration__input-file-button form__input-file-button button" type="button">
                    <span>Выбрать фото</span>
                    <svg className="registration__attach-icon form__attach-icon" width="10" height="20">
                    <use xlinkHref="#icon-attach"></use>
                    </svg>
                </button>
                </div>
                <div className="registration__file form__file dropzone-previews">

                </div>
            </div>
            <button className="registration__submit button button--main" type="submit">Отправить</button>
            </form>
        </section>
        </main>
        <Footer />
    </div>
    );
}

export default RegistrationPage;