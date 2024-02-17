import { TPost } from "../types/post-type";

type CreatePost = {
    post: TPost;
}

function PopularPostQuote({post}: CreatePost): JSX.Element {
    return (
        <blockquote>
            <p>{post.content}</p>
            <cite>{post.cite}</cite>
        </blockquote>
    );
}

export default PopularPostQuote;