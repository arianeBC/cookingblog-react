import {combineReducers} from 'redux';
import recipesList from './reducers/recipesList';
import recipes from './reducers/recipes';
import commentsList from './reducers/commentsList';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
   recipesList,
   recipes,
   commentsList,
   form: formReducer
});