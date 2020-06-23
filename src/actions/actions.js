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
   USER_LOGIN_SUCCESS,
   USER_PROFILE_REQUEST,
   USER_PROFILE_ERROR,
   USER_PROFILE_RECEIVED,
   USER_SET_ID,
   COMMENT_ADDED
} from './constants';
import {SubmissionError} from 'redux-form';
import {parseApiErrors} from '../apiUtils';

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

export const commentAdded = (comment) => ({
   type: COMMENT_ADDED,
   comment
})

export const commentAdd = (comment, recipeId) => {
   return (dispatch) => {
      return requests.post(
         '/comments',
         {
            content: comment,
            recipe: `api/recipes/${recipeId}`
         }
      ).then(response => dispatch(commentAdded(response))
      ).catch(error => {
         throw new SubmissionError(parseApiErrors(error));
      })
   }
};

export const userLoginSuccess = (token, userId) => {
   return {
      type: USER_LOGIN_SUCCESS,
      token,
      userId
   }
};

export const userLoginAttempt = (username, password) => {
   return (dispatch) => {
      return requests.post('/login_check', {username, password}, false)
         .then(response => dispatch(userLoginSuccess(response.token, response.id)))
         .catch(() => {
         throw new SubmissionError({
            _error: 'Username or password is invalid'
         })
      });
   }
};

export const userSetId = (userId) => {
   return {
      type: USER_SET_ID,
      userId
   }
};

export const userProfileRequest = () => {
   return {
      type: USER_PROFILE_REQUEST
   }
};

export const userProfileError = () => {
   return {
      type: USER_PROFILE_ERROR
   }
};

export const userProfileReceived = (userId, userData) => {
   return {
      type: USER_PROFILE_RECEIVED,
      userData,
      userId
   }
};

export const userProfileFetch = (userId) => {
   return (dispatch) => {
      dispatch(userProfileRequest());
      return requests.get(`/users/${userId}`, true)
         .then(response => dispatch(userProfileReceived(userId, response)))
         .catch(error => dispatch(userProfileError()))
   }
};

export const recipesAdd = () => ({
   type: RECIPES_LIST_ADD,
   data: {
      id: Math.floor(Math.random() * 100 + 3),
      title: 'A newly added recipe'
   }
});

