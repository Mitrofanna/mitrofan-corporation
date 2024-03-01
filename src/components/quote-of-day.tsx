import "../styles/quote.css";
import { quotes } from "../const";
import { TQuote } from "../types/quote-type";

type TQuoteOfDay = {
    quote: TQuote
}

function QuoteOfDay({quote}: TQuote): JSX.Element {
    return (
        <article className="quote promo__block">
            <img className="quote__image" src={}></img>
            <h2 className="quote__title promo__title-quote">Цитата дня</h2>
            <blockquote className="quote__content">
                <p className="quote__text">
                Свобода ничего не стоит, если она не включает в себя свободу ошибаться.
                </p>
                <cite>Махатма Ганди</cite>
            </blockquote>
        </article>
    );
}

export default QuoteOfDay;