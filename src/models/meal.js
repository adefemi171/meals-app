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
        isVegetarian, 
        isLactoseFree
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
            this.isVegetarian = isVegetarian
            this.isLactoseFree = isLactoseFree
        }
}

export default Meal