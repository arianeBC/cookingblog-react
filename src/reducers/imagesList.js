import {
   IMAGES_LIST_REQUEST, 
   IMAGES_LIST_RECEIVED, 
   IMAGES_LIST_ERROR, 
   IMAGES_LIST_UNLOAD
} from '../actions/constants';

export default(state = {
   imagesList: null,
   isFetching: false,
}, action) => {
   switch (action.type) {
      case IMAGES_LIST_REQUEST:
         return {
            ...state,
            isFetching: true
         };
      case IMAGES_LIST_RECEIVED:
         return {
            ...state,
            imagesList: !state.imagesList ? action.data['hydra:member'] 
               : state.imagesList.concat(action.data['hydra:member']),
            isFetching: false
         };
      case IMAGES_LIST_ERROR:
      case IMAGES_LIST_UNLOAD:
         return {
            ...state,
            isFecthing: false,
            imagesList: null
         };
      default:
         return state;
   }
}