import { TPost } from "../types/post-type";

type CreatePost = {
    post: TPost;
}

function PopularPostText({post}: CreatePost): JSX.Element {
    return (
        <><p>{post.content}</p>
        <div className="post-text__more-link-wrapper">
            <a className="post-text__more-link" href="#">
                Читать далее
            </a>
        </div></>
    );
}

export default PopularPostText;