import { TPost } from "../types/post-type";

type CreatePost = {
    post: TPost
}

function Post( post : CreatePost): JSX.Element {
    return (
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
                <span>{post.post.likes}</span>
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
    );
}

export default Post;