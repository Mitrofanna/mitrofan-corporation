import { TFilter } from "./types/filters-type";
import { TQuote } from "./types/quote-type";

export enum AppRoute {
    Root = '/',
    Registration = '/registration',
    Feed = '/feed',
    Profile = '/profile',
    Messages = '/messages',
    Popular = '/popular'
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

export const quotes: TQuote[] = [
    {
        quote: "Ты смотришь в зеркало и видишь, на ком лежит ответственность. В чем главная проблема этого мира? В том, что никто не хочет брать ответственность на себя",
        autor: "Стивен Чбоски «Воображаемый друг»",
        image: "11.jpg"
    },
    {
        quote: "Моя любовь к разработке выглядит именно так!",
        autor: "от разработчиков Go Chat",
        image: "13.jpg"
    },
    {
        quote: "Жизнь надо принимать такой, какой она тебе достается, – но уж от этого стараться взять все самое лучшее.",
        autor: "Янн Мартел, «Жизнь Пи»",
        image: "12.jpg"
    },
    {
        quote: "Каждый человек на земле, чем бы он ни занимался, играет главную роль в истории мира. И обычно даже не знает об этом.",
        autor: "Пауло Коэльо, «Алхимик»",
        image: "14.jpg"
    },
    {
        quote: "Ведь мы – то, что мы думаем. Наши эмоции – рабы наших мыслей, а мы в свою очередь рабы эмоций.",
        autor: "Элизабет Гилберт, «Есть, молиться, любить»",
        image: "15.jpg"
    },
    {
        quote: "Никакой жизни не хватит, чтобы понять, до какой степени всем на всех наплевать.",
        autor: "Эрве Ле Теллье, «Аномалия»",
        image: "16.jpg"
    },
    {
        quote: "В реальном мире зачастую наверх пробиваются не умные, а отважные. ",
        autor: "Роберт Кийосаки, «Богатый папа, бедный папа»",
        image: "17.jpg"
    },
    {
        quote: "Всегда и во всем надо найти положительные моменты – даже в самом отрицательном.",
        autor: "Джордан Белфорт, «Волк с Уолл-стрит»",
        image: "18.jpg"
    },
    {
        quote: "Когда человеку семнадцать, он знает все. Если ему двадцать семь и он по-прежнему знает все - значит, ему все еще семнадцать.",
        autor: "Рэй Бредбери, «Вино из одуванчиков»",
        image: "19.jpg"
    },
    {
        quote: "Умереть можно и в компании телевизора. Лишь бы там было что посмотреть сегодня вечером",
        autor: "Чак Паланик «Бойцовский клуб»",
        image: "20.jpg"
    }
]