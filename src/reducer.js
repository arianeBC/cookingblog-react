import {combineReducers} from 'redux';
import recipesList from './reducers/recipesList';
import recipes from './reducers/recipes';
import commentsList from './reducers/commentsList';
import {reducer as formReducer} from 'redux-form';
import auth from './reducers/auth';
import registration from './reducers/registration';
import recipesForm from './reducers/recipesForm';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
   recipesList,
   recipes,
   commentsList,
   auth,
   registration,
   recipesForm,
   router: routerReducer,
   form: formReducer
});