// set up unique identifiers
export const FAV_TOGGLE = 'FAV_TOGGLE'


// function that creates an action whith extra payload
export const favToggle = (id) =>{
    return(
        { type: FAV_TOGGLE, mealId: id}
    )
}
