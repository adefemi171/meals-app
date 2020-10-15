// set up unique identifiers
export const FAV_TOGGLE = 'FAV_TOGGLE'
// action for filters
export const ADD_FILTERS = 'ADD_FILTER'


// function that creates an action whith extra payload
export const favToggle = (id) => {
    return(
        { type: FAV_TOGGLE, mealId: id}
    )
}
// function that creates an action whith extra payload
export const setFilters = filterSettings => {
    return(
        { type: ADD_FILTERS, filters: filterSettings}
    )
}
