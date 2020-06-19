import {combineReducers} from 'redux';
import recipesList from './reducers/recipesList';
import recipes from './reducers/recipes';
import commentsList from './reducers/commentsList';
import {reducer as formReducer} from 'redux-form';
import auth from './reducers/auth';

export default combineReducers({
   recipesList,
   recipes,
   commentsList,
   auth,
   form: formReducer
});