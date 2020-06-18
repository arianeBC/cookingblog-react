import {RECIPES_REQUEST, RECIPES_RECEIVED ,RECIPES_ERROR} from '../actions/constants';

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
      default:
         return state;
   }
}