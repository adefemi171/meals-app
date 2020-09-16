import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'


import CategoriesPage from '../screens/CategoriesPage'
import CategoryMealsPage from '../screens/CategoryMealsPage'
import MealDetailPage from '../screens/MealDetailPage'

const AppNavigator = createStackNavigator({
    Categories: CategoriesPage,
    CategoryMeals: {
        screen: CategoryMealsPage
    },
    MealDetail: MealDetailPage
})



export default createAppContainer(AppNavigator);