import {RECIPES_ERROR, RECIPES_RECEIVED, RECIPES_REQUEST, RECIPES_UNLOAD} from '../actions/constants';

export default (state = {
   post: null,
   isFetching: false
}, action) => {
   switch (action.type) {
      case RECIPES_REQUEST:
         return {
            ...state,
            isFecthing: true
         };
      case RECIPES_RECEIVED:
         return {
            ...state,
            post: action.data,
            isFecthing: false
         };
      case RECIPES_ERROR:
         return {
            ...state,
            isFecthing: false
         };
      case RECIPES_UNLOAD:
         return {
            ...state,
            isFecthing: false,
            post: null
         };
      default:
         return state;
   }
}