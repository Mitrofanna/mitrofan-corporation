import { TPost } from "../types/post-type";
import PostLink from "./post-link";
import PostPhoto from "./post-photo";
import PostQuote from "./post-quote";
import PostText from "./post-text";
import PostVideo from "./post-video";

type CreatePost = {
    post: TPost;
}

function Post({post}: CreatePost): JSX.Element {
    let content;
    let addClass = '';

    if(post.type === 1) {
        content = (<PostText post={post}/>);
        addClass = "post-text";
    } if (post.type === 2) {
        content = (<PostQuote post={post}/>);
        addClass = "post-quote";
    } if(post.type === 3) {
        content = (<PostPhoto post={post} />);
        addClass = "post-photo";
    } if (post.type === 4) {
        content = (<PostVideo post={post}/>);
        addClass = "post-video";
    } if (post.type === 5) {
        content = (<PostLink post={post}/>);
        addClass = "post-link"; 
    }

    return (
        <article className={"feed__post post " + addClass}>
            <header className="post__header post__author">
                <a className="post__author-link" href="#" title="Автор">
                    <div className="post__avatar-wrapper">
                        <img className="post__author-avatar" src={post.author.image} alt="Аватар пользователя" width="60" height="60" />
                    </div>
                    <div className="post__info">
                        <b className="post__author-name">{post.author.name}</b>
                        <span className="post__time">{post.created_at}</span>
                    </div>
                </a>
            </header>
            {content}
            <footer className="post__footer post__indicators">
            <div className="post__buttons">
                <a className="post__indicator post__indicator--likes button" href="#" title="Лайк">
                <svg className="post__indicator-icon" width="20" height="17">
                    <use xlinkHref="#icon-heart"></use>
                </svg>
                <svg className="post__indicator-icon post__indicator-icon--like-active" width="20" height="17">
                    <use xlinkHref="#icon-heart-active"></use>
                </svg>
                <span>{post.likes}</span>
                <span className="visually-hidden">количество лайков</span>
                </a>
                <a className="post__indicator post__indicator--comments button" href="#" title="Комментарии">
                <svg className="post__indicator-icon" width="19" height="17">
                    <use xlinkHref="#icon-comment"></use>
                </svg>
                <span>{post.comments}</span>
                <span className="visually-hidden">количество комментариев</span>
                </a>
                <a className="post__indicator post__indicator--repost button" href="#" title="Репост">
                <svg className="post__indicator-icon" width="19" height="17">
                    <use xlinkHref="#icon-repost"></use>
                </svg>
                <span>{post.comments}</span>
                <span className="visually-hidden">количество репостов</span>
                </a>
            </div>
            </footer>
        </article>
    );
}

export default Post;