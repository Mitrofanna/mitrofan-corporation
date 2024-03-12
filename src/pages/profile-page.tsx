import { Helmet } from "react-helmet-async";
import Footer from "../components/footer";
import Header from "../components/header";

function ProfilePage(): JSX.Element {
    return (
        <div>
            <Helmet>
                <title>профиль</title>
            </Helmet>
            <Header isAuthorized={true} />
            <main className="page__main page__main--profile">
            <h1 className="visually-hidden">Профиль</h1>
            <div className="profile profile--default">
                <div className="profile__user-wrapper">
                <div className="profile__user user container">
                    <div className="profile__user-info user__info">
                    <div className="profile__avatar user__avatar">
                        <img className="profile__picture user__picture" src="img/userpic-medium.jpg" alt="Аватар пользователя" />
                    </div>
                    <div className="profile__name-wrapper user__name-wrapper">
                        <span className="profile__name user__name">Антон<br></br> Глуханько</span>
                        <time className="profile__user-time user__time" dateTime="2014-03-20">5 лет на сайте</time>
                    </div>
                    </div>
                    <div className="profile__rating user__rating">
                    <p className="profile__rating-item user__rating-item user__rating-item--publications">
                        <span className="user__rating-amount">556</span>
                        <span className="profile__rating-text user__rating-text">публикаций</span>
                    </p>
                    <p className="profile__rating-item user__rating-item user__rating-item--subscribers">
                        <span className="user__rating-amount">1856</span>
                        <span className="profile__rating-text user__rating-text">подписчиков</span>
                    </p>
                    </div>
                    <div className="profile__user-buttons user__buttons">
                    <button className="profile__user-button user__button user__button--subscription button button--main" type="button">Подписаться</button>
                    <a className="profile__user-button user__button user__button--writing button button--green" href="#">Сообщение</a>
                    </div>
                </div>
                </div>
                <div className="profile__tabs-wrapper tabs">
                <div className="container">
                    <div className="profile__tabs filters">
                    <b className="profile__tabs-caption filters__caption">Показать:</b>
                    <ul className="profile__tabs-list filters__list tabs__list">
                        <li className="profile__tabs-item filters__item">
                            <a className="profile__tabs-link filters__button filters__button--active tabs__item tabs__item--active button">Посты</a>
                        </li>
                        <li className="profile__tabs-item filters__item">
                            <a className="profile__tabs-link filters__button tabs__item button" href="#">Лайки</a>
                        </li>
                        <li className="profile__tabs-item filters__item">
                            <a className="profile__tabs-link filters__button tabs__item button" href="#">Подписки</a>
                        </li>
                    </ul>
                    </div>
                    <div className="profile__tab-content">
                    <section className="profile__posts tabs__content tabs__content--active">
                        <h2 className="visually-hidden">Публикации</h2>
                        <article className="profile__post post post-photo">
                        <header className="post__header">
                            <h2><a href="#">Наконец, обработал фотки!</a></h2>
                        </header>
                        <div className="post__main">
                            <div className="post-photo__image-wrapper">
                            <img src="img/rock.jpg" alt="Фото от пользователя" width="760" height="396" />
                            </div>
                        </div>
                        <footer className="post__footer">
                            <div className="post__indicators">
                            <div className="post__buttons">
                                <a className="post__indicator post__indicator--likes button" href="#" title="Лайк">
                                    <svg className="post__indicator-icon" width="20" height="17">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                    <svg className="post__indicator-icon post__indicator-icon--like-active" width="20" height="17">
                                        <use xlinkHref="#icon-heart-active"></use>
                                    </svg>
                                    <span>250</span>
                                    <span className="visually-hidden">количество лайков</span>
                                </a>
                                <a className="post__indicator post__indicator--repost button" href="#" title="Репост">
                                    <svg className="post__indicator-icon" width="19" height="17">
                                        <use xlinkHref="#icon-repost"></use>
                                    </svg>
                                    <span>5</span>
                                    <span className="visually-hidden">количество репостов</span>
                                </a>
                            </div>
                            <time className="post__time" dateTime="2019-01-30T23:41">15 минут назад</time>
                            </div>
                            <ul className="post__tags">
                                <li><a href="#">#nature</a></li>
                                <li><a href="#">#globe</a></li>
                                <li><a href="#">#photooftheday</a></li>
                                <li><a href="#">#canon</a></li>
                                <li><a href="#">#landscape</a></li>
                                <li><a href="#">#щикарныйвид</a></li>
                            </ul>
                        </footer>
                        <div className="comments">
                            <a className="comments__button button" href="#">Показать комментарии</a>
                        </div>
                        </article>
                        <article className="profile__post post post-text">
                        <header className="post__header">
                            <div className="post__author">
                            <a className="post__author-link" href="#" title="Автор">
                                <div className="post__avatar-wrapper post__avatar-wrapper--repost">
                                    <img className="post__author-avatar" src="img/userpic-tanya.jpg" alt="Аватар пользователя" />
                                </div>
                                <div className="post__info">
                                    <b className="post__author-name">Репост: Таня Фирсова</b>
                                    <time className="post__time" dateTime="2019-03-30T14:31">25 минут назад</time>
                                </div>
                            </a>
                            </div>
                        </header>
                        <div className="post__main">
                            <h2><a href="#">Полезный пост про Байкал</a></h2>
                            <p>
                            Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                            </p>
                            <a className="post-text__more-link" href="#">Читать далее</a>
                        </div>
                        <footer className="post__footer">
                            <div className="post__indicators">
                            <div className="post__buttons">
                                <a className="post__indicator post__indicator--likes button" href="#" title="Лайк">
                                    <svg className="post__indicator-icon" width="20" height="17">
                                        <use xlinkHref="#icon-heart"></use>
                                    </svg>
                                    <svg className="post__indicator-icon post__indicator-icon--like-active" width="20" height="17">
                                        <use xlinkHref="#icon-heart-active"></use>
                                    </svg>
                                    <span>250</span>
                                    <span className="visually-hidden">количество лайков</span>
                                </a>
                                <a className="post__indicator post__indicator--repost button" href="#" title="Репост">
                                    <svg className="post__indicator-icon" width="19" height="17">
                                        <use xlinkHref="#icon-repost"></use>
                                    </svg>
                                    <span>5</span>
                                    <span className="visually-hidden">количество репостов</span>
                                </a>
                            </div>
                            <time className="post__time" dateTime="2019-01-30T23:41">15 минут назад</time>
                            </div>
                            <ul className="post__tags">
                                <li><a href="#">#nature</a></li>
                                <li><a href="#">#globe</a></li>
                                <li><a href="#">#photooftheday</a></li>
                                <li><a href="#">#canon</a></li>
                                <li><a href="#">#landscape</a></li>
                                <li><a href="#">#щикарныйвид</a></li>
                            </ul>
                        </footer>
                        <div className="comments">
                            <div className="comments__list-wrapper">
                            <ul className="comments__list">
                                <li className="comments__item user">
                                <div className="comments__avatar">
                                    <a className="user__avatar-link" href="#">
                                    <img className="comments__picture" src="img/userpic-larisa.jpg" alt="Аватар пользователя" />
                                    </a>
                                </div>
                                <div className="comments__info">
                                    <div className="comments__name-wrapper">
                                    <a className="comments__user-name" href="#">
                                        <span>Лариса Роговая</span>
                                    </a>
                                    <time className="comments__time" dateTime="2019-03-20">1 ч назад</time>
                                    </div>
                                    <p className="comments__text">
                                    Красота!!!1!
                                    </p>
                                </div>
                                </li>
                                <li className="comments__item user">
                                <div className="comments__avatar">
                                    <a className="user__avatar-link" href="#">
                                        <img className="comments__picture" src="img/userpic-larisa.jpg" alt="Аватар пользователя" />
                                    </a>
                                </div>
                                <div className="comments__info">
                                    <div className="comments__name-wrapper">
                                    <a className="comments__user-name" href="#">
                                        <span>Лариса Роговая</span>
                                    </a>
                                    <time className="comments__time" dateTime="2019-03-18">2 дня назад</time>
                                    </div>
                                    <p className="comments__text">
                                    Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                                    </p>
                                </div>
                                </li>
                            </ul>
                            <a className="comments__more-link" href="#">
                                <span>Показать все комментарии</span>
                                <sup className="comments__amount">45</sup>
                            </a>
                            </div>
                        </div>
                        <form className="comments__form form" action="#" method="post">
                            <div className="comments__my-avatar">
                                <img className="comments__picture" src="img/userpic-medium.jpg" alt="Аватар пользователя" />
                            </div>
                            <textarea className="comments__textarea form__textarea" placeholder="Ваш комментарий"></textarea>
                            <label className="visually-hidden">Ваш комментарий</label>
                            <button className="comments__submit button button--green" type="submit">Отправить</button>
                        </form>
                        </article>
                    </section>

                    <section className="profile__likes tabs__content">
                        <h2 className="visually-hidden">Лайки</h2>
                        <ul className="profile__likes-list">
                        <li className="post-mini post-mini--photo post user">
                            <div className="post-mini__user-info user__info">
                            <div className="post-mini__avatar user__avatar">
                                <a className="user__avatar-link" href="#">
                                    <img className="post-mini__picture user__picture" src="img/userpic-petro.jpg" alt="Аватар пользователя" />
                                </a>
                            </div>
                            <div className="post-mini__name-wrapper user__name-wrapper">
                                <a className="post-mini__name user__name" href="#">
                                    <span>Петр Демин</span>
                                </a>
                                <div className="post-mini__action">
                                    <span className="post-mini__activity user__additional">Лайкнул вашу публикацию</span>
                                    <time className="post-mini__time user__additional" dateTime="2014-03-20T20:20">5 минут назад</time>
                                </div>
                            </div>
                            </div>
                            <div className="post-mini__preview">
                            <a className="post-mini__link" href="#" title="Перейти на публикацию">
                                <div className="post-mini__image-wrapper">
                                    <img className="post-mini__image" src="img/rock-small.png" width="109" height="109" alt="Превью публикации" />
                                </div>
                                <span className="visually-hidden">Фото</span>
                            </a>
                            </div>
                        </li>
                        <li className="post-mini post-mini--text post user">
                            <div className="post-mini__user-info user__info">
                            <div className="post-mini__avatar user__avatar">
                                <a className="user__avatar-link" href="#">
                                    <img className="post-mini__picture user__picture" src="img/userpic-petro.jpg" alt="Аватар пользователя" />
                                </a>
                            </div>
                            <div className="post-mini__name-wrapper user__name-wrapper">
                                <a className="post-mini__name user__name" href="#">
                                    <span>Петр Демин</span>
                                </a>
                                <div className="post-mini__action">
                                    <span className="post-mini__activity user__additional">Лайкнул вашу публикацию</span>
                                    <time className="post-mini__time user__additional" dateTime="2014-03-20T20:05">15 минут назад</time>
                                </div>
                            </div>
                            </div>
                            <div className="post-mini__preview">
                            <a className="post-mini__link" href="#" title="Перейти на публикацию">
                                <span className="visually-hidden">Текст</span>
                                <svg className="post-mini__preview-icon" width="20" height="21">
                                    <use xlinkHref="#icon-filter-text"></use>
                                </svg>
                            </a>
                            </div>
                        </li>
                        <li className="post-mini post-mini--video post user">
                            <div className="post-mini__user-info user__info">
                            <div className="post-mini__avatar user__avatar">
                                <a className="user__avatar-link" href="#">
                                    <img className="post-mini__picture user__picture" src="img/userpic-petro.jpg" alt="Аватар пользователя" />
                                </a>
                            </div>
                            <div className="post-mini__name-wrapper user__name-wrapper">
                                <a className="post-mini__name user__name" href="#">
                                    <span>Петр Демин</span>
                                </a>
                                <div className="post-mini__action">
                                    <span className="post-mini__activity user__additional">Лайкнул вашу публикацию</span>
                                    <time className="post-mini__time user__additional" dateTime="2014-03-20T18:20">2 часа назад</time>
                                </div>
                            </div>
                            </div>
                            <div className="post-mini__preview">
                            <a className="post-mini__link" href="#" title="Перейти на публикацию">
                                <div className="post-mini__image-wrapper">
                                <img className="post-mini__image" src="img/coast-small.png" width="109" height="109" alt="Превью публикации" />
                                <span className="post-mini__play-big">
                                    <svg className="post-mini__play-big-icon" width="12" height="13">
                                        <use xlinkHref="#icon-video-play-big"></use>
                                    </svg>
                                </span>
                                </div>
                                <span className="visually-hidden">Видео</span>
                            </a>
                            </div>
                        </li>
                        <li className="post-mini post-mini--quote post user">
                            <div className="post-mini__user-info user__info">
                            <div className="post-mini__avatar user__avatar">
                                <a className="user__avatar-link" href="#">
                                    <img className="post-mini__picture user__picture" src="img/userpic-petro.jpg" alt="Аватар пользователя" />
                                </a>
                            </div>
                            <div className="post-mini__name-wrapper user__name-wrapper">
                                <a className="post-mini__name user__name" href="#">
                                    <span>Петр Демин</span>
                                </a>
                                <div className="post-mini__action">
                                    <span className="post-mini__activity user__additional">Лайкнул вашу публикацию</span>
                                    <time className="post-mini__time user__additional" dateTime="2014-03-15T20:05">5 дней назад</time>
                                </div>
                            </div>
                            </div>
                            <div className="post-mini__preview">
                            <a className="post-mini__link" href="#" title="Перейти на публикацию">
                                <span className="visually-hidden">Цитата</span>
                                <svg className="post-mini__preview-icon" width="21" height="20">
                                    <use xlinkHref="#icon-filter-quote"></use>
                                </svg>
                            </a>
                            </div>
                        </li>
                        <li className="post-mini post-mini--link post user">
                            <div className="post-mini__user-info user__info">
                            <div className="post-mini__avatar user__avatar">
                                <a className="user__avatar-link" href="#">
                                    <img className="post-mini__picture user__picture" src="img/userpic-petro.jpg" alt="Аватар пользователя" />
                                </a>
                            </div>
                            <div className="post-mini__name-wrapper user__name-wrapper">
                                <a className="post-mini__name user__name" href="#">
                                    <span>Петр Демин</span>
                                </a>
                                <div className="post-mini__action">
                                    <span className="post-mini__activity user__additional">Лайкнул вашу публикацию</span>
                                    <time className="post-mini__time user__additional" dateTime="2014-03-20T20:05">в далеком 2007-ом</time>
                                </div>
                            </div>
                            </div>
                            <div className="post-mini__preview">
                            <a className="post-mini__link" href="#" title="Перейти на публикацию">
                                <span className="visually-hidden">Ссылка</span>
                                <svg className="post-mini__preview-icon" width="21" height="18">
                                    <use xlinkHref="#icon-filter-link"></use>
                                </svg>
                            </a>
                            </div>
                        </li>
                        </ul>
                    </section>

                    <section className="profile__subscriptions tabs__content">
                        <h2 className="visually-hidden">Подписки</h2>
                        <ul className="profile__subscriptions-list">
                        <li className="post-mini post-mini--photo post user">
                            <div className="post-mini__user-info user__info">
                            <div className="post-mini__avatar user__avatar">
                                <a className="user__avatar-link" href="#">
                                    <img className="post-mini__picture user__picture" src="img/userpic-petro.jpg" alt="Аватар пользователя" />
                                </a>
                            </div>
                            <div className="post-mini__name-wrapper user__name-wrapper">
                                <a className="post-mini__name user__name" href="#">
                                    <span>Петр Демин</span>
                                </a>
                                <time className="post-mini__time user__additional" dateTime="2014-03-20T20:20">5 лет на сайте</time>
                            </div>
                            </div>
                            <div className="post-mini__rating user__rating">
                            <p className="post-mini__rating-item user__rating-item user__rating-item--publications">
                                <span className="post-mini__rating-amount user__rating-amount">556</span>
                                <span className="post-mini__rating-text user__rating-text">публикаций</span>
                            </p>
                            <p className="post-mini__rating-item user__rating-item user__rating-item--subscribers">
                                <span className="post-mini__rating-amount user__rating-amount">1856</span>
                                <span className="post-mini__rating-text user__rating-text">подписчиков</span>
                            </p>
                            </div>
                            <div className="post-mini__user-buttons user__buttons">
                                <button className="post-mini__user-button user__button user__button--subscription button button--main" type="button">Подписаться</button>
                            </div>
                        </li>
                        <li className="post-mini post-mini--photo post user">
                            <div className="post-mini__user-info user__info">
                            <div className="post-mini__avatar user__avatar">
                                <a className="user__avatar-link" href="#">
                                    <img className="post-mini__picture user__picture" src="img/userpic-petro.jpg" alt="Аватар пользователя" />
                                </a>
                            </div>
                            <div className="post-mini__name-wrapper user__name-wrapper">
                                <a className="post-mini__name user__name" href="#">
                                    <span>Петр Демин</span>
                                </a>
                                <time className="post-mini__time user__additional" dateTime="2014-03-20T20:20">5 лет на сайте</time>
                            </div>
                            </div>
                            <div className="post-mini__rating user__rating">
                            <p className="post-mini__rating-item user__rating-item user__rating-item--publications">
                                <span className="post-mini__rating-amount user__rating-amount">556</span>
                                <span className="post-mini__rating-text user__rating-text">публикаций</span>
                            </p>
                            <p className="post-mini__rating-item user__rating-item user__rating-item--subscribers">
                                <span className="post-mini__rating-amount user__rating-amount">1856</span>
                                <span className="post-mini__rating-text user__rating-text">подписчиков</span>
                            </p>
                            </div>
                            <div className="post-mini__user-buttons user__buttons">
                                <button className="post-mini__user-button user__button user__button--subscription button button--quartz" type="button">Отписаться</button>
                            </div>
                        </li>
                        <li className="post-mini post-mini--photo post user">
                            <div className="post-mini__user-info user__info">
                            <div className="post-mini__avatar user__avatar">
                                <a className="user__avatar-link" href="#">
                                    <img className="post-mini__picture user__picture" src="img/userpic-petro.jpg" alt="Аватар пользователя" />
                                </a>
                            </div>
                            <div className="post-mini__name-wrapper user__name-wrapper">
                                <a className="post-mini__name user__name" href="#">
                                    <span>Петр Демин</span>
                                </a>
                                <time className="post-mini__time user__additional" dateTime="2014-03-20T20:20">5 лет на сайте</time>
                            </div>
                            </div>
                            <div className="post-mini__rating user__rating">
                            <p className="post-mini__rating-item user__rating-item user__rating-item--publications">
                                <span className="post-mini__rating-amount user__rating-amount">556</span>
                                <span className="post-mini__rating-text user__rating-text">публикаций</span>
                            </p>
                            <p className="post-mini__rating-item user__rating-item user__rating-item--subscribers">
                                <span className="post-mini__rating-amount user__rating-amount">1856</span>
                                <span className="post-mini__rating-text user__rating-text">подписчиков</span>
                            </p>
                            </div>
                            <div className="post-mini__user-buttons user__buttons">
                                <button className="post-mini__user-button user__button user__button--subscription button button--main" type="button">Подписаться</button>
                            </div>
                        </li>
                        <li className="post-mini post-mini--photo post user">
                            <div className="post-mini__user-info user__info">
                            <div className="post-mini__avatar user__avatar">
                                <a className="user__avatar-link" href="#">
                                    <img className="post-mini__picture user__picture" src="img/userpic-petro.jpg" alt="Аватар пользователя" />
                                </a>
                            </div>
                            <div className="post-mini__name-wrapper user__name-wrapper">
                                <a className="post-mini__name user__name" href="#">
                                    <span>Петр Демин</span>
                                </a>
                                <time className="post-mini__time user__additional" dateTime="2014-03-20T20:20">5 лет на сайте</time>
                            </div>
                            </div>
                            <div className="post-mini__rating user__rating">
                            <p className="post-mini__rating-item user__rating-item user__rating-item--publications">
                                <span className="post-mini__rating-amount user__rating-amount">556</span>
                                <span className="post-mini__rating-text user__rating-text">публикаций</span>
                            </p>
                            <p className="post-mini__rating-item user__rating-item user__rating-item--subscribers">
                                <span className="post-mini__rating-amount user__rating-amount">1856</span>
                                <span className="post-mini__rating-text user__rating-text">подписчиков</span>
                            </p>
                            </div>
                            <div className="post-mini__user-buttons user__buttons">
                            <button className="post-mini__user-button user__button user__button--subscription button button--main" type="button">Подписаться</button>
                            </div>
                        </li>
                        </ul>
                    </section>
                    </div>
                </div>
                </div>
            </div>
            </main>
            <Footer />
        </div>
    );
}

export default ProfilePage;