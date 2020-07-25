import { createSelector } from 'reselect'


const selectorCity = (state) => state.city

export  const selectCity = createSelector(
    [selectorCity],
    city => city.favouriteCity
) 