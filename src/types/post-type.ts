export type TPost = {
    "id": number,
    "parent_post_id": number | null,
    "type": number,
    "title": string,
    "content": string,
    "views": number,
    "likes": number,
    "reposts": number,
    "comments": number,
    "created_at": null,
    "updated_at": null,
    "author": {
        "id": number,
        "name": string | null,
        "image": string
    },
    original_author: null | {
        "id": number,
        "name": string | null,
        "image": string
    }
}