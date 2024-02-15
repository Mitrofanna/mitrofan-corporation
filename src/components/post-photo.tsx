import { TPost } from "../types/post-type";

type CreatePost = {
    post: TPost;
}

function PostPhoto({post}: CreatePost) {
    return (
        <div className="post__main">
            <h2><a href="#">{post.title}</a></h2>
            <div className="post-photo__image-wrapper">
                <img src={post.content} alt="Фото от пользователя" width="760" height="396" />
            </div>
        </div>
    );
}

export default PostPhoto;