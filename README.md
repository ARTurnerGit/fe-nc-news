# NC NEWS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is a front end web app designed to let the user navigate through news articles and their associated comments.

The user is able to browse by topic, add comments and delete their own comments. In this build the user is hardcoded as the user "jessjelly".

[The app is hosted at netlify](https://art-fe-nc-news.netlify.app/)

## Running the project locally

The minimum version of node required to run this project is v13.

In order to run the project locally, first fork or clone the following repository from Github: [fe-nc-news](https://github.com/ARTurnerGit/fe-nc-news.git)

```bash
git clone https://github.com/ARTurnerGit/fe-nc-news.git
```

Once you have done that use the following command to run the app in development mode.

```bash
cd fe-nc-news
npm start
```

[All requests from the app are dealt with by a back end api on heroku](https://art-news-server.herokuapp.com/api). The repository for this api can be seen on Github: [be-nc-news](https://github.com/ARTurnerGit/be-nc-news.git)

For further details on using react please see the next section.

## Using React

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
