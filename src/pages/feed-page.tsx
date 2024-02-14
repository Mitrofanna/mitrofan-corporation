import Footer from "../components/footer";
import Header from "../components/header";

function FeedPage(): JSX.Element {
    return (
        <div>
            <Header />
            <main className="page__main page__main--feed">
                <div className="container">
                    <h1 className="page__title page__title--feed">Моя лента</h1>
                </div>
                <div className="page__main-wrapper container">
                    <section className="feed">
                    <h2 className="visually-hidden">Лента</h2>
                    <div className="feed__main-wrapper">
                        <div className="feed__wrapper">
                        <article className="feed__post post post-photo">
                            <header className="post__header post__author">
                            <a className="post__author-link" href="#" title="Автор">
                                <div className="post__avatar-wrapper">
                                <img className="post__author-avatar" src="img/userpic-elvira.jpg" alt="Аватар пользователя" width="60" height="60" />
                                </div>
                                <div className="post__info">
                                <b className="post__author-name">Эльвира Хайпулинова</b>
                                <span className="post__time">15 минут назад</span>
                                </div>
                            </a>
                            </header>
                            <div className="post__main">
                            <h2><a href="#">Наконец, обработала фотки!</a></h2>
                            <div className="post-photo__image-wrapper">
                                <img src="img/rock.jpg" alt="Фото от пользователя" width="760" height="396" />
                            </div>
                            </div>
                            <footer className="post__footer post__indicators">
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
                                <a className="post__indicator post__indicator--comments button" href="#" title="Комментарии">
                                <svg className="post__indicator-icon" width="19" height="17">
                                    <use xlinkHref="#icon-comment"></use>
                                </svg>
                                <span>25</span>
                                <span className="visually-hidden">количество комментариев</span>
                                </a>
                                <a className="post__indicator post__indicator--repost button" href="#" title="Репост">
                                <svg className="post__indicator-icon" width="19" height="17">
                                    <use xlinkHref="#icon-repost"></use>
                                </svg>
                                <span>5</span>
                                <span className="visually-hidden">количество репостов</span>
                                </a>
                            </div>
                            </footer>
                        </article>

                        <article className="feed__post post post-text">
                            <header className="post__header post__author">
                            <a className="post__author-link" href="#" title="Автор">
                                <div className="post__avatar-wrapper">
                                <img className="post__author-avatar" src="img/userpic-tanya.jpg" alt="Аватар пользователя" />
                                </div>
                                <div className="post__info">
                                <b className="post__author-name">Таня Фирсова</b>
                                <span className="post__time">25 минут назад</span>
                                </div>
                            </a>
                            </header>
                            <div className="post__main">
                            <h2><a href="#">Полезный пост про Байкал</a></h2>
                            <p>
                                Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.
                            </p>
                            <a className="post-text__more-link" href="#">Читать далее</a>
                            </div>
                            <footer className="post__footer post__indicators">
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
                                <a className="post__indicator post__indicator--comments button" href="#" title="Комментарии">
                                <svg className="post__indicator-icon" width="19" height="17">
                                    <use xlinkHref="#icon-comment"></use>
                                </svg>
                                <span>25</span>
                                <span className="visually-hidden">количество комментариев</span>
                                </a>
                                <a className="post__indicator post__indicator--repost button" href="#" title="Репост">
                                <svg className="post__indicator-icon" width="19" height="17">
                                    <use xlinkHref="#icon-repost"></use>
                                </svg>
                                <span>5</span>
                                <span className="visually-hidden">количество репостов</span>
                                </a>
                            </div>
                            </footer>
                        </article>

                        <article className="feed__post post post-video">
                            <header className="post__header post__author">
                            <a className="post__author-link" href="#" title="Автор">
                                <div className="post__avatar-wrapper">
                                <img className="post__author-avatar" src="img/userpic-petro.jpg" alt="Аватар пользователя" />
                                </div>
                                <div className="post__info">
                                <b className="post__author-name">Петр Демин</b>
                                <span className="post__time">5 часов назад</span>
                                </div>
                            </a>
                            </header>
                            <div className="post__main">
                            <div className="post-video__block">
                                <div className="post-video__preview">
                                <img src="img/coast.jpg" alt="Превью к видео" width="760" height="396" />
                                </div>
                                <div className="post-video__control">
                                <button className="post-video__play post-video__play--paused button button--video" type="button"><span className="visually-hidden">Запустить видео</span></button>
                                <div className="post-video__scale-wrapper">
                                    <div className="post-video__scale">
                                    <div className="post-video__bar">
                                        <div className="post-video__toggle"></div>
                                    </div>
                                    </div>
                                </div>
                                <button className="post-video__fullscreen post-video__fullscreen--inactive button button--video" type="button"><span className="visually-hidden">Полноэкранный режим</span></button>
                                </div>
                                <button className="post-video__play-big button" type="button">
                                <svg className="post-video__play-big-icon" width="27" height="28">
                                    <use xlinkHref="#icon-video-play-big"></use>
                                </svg>
                                <span className="visually-hidden">Запустить проигрыватель</span>
                                </button>
                            </div>
                            </div>
                            <footer className="post__footer post__indicators">
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
                                <a className="post__indicator post__indicator--comments button" href="#" title="Комментарии">
                                <svg className="post__indicator-icon" width="19" height="17">
                                    <use xlinkHref="#icon-comment"></use>
                                </svg>
                                <span>25</span>
                                <span className="visually-hidden">количество комментариев</span>
                                </a>
                                <a className="post__indicator post__indicator--repost button" href="#" title="Репост">
                                <svg className="post__indicator-icon" width="19" height="17">
                                    <use xlinkHref="#icon-repost"></use>
                                </svg>
                                <span>5</span>
                                <span className="visually-hidden">количество репостов</span>
                                </a>
                            </div>
                            </footer>
                        </article>

                        <article className="feed__post post post-quote">
                            <header className="post__header post__author">
                            <a className="post__author-link" href="#" title="Автор">
                                <div className="post__avatar-wrapper">
                                <img className="post__author-avatar" src="img/userpic-mark.jpg" alt="Аватар пользователя" />
                                </div>
                                <div className="post__info">
                                <b className="post__author-name">Марк Смолов</b>
                                <span className="post__time">2 дня назад</span>
                                </div>
                            </a>
                            </header>
                            <div className="post__main">
                            <blockquote>
                                <p>
                                Тысячи людей живут без любви, но никто — без воды.
                                </p>
                                <cite>Xью Оден</cite>
                            </blockquote>
                            </div>
                            <footer className="post__footer post__indicators">
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
                                <a className="post__indicator post__indicator--comments button" href="#" title="Комментарии">
                                <svg className="post__indicator-icon" width="19" height="17">
                                    <use xlinkHref="#icon-comment"></use>
                                </svg>
                                <span>25</span>
                                <span className="visually-hidden">количество комментариев</span>
                                </a>
                                <a className="post__indicator post__indicator--repost button" href="#" title="Репост">
                                <svg className="post__indicator-icon" width="19" height="17">
                                    <use xlinkHref="#icon-repost"></use>
                                </svg>
                                <span>5</span>
                                <span className="visually-hidden">количество репостов</span>
                                </a>
                            </div>
                            </footer>
                        </article>

                        <article className="feed__post post post-link">
                            <header className="post__header post__author">
                            <a className="post__author-link" href="#" title="Автор">
                                <div className="post__avatar-wrapper">
                                <img className="post__author-avatar" src="img/userpic-larisa.jpg" alt="Аватар пользователя" />
                                </div>
                                <div className="post__info">
                                <b className="post__author-name">Лариса Роговая</b>
                                <span className="post__time">Месяц назад</span>
                                </div>
                            </a>
                            </header>
                            <div className="post__main">
                            <div className="post-link__wrapper">
                                <a className="post-link__external" href="http://www.vitadental.ru" title="Перейти по ссылке">
                                <div className="post-link__icon-wrapper">
                                    <img src="img/logo-vita.jpg" alt="Иконка" />
                                </div>
                                <div className="post-link__info">
                                    <h3>Стоматология «Вита»</h3>
                                    <span>www.vitadental.ru</span>
                                </div>
                                <svg className="post-link__arrow" width="11" height="16">
                                    <use xlinkHref="#icon-arrow-right-ad"></use>
                                </svg>
                                </a>
                            </div>
                            </div>
                            <footer className="post__footer post__indicators">
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
                                <a className="post__indicator post__indicator--comments button" href="#" title="Комментарии">
                                <svg className="post__indicator-icon" width="19" height="17">
                                    <use xlinkHref="#icon-comment"></use>
                                </svg>
                                <span>25</span>
                                <span className="visually-hidden">количество комментариев</span>
                                </a>
                                <a className="post__indicator post__indicator--repost button" href="#" title="Репост">
                                <svg className="post__indicator-icon" width="19" height="17">
                                    <use xlinkHref="#icon-repost"></use>
                                </svg>
                                <span>5</span>
                                <span className="visually-hidden">количество репостов</span>
                                </a>
                            </div>
                            </footer>
                        </article>
                        </div>
                    </div>
                    <ul className="feed__filters filters">
                        <li className="feed__filters-item filters__item">
                        <a className="filters__button filters__button--active" href="#">
                            <span>Все</span>
                        </a>
                        </li>
                        <li className="feed__filters-item filters__item">
                        <a className="filters__button filters__button--photo button" href="#">
                            <span className="visually-hidden">Фото</span>
                            <svg className="filters__icon" width="22" height="18">
                            <use xlinkHref="#icon-filter-photo"></use>
                            </svg>
                        </a>
                        </li>
                        <li className="feed__filters-item filters__item">
                        <a className="filters__button filters__button--video button" href="#">
                            <span className="visually-hidden">Видео</span>
                            <svg className="filters__icon" width="24" height="16">
                            <use xlinkHref="#icon-filter-video"></use>
                            </svg>
                        </a>
                        </li>
                        <li className="feed__filters-item filters__item">
                        <a className="filters__button filters__button--text button" href="#">
                            <span className="visually-hidden">Текст</span>
                            <svg className="filters__icon" width="20" height="21">
                            <use xlinkHref="#icon-filter-text"></use>
                            </svg>
                        </a>
                        </li>
                        <li className="feed__filters-item filters__item">
                        <a className="filters__button filters__button--quote button" href="#">
                            <span className="visually-hidden">Цитата</span>
                            <svg className="filters__icon" width="21" height="20">
                            <use xlinkHref="#icon-filter-quote"></use>
                            </svg>
                        </a>
                        </li>
                        <li className="feed__filters-item filters__item">
                        <a className="filters__button filters__button--link button" href="#">
                            <span className="visually-hidden">Ссылка</span>
                            <svg className="filters__icon" width="21" height="18">
                            <use xlinkHref="#icon-filter-link"></use>
                            </svg>
                        </a>
                        </li>
                    </ul>
                    </section>
                    <aside className="promo">
                    <article className="promo__block promo__block--barbershop">
                        <h2 className="visually-hidden">Рекламный блок</h2>
                        <p className="promo__text">
                        Все еще сидишь на окладе в офисе? Открой свой барбершоп по нашей франшизе!
                        </p>
                        <a className="promo__link" href="#">
                        Подробнее
                        </a>
                    </article>
                    <article className="promo__block promo__block--technomart">
                        <h2 className="visually-hidden">Рекламный блок</h2>
                        <p className="promo__text">
                        Товары будущего уже сегодня в онлайн-сторе Техномарт!
                        </p>
                        <a className="promo__link" href="#">
                        Перейти в магазин
                        </a>
                    </article>
                    <article className="promo__block">
                        <h2 className="visually-hidden">Рекламный блок</h2>
                        <p className="promo__text">
                        Здесь<br></br> могла быть<br></br> ваша реклама
                        </p>
                        <a className="promo__link" href="#">
                        Разместить
                        </a>
                    </article>
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default FeedPage;