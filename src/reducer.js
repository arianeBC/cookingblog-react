import {combineReducers} from 'redux';
import recipesList from './reducers/recipesList';
import recipes from './reducers/recipes';
import commentsList from './reducers/commentsList';

export default combineReducers({
   recipesList,
   recipes,
   commentsList
});