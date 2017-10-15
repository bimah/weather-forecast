import React from 'react';
import PropTypes from 'prop-types';
import DayForecast from './DayForecast/main';

import ForecastStore from '../../stores/ForecastStore';
import ForecastActions from '../../actions/ForecastActions';

import styles from './main.scss';

class WeatherForecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: null,
      daySelected: 0,
      error: false,
    };

    this.onDaySelect = this.onDaySelect.bind(this);
    this.onForecastStoreChange = this.onForecastStoreChange.bind(this);
  }

  componentDidMount() {
    const { cityId, units } = this.props;
    ForecastStore.listen(this.onForecastStoreChange);
    ForecastActions.getCityForecast({ cityId, units });
  }

  componentWillUnmount() {
    ForecastStore.unlisten(this.onForecastStoreChange);
  }

  onForecastStoreChange({ cityForecast, error }) {
    this.setState({
      weatherData: cityForecast,
      error,
    });
  }

  onDaySelect(selected) {
    this.setState({
      daySelected: selected,
    });
  }

  getDailyForecast() {
    const { weatherData } = this.state;
    const numberOfDays = 5;
    const today = new Date();
    const todayDay = today.getDay();

    const dailyForecast = [];
    for (let i = 0; i < numberOfDays; i += 1) {
      const filteredData = weatherData.list.filter(timeForecast =>
        new Date(timeForecast.dt_txt).getDay() === todayDay + i);
      dailyForecast.push({
        forecastDate: filteredData[0].dt_txt,
        data: filteredData,
      });
    }
    return dailyForecast;
  }

  render() {
    const { weatherData, daySelected, error } = this.state;
    const { units } = this.props;

    if (error) return <div className={styles.error}><p>An error accoured</p></div>;

    return weatherData ? (
      <div className={styles.weather}>
        <h1>{weatherData.city.name}, {weatherData.city.country} - 5 days weather forecast</h1>
        <div className={styles['weather--container']}>{
          this.getDailyForecast().map((forecast, i) =>
            (<DayForecast
              key={forecast.forecastDate}
              index={i}
              selected={i === daySelected}
              forecast={forecast}
              onSelect={this.onDaySelect}
              units={units}
            />))
        }
        </div>
      </div>
    ) : <div className={styles.loading}><p>Loading...</p></div>;
  }
}
WeatherForecast.defaultProps = {
  units: null,
};

WeatherForecast.propTypes = {
  cityId: PropTypes.string.isRequired,
  units: PropTypes.string,
};

export default WeatherForecast;
