# CrowdBoard
A crowd-powered platform for pinning one's favorite places

The app's intended use was to search a term, ping Google's Places API, and generate a list of components on the right-hand side of the page corresponding to the search query.

Clicking the results would center the map on the pins generated. The bottom bar was intended to enter a short description (50 characters) and pin the location with a different indicator.There was no server-side code included in my application, so these pins would be impermanent.

Unfortunately, about halfway through the project I realized that I had a CORS error with Google's Places API, and was unable to retrieve any data despite trying to implement their own client-side API. The problem is React-specific, making it difficult to research. I am intent on finding a solution, however, and am going to research the problem in my free time.

I do not have enough time currently to continue, though I wrote enough code to give any reviewer a good idea of what I intended to do and a couple of the components I intended to generate. I am confident that I could complete this project given more time, and writing the project in vanilla JS would have been far more straightforward considering that third party libraries like React are unsupported (hindsight is 20/20!).

## Major Technologies Used ##

* ES6
* React
* Sass
* Express
* Node.js

## Node Packages Utilized ##

* React-google-maps
* node-sass
* lodash
* axios

## Build System ##

* Webpack
* Babel
* CSS-loader
* Style-loader

## Future Technologies to Employ ##

* SQL for simple storage of pin locations and descriptions
* ESLint for linting React Components
* Jest for testing React Components
