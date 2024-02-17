import { TPost } from "../types/post-type";

type CreatePost = {
    post: TPost;
}

function PopularPostVideo({post}: CreatePost): JSX.Element {
    return (
        <div className="post-video__block">
        <div className="post-video__preview">
        <img
            src={post.content}
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
    );
}

export default PopularPostVideo;