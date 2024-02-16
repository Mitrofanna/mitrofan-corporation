import FiltersList from "../components/filters";
import Footer from "../components/footer";
import Header from "../components/header";
import Post from "../components/post";
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
                    <FiltersList isFeedPage />
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