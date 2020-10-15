// file to manage meal reducer updating logic
// manage filters and favorites
import { MEALS } from '../../data/dummy-data'
import { ADD_FILTERS, FAV_TOGGLE } from '../actions/mealsAction'
// an initial state function which is
// used initially when the app launches
// and in it store list of meals and filtered meals list and favorite meals
const initState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [] // you might want to store this in a server

} 

// function that receives two arguments
// current state snapshot and the action
const mealsReducer = (state =  initState, action) => {
    switch (action.type) {
        case FAV_TOGGLE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            if (existingIndex >= 0){
                const updateFavMeals = [ ...state.favoriteMeals]
                updateFavMeals.splice(existingIndex, 1)
                return {
                    ...state, favoriteMeals:updateFavMeals
                }
            } else {
                const findMeal = state.meals.find(meal => meal.id === action.mealId)
                return {
                    ...state, favoriteMeals:state.favoriteMeals.concat(findMeal)
                }
            }
        case ADD_FILTERS:
            const filterApply = actions.filters
            // create a new filtered meal based on the toal meal available and use build in filter method
            const newFilteredMeals = state.meals.filter(meal => {
                // function will check if any meal matches the filter and dropped if it doesnt
                if (filterApply.bromateFree && !meal.isBromateFree){
                    return false
                }
                if (filterApply.starchFree && !meal.isStarchFree){
                    return false
                }
                if (filterApply.veganFree && !meal.isVeganFree){
                    return false
                }
                if (filterApply.glutenFree && !meal.isGlutenFree){
                    return false
                }
                // when meal matches all filter set
                return true
            })
            // return a new state by copying the old state and 
            // overide filteredMeals with neFilteredMeals
            return { ...state, filteredMeals:newFilteredMeals}
        default:
            return state
    }
}


export default mealsReducer