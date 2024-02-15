import Footer from "../components/footer";
import Header from "../components/header";
import Post from "../components/post";
import { posts } from "../mocks/post-mocks";

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
                            {posts.map((post) => <Post post={post}/>)}
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