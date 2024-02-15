import { TPost } from "../types/post-type";

type CreatePost = {
    post: TPost;
}

function PostLink({post} : CreatePost) {
    return (
        <div className="post__main">
            <div className="post-link__wrapper">
                <a className="post-link__external" href={post.content} title="Перейти по ссылке">
                <div className="post-link__info">
                    <h3>{post.title}</h3>
                    <span>{post.content}</span>
                </div>
                <svg className="post-link__arrow" width="11" height="16">
                    <use xlinkHref="#icon-arrow-right-ad"></use>
                </svg>
                </a>
            </div>
        </div>
    );
}

export default PostLink;