import Footer from "../components/footer";
import Header from "../components/header";

function MessagesPage(): JSX.Element {
    return (
        <div>
            <Header />
            <main className="page__main page__main--messages">
            <h1 className="visually-hidden">Личные сообщения</h1>
            <section className="messages tabs">
                <h2 className="visually-hidden">Сообщения</h2>
                <div className="messages__contacts">
                <ul className="messages__contacts-list tabs__list">
                    <li className="messages__contacts-item">
                    <a className="messages__contacts-tab messages__contacts-tab--active tabs__item tabs__item--active" href="#">
                        <div className="messages__avatar-wrapper">
                            <img className="messages__avatar" src="img/userpic-larisa.jpg" alt="Аватар пользователя" />
                        </div>
                        <div className="messages__info">
                        <span className="messages__contact-name">
                            Лариса Роговая
                        </span>
                        <div className="messages__preview">
                            <p className="messages__preview-text">
                            Озеро Байкал – огромное
                            </p>
                            <time className="messages__preview-time" dateTime="2019-05-01T14:40">
                            14:40
                            </time>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li className="messages__contacts-item messages__contacts-item--new">
                    <a className="messages__contacts-tab tabs__item" href="#">
                        <div className="messages__avatar-wrapper">
                            <img className="messages__avatar" src="img/userpic-petro.jpg" alt="Аватар пользователя" />
                            <i className="messages__indicator">2</i>
                        </div>
                        <div className="messages__info">
                        <span className="messages__contact-name">
                            Петр Демин
                        </span>
                        <div className="messages__preview">
                            <p className="messages__preview-text">
                            Ок, бро! По рукам
                            </p>
                            <time className="messages__preview-time" dateTime="2019-05-01T00:15">
                            00:15
                            </time>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li className="messages__contacts-item">
                    <a className="messages__contacts-tab tabs__item" href="#">
                        <div className="messages__avatar-wrapper">
                            <img className="messages__avatar" src="img/userpic-mark.jpg" alt="Аватар пользователя" />
                        </div>
                        <div className="messages__info">
                        <span className="messages__contact-name">
                            Марк Смолов
                        </span>
                        <div className="messages__preview">
                            <p className="messages__preview-text">
                            Вы: Марк, ждем тебя
                            </p>
                            <time className="messages__preview-time" dateTime="2019-01-02T14:40">
                            2 янв
                            </time>
                        </div>
                        </div>
                    </a>
                    </li>
                    <li className="messages__contacts-item">
                    <a className="messages__contacts-tab tabs__item" href="#">
                        <div className="messages__avatar-wrapper">
                            <img className="messages__avatar" src="img/userpic-tanya.jpg" alt="Аватар пользователя" />
                        </div>
                        <div className="messages__info">
                        <span className="messages__contact-name">
                            Таня Фирсова
                        </span>
                        <div className="messages__preview">
                            <p className="messages__preview-text">
                            Вы: Девушка не
                            </p>
                            <time className="messages__preview-time" dateTime="2018-09-30T14:40">
                            31 сент
                            </time>
                        </div>
                        </div>
                    </a>
                    </li>
                </ul>
                </div>
                <div className="messages__chat">
                <div className="messages__chat-wrapper">
                    <ul className="messages__list tabs__content tabs__content--active">
                    <li className="messages__item">
                        <div className="messages__info-wrapper">
                        <div className="messages__item-avatar">
                            <a className="messages__author-link" href="#">
                                <img className="messages__avatar" src="img/userpic-larisa-small.jpg" alt="Аватар пользователя" />
                            </a>
                        </div>
                        <div className="messages__item-info">
                            <a className="messages__author" href="#">
                            Лариса Роговая
                            </a>
                            <time className="messages__time" dateTime="2019-05-01T14:40">
                            1 ч назад
                            </time>
                        </div>
                        </div>
                        <p className="messages__text">
                        Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                        </p>
                    </li>
                    <li className="messages__item messages__item--my">
                        <div className="messages__info-wrapper">
                        <div className="messages__item-avatar">
                            <a className="messages__author-link" href="#">
                                <img className="messages__avatar" src="img/userpic-medium.jpg" alt="Аватар пользователя" />
                            </a>
                        </div>
                        <div className="messages__item-info">
                            <a className="messages__author" href="#">
                            Антон Глуханько
                            </a>
                            <time className="messages__time" dateTime="2019-05-01T14:39">
                            1 ч назад
                            </time>
                        </div>
                        </div>
                        <p className="messages__text">
                        Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                        </p>
                    </li>
                    <li className="messages__item">
                        <div className="messages__info-wrapper">
                        <div className="messages__item-avatar">
                            <a className="messages__author-link" href="#">
                                <img className="messages__avatar" src="img/userpic-larisa-small.jpg" alt="Аватар пользователя" />
                            </a>
                        </div>
                        <div className="messages__item-info">
                            <a className="messages__author" href="#">
                            Лариса Роговая
                            </a>
                            <time className="messages__time" dateTime="2019-05-01T14:39">
                            1 ч назад
                            </time>
                        </div>
                        </div>
                        <p className="messages__text">
                        Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                        </p>
                    </li>
                    </ul>

                    <ul className="messages__list tabs__content">
                    <li className="messages__item">
                        <div className="messages__info-wrapper">
                        <div className="messages__item-avatar">
                            <a className="messages__author-link" href="#">
                                <img className="messages__avatar" src="img/userpic-larisa-small.jpg" alt="Аватар пользователя" />
                            </a>
                        </div>
                        <div className="messages__item-info">
                            <a className="messages__author" href="#">
                            Лариса Роговая
                            </a>
                            <time className="messages__time" dateTime="2019-05-01T14:40">
                            1 ч назад
                            </time>
                        </div>
                        </div>
                        <p className="messages__text">
                        Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                        </p>
                    </li>
                    <li className="messages__item messages__item--my">
                        <div className="messages__info-wrapper">
                        <div className="messages__item-avatar">
                            <a className="messages__author-link" href="#">
                                <img className="messages__avatar" src="img/userpic-medium.jpg" alt="Аватар пользователя" />
                            </a>
                        </div>
                        <div className="messages__item-info">
                            <a className="messages__author" href="#">
                            Антон Глуханько
                            </a>
                            <time className="messages__time" dateTime="2019-05-01T14:39">
                            1 ч назад
                            </time>
                        </div>
                        </div>
                        <p className="messages__text">
                        Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                        </p>
                    </li>
                    <li className="messages__item">
                        <div className="messages__info-wrapper">
                        <div className="messages__item-avatar">
                            <a className="messages__author-link" href="#">
                                <img className="messages__avatar" src="img/userpic-larisa-small.jpg" alt="Аватар пользователя" />
                            </a>
                        </div>
                        <div className="messages__item-info">
                            <a className="messages__author" href="#">
                            Лариса Роговая
                            </a>
                            <time className="messages__time" dateTime="2019-05-01T14:39">
                            1 ч назад
                            </time>
                        </div>
                        </div>
                        <p className="messages__text">
                        Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                        </p>
                    </li>
                    </ul>

                    <ul className="messages__list tabs__content">
                    <li className="messages__item">
                        <div className="messages__info-wrapper">
                        <div className="messages__item-avatar">
                            <a className="messages__author-link" href="#">
                                <img className="messages__avatar" src="img/userpic-larisa-small.jpg" alt="Аватар пользователя" />
                            </a>
                        </div>
                        <div className="messages__item-info">
                            <a className="messages__author" href="#">
                            Лариса Роговая
                            </a>
                            <time className="messages__time" dateTime="2019-05-01T14:40">
                            1 ч назад
                            </time>
                        </div>
                        </div>
                        <p className="messages__text">
                        Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                        </p>
                    </li>
                    <li className="messages__item messages__item--my">
                        <div className="messages__info-wrapper">
                        <div className="messages__item-avatar">
                            <a className="messages__author-link" href="#">
                                <img className="messages__avatar" src="img/userpic-medium.jpg" alt="Аватар пользователя" />
                            </a>
                        </div>
                        <div className="messages__item-info">
                            <a className="messages__author" href="#">
                            Антон Глуханько
                            </a>
                            <time className="messages__time" dateTime="2019-05-01T14:39">
                            1 ч назад
                            </time>
                        </div>
                        </div>
                        <p className="messages__text">
                        Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                        </p>
                    </li>
                    <li className="messages__item">
                        <div className="messages__info-wrapper">
                        <div className="messages__item-avatar">
                            <a className="messages__author-link" href="#">
                                <img className="messages__avatar" src="img/userpic-larisa-small.jpg" alt="Аватар пользователя" />
                            </a>
                        </div>
                        <div className="messages__item-info">
                            <a className="messages__author" href="#">
                            Лариса Роговая
                            </a>
                            <time className="messages__time" dateTime="2019-05-01T14:39">
                            1 ч назад
                            </time>
                        </div>
                        </div>
                        <p className="messages__text">
                        Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                        </p>
                    </li>
                    </ul>

                    <ul className="messages__list tabs__content">
                    <li className="messages__item">
                        <div className="messages__info-wrapper">
                        <div className="messages__item-avatar">
                            <a className="messages__author-link" href="#">
                                <img className="messages__avatar" src="img/userpic-larisa-small.jpg" alt="Аватар пользователя" />
                            </a>
                        </div>
                        <div className="messages__item-info">
                            <a className="messages__author" href="#">
                            Лариса Роговая
                            </a>
                            <time className="messages__time" dateTime="2019-05-01T14:40">
                            1 ч назад
                            </time>
                        </div>
                        </div>
                        <p className="messages__text">
                        Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                        </p>
                    </li>
                    <li className="messages__item messages__item--my">
                        <div className="messages__info-wrapper">
                        <div className="messages__item-avatar">
                            <a className="messages__author-link" href="#">
                                <img className="messages__avatar" src="img/userpic-medium.jpg" alt="Аватар пользователя" />
                            </a>
                        </div>
                        <div className="messages__item-info">
                            <a className="messages__author" href="#">
                            Антон Глуханько
                            </a>
                            <time className="messages__time" dateTime="2019-05-01T14:39">
                            1 ч назад
                            </time>
                        </div>
                        </div>
                        <p className="messages__text">
                        Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                        </p>
                    </li>
                    <li className="messages__item">
                        <div className="messages__info-wrapper">
                        <div className="messages__item-avatar">
                            <a className="messages__author-link" href="#">
                                <img className="messages__avatar" src="img/userpic-larisa-small.jpg" alt="Аватар пользователя" />
                            </a>
                        </div>
                        <div className="messages__item-info">
                            <a className="messages__author" href="#">
                            Лариса Роговая
                            </a>
                            <time className="messages__time" dateTime="2019-05-01T14:39">
                            1 ч назад
                            </time>
                        </div>
                        </div>
                        <p className="messages__text">
                        Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                        </p>
                    </li>
                    </ul>
                </div>
                <div className="comments">
                    <form className="comments__form form" action="#" method="post">
                    <div className="comments__my-avatar">
                        <img className="comments__picture" src="img/userpic-medium.jpg" alt="Аватар пользователя" />
                    </div>
                    <div className="form__input-section form__input-section--error">
                        <textarea className="comments__textarea form__textarea form__input"
                                placeholder="Ваше сообщение"></textarea>
                        <label className="visually-hidden">Ваше сообщение</label>
                        <button className="form__error-button button" type="button">!</button>
                        <div className="form__error-text">
                            <h3 className="form__error-title">Ошибка валидации</h3>
                            <p className="form__error-desc">Это поле обязательно к заполнению</p>
                        </div>
                    </div>
                    <button className="comments__submit button button--green" type="submit">Отправить</button>
                    </form>
                </div>
                </div>
            </section>
            </main>
            <Footer />
        </div>
    );
}

export default MessagesPage;