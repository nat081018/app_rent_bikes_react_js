import { CityActionsType } from "./cities.type.reduser"

const INITIAL__STATE = {
    currentCity: "Moskow"
}

export const cityReduser = (state= INITIAL__STATE, action) => {
    switch (action.type) {
        case CityActionsType.FAVOURITE__CITY: 
        return {
            ...state,
            currentCity: action.payload
        }
    
        default: 
        return  state
        

    }
}