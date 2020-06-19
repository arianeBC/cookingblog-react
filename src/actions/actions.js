import {requests} from '../agent';
import {
   RECIPES_LIST_REQUEST, 
   RECIPES_LIST_ERROR, 
   RECIPES_LIST_RECEIVED, 
   RECIPES_LIST_ADD,
   RECIPES_REQUEST,
   RECIPES_ERROR,
   RECIPES_RECEIVED,
   RECIPES_UNLOAD,
   COMMENTS_LIST_REQUEST, 
   COMMENTS_LIST_ERROR, 
   COMMENTS_LIST_RECEIVED, 
   COMMENTS_LIST_UNLOAD,
} from './constants';

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

export const recipesError = (error) => ({
   type: RECIPES_ERROR,
   error
});

export const recipesReceived = (data) => ({
   type: RECIPES_RECEIVED,
   data
});

export const recipesUnload = () => ({
   type: RECIPES_UNLOAD
});

export const recipesFetch = (id) => {
   return (dispatch) => {
      dispatch(recipesRequest());
      return requests.get(`/recipes/${id}`)
         .then(response => dispatch(recipesReceived(response)))
         .catch(error => dispatch(recipesError(error)));
   }
};

export const commentsListRequest = () => ({
   type: COMMENTS_LIST_REQUEST,
});

export const commentsListError = (error) => ({
   type: COMMENTS_LIST_ERROR,
   error
});

export const commentsListReceived = (data) => ({
   type: COMMENTS_LIST_RECEIVED,
   data
});

export const commentsListUnload = () => ({
   type: COMMENTS_LIST_UNLOAD
});

export const commentsListFetch = (id) => {
   return (dispatch) => {
      dispatch(commentsListRequest());
      return requests.get(`/recipes/${id}/comments`)
         .then(response => dispatch(commentsListReceived(response)))
         .catch(error => dispatch(commentsListError(error)));
   }
};

export const recipesAdd = () => ({
   type: RECIPES_LIST_ADD,
   data: {
      id: Math.floor(Math.random() * 100 + 3),
      title: 'A newly added recipe'
   }
});

