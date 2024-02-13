function Footer(): JSX.Element {
    return (
        <footer className="footer footer--main">
            <div className="footer__wrapper">
                <div className="footer__container container">
                <div className="footer__site-info">
                    <div className="footer__site-nav">
                    <ul className="footer__info-pages">
                        <li className="footer__info-page">
                            <a className="footer__page-link" href="#">О проекте</a>
                        </li>
                        <li className="footer__info-page">
                            <a className="footer__page-link" href="#">Реклама</a>
                        </li>
                        <li className="footer__info-page">
                            <a className="footer__page-link" href="#">О разработчиках</a>
                        </li>
                        <li className="footer__info-page">
                            <a className="footer__page-link" href="#">Работа у нас</a>
                        </li>
                        <li className="footer__info-page">
                            <a className="footer__page-link" href="#">Соглашение пользователя</a>
                        </li>
                        <li className="footer__info-page">
                            <a className="footer__page-link" href="#">Политика конфиденциальности</a>
                        </li>
                    </ul>
                    </div>
                    <p className="footer__license">
                    При использовании любых материалов с сайта обязательно указывайте блог в качестве источника. Все авторские и исключительные права в рамках проекта защищены.
                    </p>
                </div>
                <div className="footer__my-info">
                    <ul className="footer__my-pages">
                        <li className="footer__my-page footer__my-page--feed">
                            <a className="footer__page-link" href="feed.html">Моя лента</a>
                        </li>
                        <li className="footer__my-page footer__my-page--popular">
                            <a className="footer__page-link" href="popular.html">Популярный контент</a>
                        </li>
                        <li className="footer__my-page footer__my-page--messages">
                            <a className="footer__page-link" href="messages.html">Личные сообщения</a>
                        </li>
                    </ul>
                    <div className="footer__copyright">
                    <a className="footer__copyright-link" href="#">
                        <span>Разработано Mitrofan corporation</span>
                        <svg className="footer__copyright-logo" width="27" height="34">
                            <use xlinkHref="#icon-heart"></use>
                        </svg>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;