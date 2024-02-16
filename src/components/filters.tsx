import { filters } from "../const";
import classNames from "classnames";

type FiltersListProps = {
    isFeedPage: boolean;
}

function FiltersList(isFeedPage : FiltersListProps): JSX.Element {
    return (
        <ul className={classNames(
            {"popular__filters-list filters__list": !isFeedPage},
            {"feed__filters filters": isFeedPage},
            )}>
        <li className={classNames(
            {"popular__filters-item popular__filters-item--all filters__item--all": !isFeedPage},
            {"feed__filters-item": isFeedPage},
            "filters__item"
        )}>
            <a className={classNames(
                 {"filters__button--all filters__button--ellipse": !isFeedPage},
                 "filters__button filters__button--active"
            )} href="#">
                <span>Все</span>
            </a>
        </li>
        {filters.map((filter) => (
            <li key={filter.id} className={classNames(
                {"popular__filters-item": !isFeedPage},
                {"feed__filters-item": isFeedPage},
                "filters__item"
            )}>
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