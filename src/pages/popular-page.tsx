import Footer from "../components/footer";
import Header from "../components/header";

function PopularPage(): JSX.Element {
    return (
        <>
        <Header />
        <section className="page__main page__main--popular">
        <div className="container">
            <h1 className="page__title page__title--popular">Популярное</h1>
        </div>
        <div className="popular container">
            <div className="popular__filters-wrapper">
            <div className="popular__sorting sorting">
                <b className="popular__sorting-caption sorting__caption">
                Сортировка:
                </b>
                <ul className="popular__sorting-list sorting__list">
                <li className="sorting__item sorting__item--popular">
                    <a className="sorting__link sorting__link--active" href="#">
                    <span>Популярность</span>
                    <svg className="sorting__icon" width={10} height={12}>
                        <use xlinkHref="#icon-sort" />
                    </svg>
                    </a>
                </li>
                <li className="sorting__item">
                    <a className="sorting__link" href="#">
                    <span>Лайки</span>
                    <svg className="sorting__icon" width={10} height={12}>
                        <use xlinkHref="#icon-sort" />
                    </svg>
                    </a>
                </li>
                <li className="sorting__item">
                    <a className="sorting__link" href="#">
                    <span>Дата</span>
                    <svg className="sorting__icon" width={10} height={12}>
                        <use xlinkHref="#icon-sort" />
                    </svg>
                    </a>
                </li>
                </ul>
            </div>
            <div className="popular__filters filters">
                <b className="popular__filters-caption filters__caption">
                Тип контента:
                </b>
                <ul className="popular__filters-list filters__list">
                <li className="popular__filters-item popular__filters-item--all filters__item filters__item--all">
                    <a
                    className="filters__button filters__button--ellipse filters__button--all filters__button--active"
                    href="#"
                    >
                    <span>Все</span>
                    </a>
                </li>
                <li className="popular__filters-item filters__item">
                    <a
                    className="filters__button filters__button--photo button"
                    href="/"
                    >
                    <span className="visually-hidden">Фото</span>
                    <svg className="filters__icon" width={22} height={18}>
                        <use xlinkHref="#icon-filter-photo" />
                    </svg>
                    </a>
                </li>
                <li className="popular__filters-item filters__item">
                    <a
                    className="filters__button filters__button--video button"
                    href="/"
                    >
                    <span className="visually-hidden">Видео</span>
                    <svg className="filters__icon" width={24} height={16}>
                        <use xlinkHref="#icon-filter-video" />
                    </svg>
                    </a>
                </li>
                <li className="popular__filters-item filters__item">
                    <a
                    className="filters__button filters__button--text button"
                    href="/"
                    >
                    <span className="visually-hidden">Текст</span>
                    <svg className="filters__icon" width={20} height={21}>
                        <use xlinkHref="#icon-filter-text" />
                    </svg>
                    </a>
                </li>
                <li className="popular__filters-item filters__item">
                    <a
                    className="filters__button filters__button--quote button"
                    href="/"
                    >
                    <span className="visually-hidden">Цитата</span>
                    <svg className="filters__icon" width={21} height={20}>
                        <use xlinkHref="#icon-filter-quote" />
                    </svg>
                    </a>
                </li>
                <li className="popular__filters-item filters__item">
                    <a
                    className="filters__button filters__button--link button"
                    href="#"
                    >
                    <span className="visually-hidden">Ссылка</span>
                    <svg className="filters__icon" width={21} height={18}>
                        <use xlinkHref="#icon-filter-link" />
                    </svg>
                    </a>
                </li>
                </ul>
            </div>
            </div>
            <div className="popular__posts">
            <article className="popular__post post post-quote">
                <header className="post__header">
                <h2>
                    <a href="#">Цитата дня</a>
                </h2>
                </header>
                <div className="post__main">
                <blockquote>
                    <p>Тысячи людей живут без любви, но никто — без воды.</p>
                    <cite>Xью Оден</cite>
                </blockquote>
                </div>
                <footer className="post__footer">
                <div className="post__author">
                    <a className="post__author-link" href="#" title="Автор">
                    <div className="post__avatar-wrapper">
                        <img
                        className="post__author-avatar"
                        src="img/userpic-larisa-small.jpg"
                        alt="Аватар пользователя"
                        />
                    </div>
                    <div className="post__info">
                        <b className="post__author-name">Лариса Роговая</b>
                        <time className="post__time" dateTime="2019-03-30">
                        Месяц назад
                        </time>
                    </div>
                    </a>
                </div>
                <div className="post__indicators">
                    <div className="post__buttons">
                    <a
                        className="post__indicator post__indicator--likes button"
                        href="#"
                        title="Лайк"
                    >
                        <svg className="post__indicator-icon" width={20} height={17}>
                        <use xlinkHref="#icon-heart" />
                        </svg>
                        <svg
                        className="post__indicator-icon post__indicator-icon--like-active"
                        width={20}
                        height={17}
                        >
                        <use xlinkHref="#icon-heart-active" />
                        </svg>
                        <span>250</span>
                        <span className="visually-hidden">количество лайков</span>
                    </a>
                    <a
                        className="post__indicator post__indicator--comments button"
                        href="#"
                        title="Комментарии"
                    >
                        <svg className="post__indicator-icon" width={19} height={17}>
                        <use xlinkHref="#icon-comment" />
                        </svg>
                        <span>25</span>
                        <span className="visually-hidden">
                        количество комментариев
                        </span>
                    </a>
                    </div>
                </div>
                </footer>
            </article>
            <article className="popular__post post ">
                <header className="post__header">
                <h2>
                    <a href="#">Полезный пост про Байкал</a>
                </h2>
                </header>
                <div className="post__main">
                <div className="post-video__block">
                    <div className="post-video__preview">
                    <img
                        src="img/coast-medium.jpg"
                        alt="Превью к видео"
                        width={360}
                        height={188}
                    />
                    </div>
                    <a
                    href="post-details.html"
                    className="post-video__play-big button"
                    >
                    <svg
                        className="post-video__play-big-icon"
                        width={14}
                        height={14}
                    >
                        <use xlinkHref="#icon-video-play-big" />
                    </svg>
                    <span className="visually-hidden">Запустить проигрыватель</span>
                    </a>
                </div>
                </div>
                <footer className="post__footer">
                <div className="post__author">
                    <a className="post__author-link" href="#" title="Автор">
                    <div className="post__avatar-wrapper">
                        <img
                        className="post__author-avatar"
                        src="img/userpic-larisa-small.jpg"
                        alt="Аватар пользователя"
                        />
                    </div>
                    <div className="post__info">
                        <b className="post__author-name">Лариса Роговая</b>
                        <time className="post__time" dateTime="2019-03-30">
                        Месяц назад
                        </time>
                    </div>
                    </a>
                </div>
                <div className="post__indicators">
                    <div className="post__buttons">
                    <a
                        className="post__indicator post__indicator--likes button"
                        href="#"
                        title="Лайк"
                    >
                        <svg className="post__indicator-icon" width={20} height={17}>
                        <use xlinkHref="#icon-heart" />
                        </svg>
                        <svg
                        className="post__indicator-icon post__indicator-icon--like-active"
                        width={20}
                        height={17}
                        >
                        <use xlinkHref="#icon-heart-active" />
                        </svg>
                        <span>250</span>
                        <span className="visually-hidden">количество лайков</span>
                    </a>
                    <a
                        className="post__indicator post__indicator--comments button"
                        href="#"
                        title="Комментарии"
                    >
                        <svg className="post__indicator-icon" width={19} height={17}>
                        <use xlinkHref="#icon-comment" />
                        </svg>
                        <span>25</span>
                        <span className="visually-hidden">
                        количество комментариев
                        </span>
                    </a>
                    </div>
                </div>
                </footer>
            </article>
            <article className="popular__post post post-text">
                <header className="post__header">
                <h2>
                    <a href="#">Полезный пост про Байкал</a>
                </h2>
                </header>
                <div className="post__main">
                <p>
                    Озеро Байкал&nbsp;– огромное древнее озеро в горах Сибири к северу
                    от монгольской границы. Байкал считается самым глубоким озером в
                    мире. Он окружен сетью пешеходных маршрутов, называемых Большой
                    байкальской тропой. Деревня Листвянка, расположенная на западном
                    берегу озера,&nbsp;– популярная отправная точка для летних
                    экскурсий. Зимой здесь можно кататься на коньках и собачьих
                    упряжках.
                </p>
                <div className="post-text__more-link-wrapper">
                    <a className="post-text__more-link" href="#">
                    Читать далее
                    </a>
                </div>
                </div>
                <footer className="post__footer">
                <div className="post__author">
                    <a className="post__author-link" href="#" title="Автор">
                    <div className="post__avatar-wrapper">
                        <img
                        className="post__author-avatar"
                        src="img/userpic-larisa-small.jpg"
                        alt="Аватар пользователя"
                        />
                    </div>
                    <div className="post__info">
                        <b className="post__author-name">Лариса Роговая</b>
                        <time className="post__time" dateTime="2019-03-30">
                        Месяц назад
                        </time>
                    </div>
                    </a>
                </div>
                <div className="post__indicators">
                    <div className="post__buttons">
                    <a
                        className="post__indicator post__indicator--likes button"
                        href="#"
                        title="Лайк"
                    >
                        <svg className="post__indicator-icon" width={20} height={17}>
                        <use xlinkHref="#icon-heart" />
                        </svg>
                        <svg
                        className="post__indicator-icon post__indicator-icon--like-active"
                        width={20}
                        height={17}
                        >
                        <use xlinkHref="#icon-heart-active" />
                        </svg>
                        <span>250</span>
                        <span className="visually-hidden">количество лайков</span>
                    </a>
                    <a
                        className="post__indicator post__indicator--comments button"
                        href="#"
                        title="Комментарии"
                    >
                        <svg className="post__indicator-icon" width={19} height={17}>
                        <use xlinkHref="#icon-comment" />
                        </svg>
                        <span>25</span>
                        <span className="visually-hidden">
                        количество комментариев
                        </span>
                    </a>
                    </div>
                </div>
                </footer>
            </article>
            <article className="popular__post post post-link">
                <header className="post__header">
                <h2>
                    <a href="#">Делюсь с вами ссылочкой</a>
                </h2>
                </header>
                <div className="post__main">
                <div className="post-link__wrapper">
                    <a
                    className="post-link__external"
                    href="http://www.vitadental.ru"
                    title="Перейти по ссылке"
                    >
                    <div className="post-link__info-wrapper">
                        <div className="post-link__icon-wrapper">
                        <img
                            src="https://www.google.com/s2/favicons?domain=vitadental.ru"
                            alt="Иконка"
                        />
                        </div>
                        <div className="post-link__info">
                        <h3>Стоматология «Вита»</h3>
                        </div>
                    </div>
                    <span>www.vitadental.ru</span>
                    </a>
                </div>
                </div>
                <footer className="post__footer">
                <div className="post__author">
                    <a className="post__author-link" href="#" title="Автор">
                    <div className="post__avatar-wrapper">
                        <img
                        className="post__author-avatar"
                        src="img/userpic-larisa-small.jpg"
                        alt="Аватар пользователя"
                        />
                    </div>
                    <div className="post__info">
                        <b className="post__author-name">Лариса Роговая</b>
                        <time className="post__time" dateTime="2019-03-30">
                        Месяц назад
                        </time>
                    </div>
                    </a>
                </div>
                <div className="post__indicators">
                    <div className="post__buttons">
                    <a
                        className="post__indicator post__indicator--likes button"
                        href="#"
                        title="Лайк"
                    >
                        <svg className="post__indicator-icon" width={20} height={17}>
                        <use xlinkHref="#icon-heart" />
                        </svg>
                        <svg
                        className="post__indicator-icon post__indicator-icon--like-active"
                        width={20}
                        height={17}
                        >
                        <use xlinkHref="#icon-heart-active" />
                        </svg>
                        <span>250</span>
                        <span className="visually-hidden">количество лайков</span>
                    </a>
                    <a
                        className="post__indicator post__indicator--comments button"
                        href="#"
                        title="Комментарии"
                    >
                        <svg className="post__indicator-icon" width={19} height={17}>
                        <use xlinkHref="#icon-comment" />
                        </svg>
                        <span>25</span>
                        <span className="visually-hidden">
                        количество комментариев
                        </span>
                    </a>
                    </div>
                </div>
                </footer>
            </article>
            <article className="popular__post post post-photo">
                <header className="post__header">
                <h2>
                    <a href="#">Наконец, обработал фотки!</a>
                </h2>
                </header>
                <div className="post__main">
                <div className="post-photo__image-wrapper">
                    <img
                    src="img/rock-medium.jpg"
                    alt="Фото от пользователя"
                    width={360}
                    height={240}
                    />
                </div>
                </div>
                <footer className="post__footer">
                <div className="post__author">
                    <a className="post__author-link" href="#" title="Автор">
                    <div className="post__avatar-wrapper">
                        <img
                        className="post__author-avatar"
                        src="img/userpic-larisa-small.jpg"
                        alt="Аватар пользователя"
                        />
                    </div>
                    <div className="post__info">
                        <b className="post__author-name">Лариса Роговая</b>
                        <time className="post__time" dateTime="2019-03-30">
                        Месяц назад
                        </time>
                    </div>
                    </a>
                </div>
                <div className="post__indicators">
                    <div className="post__buttons">
                    <a
                        className="post__indicator post__indicator--likes button"
                        href="#"
                        title="Лайк"
                    >
                        <svg className="post__indicator-icon" width={20} height={17}>
                        <use xlinkHref="#icon-heart" />
                        </svg>
                        <svg
                        className="post__indicator-icon post__indicator-icon--like-active"
                        width={20}
                        height={17}
                        >
                        <use xlinkHref="#icon-heart-active" />
                        </svg>
                        <span>250</span>
                        <span className="visually-hidden">количество лайков</span>
                    </a>
                    <a
                        className="post__indicator post__indicator--comments button"
                        href="#"
                        title="Комментарии"
                    >
                        <svg className="post__indicator-icon" width={19} height={17}>
                        <use xlinkHref="#icon-comment" />
                        </svg>
                        <span>25</span>
                        <span className="visually-hidden">
                        количество комментариев
                        </span>
                    </a>
                    </div>
                </div>
                </footer>
            </article>
            <article className="popular__post post post-quote">
                <header className="post__header">
                <h2>
                    <a href="#">Цитата дня</a>
                </h2>
                </header>
                <div className="post__main">
                <blockquote>
                    <p>Тысячи людей живут без любви, но никто — без воды.</p>
                    <cite>Xью Оден</cite>
                </blockquote>
                </div>
                <footer className="post__footer">
                <div className="post__author">
                    <a className="post__author-link" href="#" title="Автор">
                    <div className="post__avatar-wrapper">
                        <img
                        className="post__author-avatar"
                        src="img/userpic-larisa-small.jpg"
                        alt="Аватар пользователя"
                        />
                    </div>
                    <div className="post__info">
                        <b className="post__author-name">Лариса Роговая</b>
                        <time className="post__time" dateTime="2019-03-30">
                        Месяц назад
                        </time>
                    </div>
                    </a>
                </div>
                <div className="post__indicators">
                    <div className="post__buttons">
                    <a
                        className="post__indicator post__indicator--likes button"
                        href="#"
                        title="Лайк"
                    >
                        <svg className="post__indicator-icon" width={20} height={17}>
                        <use xlinkHref="#icon-heart" />
                        </svg>
                        <svg
                        className="post__indicator-icon post__indicator-icon--like-active"
                        width={20}
                        height={17}
                        >
                        <use xlinkHref="#icon-heart-active" />
                        </svg>
                        <span>250</span>
                        <span className="visually-hidden">количество лайков</span>
                    </a>
                    <a
                        className="post__indicator post__indicator--comments button"
                        href="#"
                        title="Комментарии"
                    >
                        <svg className="post__indicator-icon" width={19} height={17}>
                        <use xlinkHref="#icon-comment" />
                        </svg>
                        <span>25</span>
                        <span className="visually-hidden">
                        количество комментариев
                        </span>
                    </a>
                    </div>
                </div>
                </footer>
            </article>
            </div>
            <div className="popular__page-links">
            <a
                className="popular__page-link popular__page-link--prev button button--gray"
                href="#"
            >
                Предыдущая страница
            </a>
            <a
                className="popular__page-link popular__page-link--next button button--gray"
                href="#"
            >
                Следующая страница
            </a>
            </div>
        </div>
    </section>
    <Footer />
    </>
    );
}

export default PopularPage;