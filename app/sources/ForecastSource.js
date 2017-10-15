import 'whatwg-fetch';

import Config from '../../config.json';

const ForecastSource = {

  getCityForecast: ({ cityId, units }) => {
    const checkUnits = units && `&units=${units}`;
    const SERVICE_URL = `http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${Config.openWeatherMap.key}${checkUnits}&lang=${Config.openWeatherMap.lang}`;
    return fetch(SERVICE_URL);
  },
};

export default ForecastSource;
