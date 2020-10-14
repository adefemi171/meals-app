// file to manage meal reducer updating logic
// manage filters and favorites
import { MEALS } from '../../data/dummy-data'
import { FAV_TOGGLE } from '../actions/mealsAction'
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
        default:
            return state
    }
}


export default mealsReducer