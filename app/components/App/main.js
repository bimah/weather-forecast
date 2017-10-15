import React from 'react';
import './main.scss';

import WeatherForecast from '../WeatherForecast/main';

// cityId 2643743 is London

const App = () => (
  <WeatherForecast cityId="2643743" units="metric" />
);

export default App;
