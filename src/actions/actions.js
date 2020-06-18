import {requests} from '../agent';
import {
   RECIPES_LIST_REQUEST, 
   RECIPES_LIST_RECEIVED, 
   RECIPES_LIST_ERROR, 
   RECIPES_LIST_ADD,
   RECIPES_REQUEST,
   RECIPES_RECEIVED,
   RECIPES_ERROR,
   RECIPES_ADD
} from './constants';
import request from 'superagent';

export const recipesListRequest = () => ({
   type: RECIPES_LIST_REQUEST,
});

export const recipesListError = (error) => ({
   type: RECIPES_LIST_ERROR,
   error
});

export const recipesListReceived = (data) => ({
   type: RECIPES_LIST_RECEIVED,
   data
});

export const recipesListFetch = () => {
   return (dispatch) => {
      dispatch(recipesListRequest());
      return requests.get('/recipes')
         .then(response => dispatch(recipesListReceived(response)))
         .catch(error => dispatch(recipesListError(error)));
   }
};

export const recipesRequest = () => ({
   type: RECIPES_REQUEST
});

export const recipesReceived = (data) => ({
   type: RECIPES_RECEIVED,
   data
});

export const recipesError = (error) => ({
   type: RECIPES_ERROR,
   error
});

export const recipesFetch = (id) => {
   return (dispatch) => {
      dispatch(recipesRequest());
      return requests.get(`/recipes/${id}`)
         .then(response => dispatch(recipesReceived(response)))
         .catch(error => dispatch(recipesError(error)));
   }
};

export const recipesAdd = () => ({
   type: RECIPES_LIST_ADD,
   data: {
      id: Math.floor(Math.random() * 100 + 3),
      title: 'A newly added recipe'
   }
});

