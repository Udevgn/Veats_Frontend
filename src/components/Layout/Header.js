import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import SearchLocationInput from '../../SearchLocationInput.js';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <SearchLocationInput onChange={() => null} />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
