import alt from '../alt';

import Actions from '../actions/ForecastActions';
import Source from '../sources/ForecastSource';

class ForecastStore {
  constructor() {
    this.state = {
      cityForecast: null,
      error: false,
    };

    this.bindActions(Actions);
  }

  fail() {
    this.setState({
      cityForecast: null,
      error: true,
    });
  }

  onGetCityForecast(setting) {
    Source.getCityForecast(setting)
      .then((result) => {
        if (!result || !result.ok) {
          this.fail();
          throw new Error('Couldn\'t fetch Weather data');
        }
        return result;
      })
      .then(result => result.json())
      .then((result) => {
        this.setState({
          cityForecast: result,
          error: false,
        });
      });
  }
}

export default alt.createStore(ForecastStore, 'ForecastStore');
