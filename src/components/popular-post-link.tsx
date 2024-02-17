import { TPost } from "../types/post-type";

type CreatePost = {
    post: TPost;
}

function PopularPostLink({post}: CreatePost): JSX.Element {
    return (
        <div className="post-link__wrapper">
            <a
            className="post-link__external"
            href={post.content}
            title="Перейти по ссылке"
            >
            <div className="post-link__info-wrapper">
                <div className="post-link__info">
                <h3>{post.title}</h3>
                </div>
            </div>
            <span>{post.content}</span>
            </a>
        </div>
    );
}

export default PopularPostLink;