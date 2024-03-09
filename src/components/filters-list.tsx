import { filters } from "../const";

function FiltersList(): JSX.Element {
    return (
        <ul className="feed__filters filters">
        <li className="feed__filters-item filters__item">
            <a className="filters__button filters__button--active" href="#">
                <span>Все</span>
            </a>
        </li>
        {filters.map((filter) => (
            <li key={filter.id} className="feed__filters-item filters__item">
            <a className={`filters__button filters__button--${filter.type} button`} href="#">
                <span className="visually-hidden">{filter.name}</span>
                <svg className="filters__icon" width="22" height="18">
                    <use xlinkHref={`#icon-filter-${filter.type}`}></use>
                </svg>
            </a>
            </li>
        ))}
    </ul>
    );
}

export default FiltersList;