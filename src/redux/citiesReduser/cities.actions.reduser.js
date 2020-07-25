import {CityActionsType} from "./cities.type.reduser"


export  const favoriteCity = () => ({
    type: CityActionsType.FAVOURITE__CITY,
    payload: city,
})

 