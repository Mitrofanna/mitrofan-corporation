import "../styles/quote.css";
import { TQuote } from "../types/quote-type";
import { getRandom } from "../utils";

type TQuoteOfDay = {
    quotes: TQuote[],
}

function QuoteOfDay({quotes}: TQuoteOfDay): JSX.Element {
   const quote = getRandom(quotes);
    return (
        <article className="quote promo__block">
            <img className="quote__image" src={quote.image}></img>
            <h2 className="quote__title promo__title-quote">Цитата дня</h2>
            <blockquote className="quote__content">
                <p className="quote__text">{quote.quote}</p>
                <cite>{quote.autor}</cite>
            </blockquote>
        </article>
    );
}

export default QuoteOfDay;