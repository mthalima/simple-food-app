import React, {Fragment} from 'react';
import headerImage from '../../assets/headerImg.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
      <Fragment>
          <header className={classes.header}>
              <h1>FoodAPP</h1>
              <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>  
          </header>
          <div className={classes['main-image']}>
              <img src={headerImage} alt='header food background'></img>
          </div>
    </Fragment>
  )
}

export default Header;