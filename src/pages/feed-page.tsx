import Footer from "../components/footer";
import Header from "../components/header";
import Post from "../components/post";
import { filters } from "../const";
import { posts } from "../mocks/post-mocks";

function FeedPage(): JSX.Element {
    const allPosts =posts.map((post) => <Post post={post}/>);

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
                            {allPosts}
                        </div>
                    </div>
                    <ul className="feed__filters filters">
                        <li className="feed__filters-item filters__item">
                            <a className="filters__button filters__button--active" href="#">
                                <span>Все</span>
                            </a>
                        </li>
                        {filters.map((filter) => (
                            <li key={filter.id} className="feed__filters-item filters__item">
                            <a className={`filters__button filters__button--${filter.type} button`} href="#">
                                <span className="visually-hidden">{filter.name}</span>
                                <svg className="filters__icon" width="22" height="18">
                                    <use xlinkHref={`#icon-filter-${filter.type}`}></use>
                                </svg>
                            </a>
                            </li>
                        ))}
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