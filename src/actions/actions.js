import {requests} from '../agent';

export const RECIPES_LIST_REQUEST = 'RECIPES_LIST_REQUEST';
export const RECIPES_LIST_RECEIVED = 'RECIPES_LIST_RECEIVED';
export const RECIPES_LIST_ERROR = 'RECIPES_LIST_ERROR';
export const RECIPES_LIST_ADD = 'RECIPES_LIST_ADD';

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

export const recipesAdd = () => ({
   type: RECIPES_LIST_ADD,
   data: {
      id: Math.floor(Math.random() * 100 + 3),
      title: 'A newly added recipe'
   }
});

