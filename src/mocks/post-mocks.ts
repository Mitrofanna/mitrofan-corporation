import { TPost } from "../types/post-type";

export const posts: TPost[] = [
    {
        "id": 1,
        "parent_post_id": 2,
        "type": 2,
        "title": "Цитата",
        "content": "Мы в жизни любим только раз, а после ищем лишь похожих",
        "views": 0,
        "likes": 3,
        "reposts": 0,
        "comments": 0,
        "created_at": null,
        "updated_at": null,
        "author": {
            "id": 1,
            "name": null,
            "image": ""
        },
        "original_author": {
            "id": 5,
            "name": null,
            "image": "\\img\\userpic-petro.jpg"
        }
    },
    {
        "id": 2,
        "parent_post_id": null,
        "type": 1,
        "title": "Игра престолов",
        "content": "Не могу дождаться начала финального сезона своего любимого сериала!",
        "views": 0,
        "likes": 0,
        "reposts": 1,
        "comments": 1,
        "created_at": null,
        "updated_at": null,
        "author": {
            "id": 2,
            "name": null,
            "image": ""
        },
        "original_author": null
    },
    {
        "id": 3,
        "parent_post_id": null,
        "type": 3,
        "title": "Наконец, обработал фотки!",
        "content": "\\img\\rock-medium.jpg",
        "views": 0,
        "likes": 0,
        "reposts": 0,
        "comments": 1,
        "created_at": null,
        "updated_at": null,
        "author": {
            "id": 3,
            "name": null,
            "image": "\\img\\userpic-larisa.jpg"
        },
        "original_author": null
    },
    {
        "id": 4,
        "parent_post_id": null,
        "type": 3,
        "title": "Моя мечта",
        "content": "\\img\\coast-medium.jpg",
        "views": 0,
        "likes": 0,
        "reposts": 0,
        "comments": 0,
        "created_at": null,
        "updated_at": null,
        "author": {
            "id": 1,
            "name": null,
            "image": ""
        },
        "original_author": null
    },
    {
        "id": 5,
        "parent_post_id": null,
        "type": 5,
        "title": "Лучшие курсы",
        "content": "www.htmlacademy.ru",
        "views": 0,
        "likes": 0,
        "reposts": 0,
        "comments": 1,
        "created_at": null,
        "updated_at": null,
        "author": {
            "id": 2,
            "name": null,
            "image": ""
        },
        "original_author": null
    }
]
    