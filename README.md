# izitest

A mini project for my application to IZI Mobile.

## Instructions

1. Set up a GitHub repository for the project, call it izitest.
2. Initialize a React application (use redux if you’re feeling spry but it’s not required).
3. Use our endpoint which will return 10 memorials, and display the name and creation date of each memorial, sorted in order of creationDate.
  - Endpoint: https://dev.requiemapp.com/public/memorial/random
4. Create a button on the page that when pressed will switch the sorting on the list to last name of the decedent (name.last)

## Quickstart

1. npm install
2. npm start
3. Navigate to "localhost:3000".

## Tools Used

- React
  - https://facebook.github.io/react/
  - Note that the entire application is loaded as a child of the App component located in /src/components/App.js.s
- Redux
  - http://redux.js.org/
  - The actions are located in /src/actions/.
  - The reducers are located in /src/reducers/.
- Webpack
  - https://webpack.github.io/
  - Used to build the application source.
  - The configuration can be found in /webpack.config.js and is used in conjunction with /server.js to run a hot-reloading development server.
- React Router
  - https://github.com/ReactTraining/react-router
  - Used to handle routing within the single page application.
  - The routing logic is located in /src/index.js.
- Porto Web Templates
  - https://themeforest.net/item/porto-responsive-html5-template/4106987
  - Used for rapid prototyping of beautiful UI.
  - All template files are located in /styles.
  - The styles are imported through JavaScript in /src/index.js.
- Axios
  - https://github.com/mzabriskie/axios
  - Promise based HTTP client.
  - You can find the call to the REST API in /src/utils/api.js.
- Reactable
  - https://github.com/glittershark/reactable
  - Fast, flexible, and simple data tables in React.
  - The memorials are rendered in /src/components/views/Home/MemorialList.js.
