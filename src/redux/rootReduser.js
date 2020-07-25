import { combineReducers } from "redux";
import {cityReduser} from  "./citiesReduser/cities.reduser"

export default combineReducers({
    favoriteCity: cityReduser,
})

