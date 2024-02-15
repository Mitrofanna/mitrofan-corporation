import { TPost } from "../types/post-type";

type CreatePost = {
    post: TPost;
}

function PostQuote({post} : CreatePost) {
    return (
        <div className="post__main">
            <blockquote>
                <p>{post.content}</p>
                <cite>{post.cite}</cite>
            </blockquote>
        </div>
    );
}

export default PostQuote;