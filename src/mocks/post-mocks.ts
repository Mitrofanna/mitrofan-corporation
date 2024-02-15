import { TPost } from "../types/post-type";

export const posts: TPost[] = [
    {
        "id": 1,
        "parent_post_id": null,
        "type": 3,
        "title": "Наконец обработала фотки",
        "content": "img/rock.jpg",
        "views": 0,
        "likes": 25,
        "reposts": 0,
        "comments": 0,
        "created_at": "15 минут назад",
        "updated_at": "",
        "author": {
            "id": 1,
            "name": "Анджелина Джоли",
            "image": "img/userpic-elvira.jpg"
        },
        "original_author": null
    },
    {
        "id": 2,
        "parent_post_id": null,
        "type": 1,
        "title": "Полезный пост про Байкал",
        "content": "Озеро Байкал – огромное древнее озеро в горах Сибири к северу от монгольской границы. Байкал считается самым глубоким озером в мире. Он окружен сетью пешеходных маршрутов, называемых Большой байкальской тропой. Деревня Листвянка, расположенная на западном берегу озера, – популярная отправная точка для летних экскурсий. Зимой здесь можно кататься на коньках и собачьих упряжках.",
        "views": 0,
        "likes": 45,
        "reposts": 1,
        "comments": 1,
        "created_at": "25 минут назад",
        "updated_at": "",
        "author": {
            "id": 2,
            "name": "Таня Фирсова",
            "image": "img/userpic-tanya.jpg"
        },
        "original_author": null
    },
    {
        "id": 3,
        "parent_post_id": null,
        "type": 4,
        "title": "Наконец, обработал фотки!",
        "content": "img/coast.jpg",
        "views": 0,
        "likes": 0,
        "reposts": 0,
        "comments": 1,
        "created_at": "5 часов назад",
        "updated_at": "",
        "author": {
            "id": 3,
            "name": "Петр Демин",
            "image": "img/userpic-petro.jpg"
        },
        "original_author": null
    },
    {
        "id": 4,
        "parent_post_id": null,
        "type": 2,
        "title": "",
        "content": "Тысячи людей живут без любви, но никто — без воды.",
        "cite": "Хью Оден",
        "views": 0,
        "likes": 0,
        "reposts": 0,
        "comments": 0,
        "created_at": "2 дня назад",
        "updated_at": "",
        "author": {
            "id": 4,
            "name": "Марк Смолов",
            "image": "img/userpic-mark.jpg"
        },
        "original_author": null
    },
    {
        "id": 5,
        "parent_post_id": null,
        "type": 5,
        "title": "Стоматология Вита",
        "content": "www.vitadental.ru",
        "views": 0,
        "likes": 0,
        "reposts": 0,
        "comments": 1,
        "created_at": "месяц назад",
        "updated_at": "",
        "author": {
            "id": 5,
            "name": "Виктория Умнова",
            "image": "img/userpic-larisa.jpg"
        },
        "original_author": null
    }
]
    