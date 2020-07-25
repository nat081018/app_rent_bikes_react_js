import  { applyMiddleware, createStore }  from "redux";
import logger from "redux-logger"
import rootReduser from "./rootReduser.js"

const middlewares = [logger]

const store = createStore(rootReduser,  applyMiddleware(...middlewares))

export default store 