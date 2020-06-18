import {combineReducers} from "redux";
import recipesList from "./reducers/recipesList";
import recipes from "./reducers/recipes";

export default combineReducers({
   recipesList,
   recipes
});