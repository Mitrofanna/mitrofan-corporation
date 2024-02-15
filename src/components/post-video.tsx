import { TPost } from "../types/post-type";

type CreatePost = {
    post: TPost;
}

function PostVideo({post} : CreatePost) {
    return (
        <div className="post__main">
            <div className="post-video__block">
                <div className="post-video__preview">
                    <img src={post.content} alt="Превью к видео" width="760" height="396" />
                </div>
                <div className="post-video__control">
                    <button className="post-video__play post-video__play--paused button button--video" type="button"><span className="visually-hidden">Запустить видео</span></button>
                    <div className="post-video__scale-wrapper">
                        <div className="post-video__scale">
                            <div className="post-video__bar">
                                <div className="post-video__toggle"></div>
                            </div>
                        </div>
                    </div>
                    <button className="post-video__fullscreen post-video__fullscreen--inactive button button--video" type="button"><span className="visually-hidden">Полноэкранный режим</span></button>
                </div>
                <button className="post-video__play-big button" type="button">
                    <svg className="post-video__play-big-icon" width="27" height="28">
                        <use xlinkHref="#icon-video-play-big"></use>
                    </svg>
                    <span className="visually-hidden">Запустить проигрыватель</span>
                </button>
            </div>
        </div>
    );
}

export default PostVideo;