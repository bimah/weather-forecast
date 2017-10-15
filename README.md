# weather-forecast
Single HTML page displaying the 5 day weather forecast
## Specifications
* Use the latest specs of HTML, CSS and ECMAScript to implement the solution. At this time, these would be HTML5, CSS3 and ES2017.
* Use the [OpenWeatherMap 5 day weather forecast API](http://openweathermap.org/forecast5) to retrieve the current 5 day weather forecast.
* Give some thought to what will make a decent user experience. We would like to see something readable but with no need to go all out on sleek and flashy UI elements.
* Use any supporting technologies, frameworks, package managers, starter kits, build systems and libraries that you are familiar with and feel are appropriate.
* Assuming a Node.js environment with the latest version installed, please ensure that there are no globally installed dependencies required to build / run your app. If you have to have them please explain why. This avoids environment issues when trying to build your solution.
* Provide a README.md file that:
   * Documents how to run / build / test your creation.
   * Documents anything you might implement with more time (features, fixes, technical debt, corrections etc.)

## Installing the application
To install the application using npm
```
npm install
```
## Running the application
To run the application locally
```
npm run start
```
## Create distribution files
To create the distribution files for deployment
```
npm run build
```
The production built hasn't been fully optimized.
## ESLint
To run eslinting
```
npm run eslint
```
## If I had more time...
* Configuration - I would like to spend a bit more time on streamlining the Webpack configuration, separate the js libraries (React, ReactDOM) from the `bundle.js`.
* Setter - Build a separate component to set the city and the units formats (standard, metric or imperial).
* Localisation - Remove hard-coded copy from the app, move it to the `config.json` and pass it through props.
* UI & Design - Spend more time to improve the functionality, transitions and usability.
* Responsiveness - Add a carousel to display the 5-days calendar accessible on mobile devices.
* Testing - Implement testing.
## Built with
* [React](https://facebook.github.io/react/) - JavaScript library.
* [Webpack](https://webpack.js.org/) - Module bundler.
* [Alt](http://alt.js.org/) - State manager.
* [Babel](https://babeljs.io/) - JavaScript compiler.
* SASS in conjunction with [CSS Modules](https://github.com/css-modules/css-modules).
* ESLint adopting [airbnb](https://www.npmjs.com/package/eslint-config-airbnb)'s config.
* CSS lint adopting [stylelint](https://github.com/stylelint/stylelint).
