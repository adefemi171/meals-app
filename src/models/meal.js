class Meal {
    constructor(
        id, 
        categoryIDs, 
        title, 
        affordability, 
        complexity, 
        imageUrl, 
        duration, 
        ingredients, 
        steps, 
        isGlutenFree, 
        isVegan, 
        isBromateFree, 
        isStarchFree
        ) {
            this.id = id
            this.categoryIDs = categoryIDs
            this.title = title
            this.imageUrl = imageUrl
            this.ingredients = ingredients
            this.steps = steps
            this.duration = duration
            this.affordability = affordability
            this.complexity = complexity
            this.isGlutenFree = isGlutenFree
            this.isVegan = isVegan
            this.isStarchFree = isStarchFree
            this.isBromateFree = isBromateFree
        }
}

export default Meal