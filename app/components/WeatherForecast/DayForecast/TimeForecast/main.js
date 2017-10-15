import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './main.scss';

const cx = classNames.bind(styles);

class TimeForecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { data, units } = this.props;
    const { open } = this.state;

    const { main } = data;
    const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const time = `${new Date(data.dt_txt).getHours()}:00`;
    let unitSymbol;

    switch (units) {
      case 'imperial':
        unitSymbol = 'F';
        break;
      case 'metric':
        unitSymbol = 'C';
        break;
      default:
        unitSymbol = 'K';
    }

    return (
      <div className={cx('time-forecast', { open })}>
        <div className={styles['time-forecast--header']} onClick={this.onToggle} role="button" onKeyPress={this.onToggle} tabIndex={0}>
          <p className={styles.time}>{time}</p>
          <div className={styles.weather}>
            <img src={icon} alt={data.weather[0].description} />
            <p>{data.weather[0].main}</p>
          </div>
          <p className={styles.toogle}>{open ? '-' : '+'}</p>
        </div>
        { open && (
          <div className={styles['time-forecast--body']}>
            <div className={styles.column}>
              <p>temp: {main.temp}°{unitSymbol}</p>
              <p>min: {main.temp_min}°{unitSymbol}</p>
              <p>pres: {main.pressure} hPa</p>
              <p>gl: {main.grnd_level} hPa</p>
            </div>
            <div className={styles.column}>
              <p>{data.weather[0].description}</p>
              <p>max: {main.temp_max}°{unitSymbol}</p>
              <p>sl: {main.sea_level} hPa</p>
              <p>rh: {main.humidity}%</p>
            </div>
          </div>)
        }
      </div>
    );
  }
}

TimeForecast.defaultProps = {
  units: null,
};

TimeForecast.propTypes = {
  data: PropTypes.shape().isRequired,
  units: PropTypes.string,
};

export default TimeForecast;
