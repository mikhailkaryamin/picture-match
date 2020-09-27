import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../shared/routes';

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link
            className="menu__link"
            to={AppRoute.GAME}
          >
            New game
          </Link>
        </li>
        <li className="menu__item">
          Restart
        </li>
        <li className="menu__item">
          <Link
            className="menu__link"
            to={AppRoute.HIGH_SCORE}
          >
            High score
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu;