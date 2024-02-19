import { Helmet } from "react-helmet-async";
import FiltersList from "../components/filters-list";
import Footer from "../components/footer";
import Header from "../components/header";
import PopularPost from "../components/popular-post";
import { posts } from "../mocks/post-mocks";

function PopularPage(): JSX.Element {
    return (
        <>
        <Helmet>
            <title>все посты</title>
        </Helmet>
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
                <FiltersList isFeedPage={false} />
            </div>
            </div>
            <div className="popular__posts">
            {posts.map((post) => <PopularPost post={post}/>)}
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