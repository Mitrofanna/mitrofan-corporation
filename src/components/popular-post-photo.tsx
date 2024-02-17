import { TPost } from "../types/post-type";

type CreatePost = {
    post: TPost;
}

function PopularPostPhoto({post}: CreatePost): JSX.Element {
    return (
        <div className="post-photo__image-wrapper">
            <img
            src={post.content}
            alt="Фото от пользователя"
            width={360}
            height={240}
            />
        </div>
    );
}

export default PopularPostPhoto;