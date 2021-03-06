import React from 'react';
import Temperature from '../Temperature/Temperature';
import styles from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regHeart } from '@fortawesome/free-regular-svg-icons';

function MainTemperatureDisplay(props) {
  const { city, temp, icon } = props;
  const favorites = JSON.parse(localStorage.getItem('favorites'));
  const isFavorite = favorites.find(
    (place) => place === props.city.toLowerCase()
  );

  return (
    <div className='mainTemperatureDisplay'>

      <div className='h1AndHeart'>
        <h1 className={styles.h1}>{city}</h1>
        <button className={styles.heartButton}>
          <FontAwesomeIcon icon={isFavorite ? solidHeart : regHeart} />
        </button>
      </div>

      <h2 className={styles.h2}>
        <Temperature temp={temp} tempUnit={props.tempUnit} />
      </h2>

      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt=''
        className='icon'
      />
    </div>
  );
}

export default MainTemperatureDisplay;
