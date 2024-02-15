import { TFilter } from "./types/filters-type";

export enum AppRoute {
    Root = '/',
    Registration = '/registration',
    Feed = '/feed'
};

export const filters: TFilter[] = [
    {
        "id": 1,
        "type": "text",
        "name": "Текст"
    },
    {
        "id": 2,
        "type": "quote",
        "name": "Цитата"
    },
    {
        "id": 3,
        "type": "photo",
        "name": "Фото"
    },
    {
        "id": 4,
        "type": "video",
        "name": "Видео"
    },
    {
        "id": 5,
        "type": "link",
        "name": "Ссылка"
    }
];