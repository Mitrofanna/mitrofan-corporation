import { TPost } from "../types/post-type";

type CreatePost = {
    post: TPost;
}

function PostText({post} : CreatePost) {
    return (
       <div className="post__main">
            <h2><a href="#">{post.title}</a></h2>
            <p>{post.content}</p>
            <a className="post-text__more-link" href="#">Читать далее</a>
        </div>
    );
}

export default PostText;