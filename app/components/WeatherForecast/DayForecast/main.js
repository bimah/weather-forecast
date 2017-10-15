import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import TimeForecast from './TimeForecast/main';

import styles from './main.scss';

const cx = classNames.bind(styles);

const DayForecast = ({
  forecast,
  selected,
  onSelect,
  index,
  units,
}) => {
  const { forecastDate, data } = forecast;
  const date = new Date(forecastDate);
  const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const onDaySelected = () => onSelect(index);

  return (
    <div className={cx('day-forecast', { selected })}>
      <div className={styles['day-forecast--action']} onClick={onDaySelected} onKeyPress={onDaySelected} role="button" tabIndex={index}>
        <p className={styles.date}>{daysArray[date.getDay()]}</p>
        <p className={styles.day}>{date.getDate()}</p>
        <p className={styles.date}>{monthsArray[date.getMonth()]} {date.getFullYear()}</p>
      </div>
      {selected && (
        <div className={styles['day-forecast--details']}>
          {data.map(timeDetail =>
            <TimeForecast key={timeDetail.dt} units={units} data={timeDetail} />)}
        </div>
      )}
    </div>
  );
};

DayForecast.defaultProps = {
  units: null,
};

DayForecast.propTypes = {
  forecast: PropTypes.shape({
    forecastDate: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
  selected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  units: PropTypes.string,
};

export default DayForecast;
