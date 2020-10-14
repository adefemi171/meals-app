// file to manage meal reducer updating logic
// manage filters and favorites
import { MEALS } from '../../data/dummy-data'
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
    return state
}


export default mealsReducer