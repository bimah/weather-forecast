import alt from '../alt';

class ForecastActions {
  constructor() {
    this.generateActions('getCityForecast');
  }
}

export default alt.createActions(ForecastActions);
