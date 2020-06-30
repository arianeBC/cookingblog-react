import {requests} from '../agent';
import {
   RECIPES_LIST_REQUEST, 
   RECIPES_LIST_ERROR, 
   RECIPES_LIST_RECEIVED, 
   RECIPES_LIST_SET_PAGE,
   RECIPES_REQUEST,
   RECIPES_ERROR,
   RECIPES_RECEIVED,
   RECIPES_UNLOAD,
   RECIPES_FORM_UNLOAD,
   COMMENTS_LIST_REQUEST, 
   COMMENTS_LIST_ERROR, 
   COMMENTS_LIST_RECEIVED, 
   COMMENTS_LIST_UNLOAD,
   COMMENT_ADDED,
   IMAGE_UPLOADED,
   IMAGE_UPLOAD_REQUEST,
   IMAGE_UPLOAD_ERROR,
   IMAGE_DELETED,
   IMAGE_DELETE_REQUEST,
   USER_LOGIN_SUCCESS,
   USER_SET_ID,
   USER_PROFILE_REQUEST,
   USER_PROFILE_ERROR,
   USER_PROFILE_RECEIVED,
   USER_LOGOUT,
   USER_REGISTER_SUCCESS,
   USER_CONFIRMATION_SUCCESS,
   USER_REGISTRATION_COMPLETE,
   IMAGES_LIST_REQUEST,
   IMAGES_LIST_ERROR,
   IMAGES_LIST_RECEIVED,
   IMAGES_LIST_UNLOAD
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

export const recipesListSetPage = (page) => ({
   type: RECIPES_LIST_SET_PAGE,
   page
});

export const recipesListFetch = (page = 1) => {
   return (dispatch) => {
      dispatch(recipesListRequest());
      return requests.get(`/recipes?_page=${page}`)
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

export const recipeAdd = (category, theme, title, ingredients, content, image = []) => {
   return (dispatch) => {
      return requests.post(
         '/recipes',
         {
            category,
            theme,
            title,
            ingredients,
            content,
            slug: title && title.replace(/ /g, "-").toLowerCase(),
            image: image.map(images => `/api/images/${images.id}`)
         }
      ).catch(error => {
         if (401 === error.response.status) {
            return dispatch(userLogout());
         } else if (403 === error.response.status) {
            throw new SubmissionError({
               _error: "Vous n'avez pas les droits pour publier une nouvelle recette"
            });
         }
         throw new SubmissionError(parseApiErrors(error));
      })
   }
};

export const recipesFormUnload = () => ({
   type: RECIPES_FORM_UNLOAD
});

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

export const commentsListFetch = (id, page = 1) => {
   return (dispatch) => {
      dispatch(commentsListRequest());
      return requests.get(`/recipes/${id}/comments?_page=${page}`)
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
         if (401 === error.response.status) {
            return dispatch(userLogout());
         }
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

export const userLogout = () => {
   return {
      type: USER_LOGOUT
   }
}

export const userRegisterSucces = () => {
   return {
      type: USER_REGISTER_SUCCESS
   }
};

export const userRegister = (username, password, retypedPassword, email, usergroup) => {
   return (dispatch) => {
      return requests.post('/users', {username, password, retypedPassword, email, usergroup}, false)
         .then(() => dispatch(userRegisterSucces()))
         .catch(error => {
            throw new SubmissionError(parseApiErrors(error));
      });
   }
};

export const userConfirmationSuccess = () => {
   return {
      type: USER_CONFIRMATION_SUCCESS
   }
};

export const userRegistrationComplete = () => {
   return {
      type: USER_REGISTRATION_COMPLETE
   }
};

export const userConfirm = (confirmationToken) => {
   return (dispatch) => {
      return requests.post('/users/confirm', {confirmationToken}, false)
         .then(() => dispatch(userConfirmationSuccess()))
         .catch(error => {
            throw new SubmissionError({
               _error: 'Le code de validation est incorrect'
            });
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

export const userProfileError = (userId) => {
   return {
      type: USER_PROFILE_ERROR,
      userId
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
         .catch(error => dispatch(userProfileError(userId)))
   }
};

export const imageUploaded = (data) => {
   return {
      type: IMAGE_UPLOADED,
      image: data
   }
};

export const imageUploadRequest = () => {
   return {
      type: IMAGE_UPLOAD_REQUEST,
   }
};

export const imageUploadError = () => {
   return {
      type: IMAGE_UPLOAD_ERROR,
   }
};

export const imageUpload = (file) => {
   return (dispatch) => {
      dispatch(imageUploadRequest());
      return requests.upload('/images', file)
      .then(response => dispatch(imageUploaded(response)))
      .catch(() => dispatch(imageUploadError))
   }
};

export const imageDeleteRequest = () => {
   return {
      type: IMAGE_DELETE_REQUEST,
   }
};

export const imageDelete = (id) => {
   return (dispatch) => {
      dispatch(imageDeleteRequest());
      return requests.delete(`/images/${id}`)
         .then(() => dispatch(imagedeleted(id)));
   }
};

export const imagedeleted = (id) => {
   return {
      type: IMAGE_DELETED,
      imageId: id
   }
};

export const imagesListRequest = () => ({
   type: IMAGES_LIST_REQUEST,
});

export const imagesListError = (error) => ({
   type: IMAGES_LIST_ERROR,
   error
});

export const imagesListReceived = (data) => ({
   type: IMAGES_LIST_RECEIVED,
   data
});

export const imagesListUnload = () => ({
   type: IMAGES_LIST_UNLOAD
});

export const imagesListFetch = (id) => {
   return (dispatch) => {
      dispatch(imagesListRequest());
      return requests.get(`/recipes/${id}/images`)
         .then(response => dispatch(imagesListReceived(response)))
         .catch(error => dispatch(imagesListError(error)));
   }
};