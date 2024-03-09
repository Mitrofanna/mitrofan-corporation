import { filters } from "../const";

function PopularFilterlist(): JSX.Element {
    return (
        <div className="popular__filters filters">
            <b className="popular__filters-caption filters__caption">Тип контента:</b>
            <ul className="popular__filters-list filters__list">
            <li className="popular__filters-item popular__filters-item--all filters__item filters__item--all">
                <a className="filters__button filters__button--ellipse filters__button--all filters__button--active" href="#">
                    <span>Все</span>
                </a>
            </li>
            {filters.map((filter) => (
                <li key={filter.id} className="popular__filters-item filters__item">
                <a className={`filters__button filters__button--${filter.type} button`} href="#">
                    <span className="visually-hidden">{filter.name}</span>
                    <svg className="filters__icon" width="22" height="18">
                        <use xlinkHref={`#icon-filter-${filter.type}`}></use>
                    </svg>
                </a>
                </li>
            ))}
        </ul>
    </div>
    );
}

export default PopularFilterlist;