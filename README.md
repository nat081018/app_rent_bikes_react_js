Тестовое задание на позицию React разработчика
Описание

Используя публичные данные сети прокатов велосипедов компании CityBikes, построить приложение по выводу списка сетей, и списку станций в каждой сети.

Приложение визуально должно представлять из себя 2 колонки:
В левой колонке выводить список сетей (либо можно список городов)
В правой колонке выводить станции конкретной выбранной сети

По-умолчанию, самая первая в списке сеть должна быть выбрана в левой колонке и в правой колонке должны подгрузиться станции этой сети.

Если данные загружаются, нужно показать какой-нибудь спиннер в месте загрузки этих данных на странице.

Каждую станцию в списке можно добавить в список понравившихся. Такой список понравившихся станций должен находиться в сторе Redux. Станция, которая имеет статус "понравилась", должен иметь соответствующую метку в виде сердечка. Станцию можно убрать из списка понравившихся, кликнув на сердечко.

В верхней части страницы нужно также выводить следующую информацию:
Название выбранной сети
Общее количество станции в выбранной сети
Данные

Публичный API находится по адресу: http://api.citybik.es/v2/

К публичному серверу нужно осуществлять 2 запроса:
Запрос на получение списка сетей: https://api.citybik.es/v2/networks?fields=id,company
Запрос на получение станций сети: https://api.citybik.es/v2/networks/norisbike-nurnberg (norisbike-nurnberg → это пример id из первого запроса)
По второму запросу придёт объект выбранной сети, где будет массив станций stations

Инструменты

В качестве сборщика приложения следует использовать Webpack (можно взять любую готовую сборку)
Приложение должно быть написано на React + Redux + TypeScript.
Приложение должно быть типизировано хотя бы на 50%.
Желательна работа с логикой приложения через Redux-Saga, но подойдут и другие инструменты, созданные для таких целей в Redux.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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
