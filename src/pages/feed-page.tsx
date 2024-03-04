import { Helmet } from "react-helmet-async";
import FiltersList from "../components/filters-list";
import Footer from "../components/footer";
import Header from "../components/header";
import Post from "../components/post";
import { posts } from "../mocks/post-mocks";
import QuoteOfDay from "../components/quote-of-day";
import Weather from "../components/weather";
import { quotes } from "../const";
import SecretBox from "../components/secret-box";

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
                    <SecretBox />
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default FeedPage;