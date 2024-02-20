function QuoteOfDay(): JSX.Element {
    return (
        <article className="promo__block promo__block--technomart">
            <h2 className="promo__title-quote">Цитата дня</h2>
            <i className="fas fa-quote-left"></i>
            <p className="promo__text">
            Товары будущего уже сегодня в онлайн-сторе Техномарт!
            </p>
            <i className="fas fa-quote-right"></i>
            <a className="promo__link" href="#">
            Перейти в магазин
            </a>
        </article>
    );
}

export default QuoteOfDay;