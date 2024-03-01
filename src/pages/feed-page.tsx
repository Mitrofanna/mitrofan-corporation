import { Helmet } from "react-helmet-async";
import FiltersList from "../components/filters-list";
import Footer from "../components/footer";
import Header from "../components/header";
import Post from "../components/post";
import { posts } from "../mocks/post-mocks";
import QuoteOfDay from "../components/quote-of-day";
import Weather from "../components/weather";
import { quotes } from "../const";

function FeedPage(): JSX.Element {
    const allPosts =posts.map((post) => <Post post={post} key={post.id}/>);
    return (
        <div>
            <Helmet>
                <title>моя лента</title>
            </Helmet>
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
                    <Weather />
                    <QuoteOfDay quotes={quotes}/>
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