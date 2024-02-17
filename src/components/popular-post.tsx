import { TPost } from "../types/post-type";
import PopularPostLink from "./popular-post-link";
import PopularPostPhoto from "./popular-post-photo";
import PopularPostQuote from "./popular-post-quote";
import PopularPostText from "./popular-post-text";
import PopularPostVideo from "./popular-post-video";

type CreatePopularPost = {
    post: TPost;
}

function PopularPost({post}: CreatePopularPost): JSX.Element {
    let content;
    let addClass = '';

    if(post.type === 1) {
        content = (<PopularPostText post={post}/>);
        addClass = "post-text";
    } if (post.type === 2) {
        content = (<PopularPostQuote post={post}/>);
        addClass = "post-quote";
    } if(post.type === 3) {
        content = (<PopularPostPhoto post={post} />);
        addClass = "post-photo";
    } if (post.type === 4) {
        content = (<PopularPostVideo post={post}/>);
        addClass = "post-video";
    } if (post.type === 5) {
        content = (<PopularPostLink post={post}/>);
        addClass = "post-link"; 
    }

    return (
        <article className={"popular__post post " + addClass}>
            <header className="post__header">
            <h2>
                <a href="#">{post.title}</a>
            </h2>
            </header>
            <div className="post__main">
                {content}
            </div>
            <footer className="post__footer">
            <div className="post__author">
                <a className="post__author-link" href="#" title="Автор">
                <div className="post__avatar-wrapper">
                    <img
                    className="post__author-avatar"
                    src={post.author.image}
                    alt="Аватар пользователя"
                    />
                </div>
                <div className="post__info">
                    <b className="post__author-name">{post.author.name}</b>
                    <time className="post__time" dateTime={post.created_at}>
                    {post.created_at}
                    </time>
                </div>
                </a>
            </div>
            <div className="post__indicators">
                <div className="post__buttons">
                <a className="post__indicator post__indicator--likes button" href="#" title="Лайк">
                    <svg className="post__indicator-icon" width={20} height={17}>
                        <use xlinkHref="#icon-heart" />
                    </svg>
                    <svg className="post__indicator-icon post__indicator-icon--like-active" width={20} height={17}>
                        <use xlinkHref="#icon-heart-active" />
                    </svg>
                    <span>{post.likes}</span>
                    <span className="visually-hidden">количество лайков</span>
                </a>
                <a className="post__indicator post__indicator--comments button" href="#" title="Комментарии">
                    <svg className="post__indicator-icon" width={19} height={17}>
                        <use xlinkHref="#icon-comment" />
                    </svg>
                    <span>{post.comments}</span>
                    <span className="visually-hidden">Количество комментариев.</span>
                </a>
                </div>
            </div>
            </footer>
        </article>
    );
}

export default PopularPost;