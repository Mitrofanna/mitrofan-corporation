import { Helmet } from "react-helmet-async";

function NotFoundPage(): JSX.Element {
    return (
        <div>
            <Helmet>
                <title>страница не найдена</title>
            </Helmet>
            <h1>Страница не найдена</h1>
        </div>
    );
}

export default NotFoundPage;