import {
   COMMENTS_LIST_REQUEST, 
   COMMENTS_LIST_RECEIVED, 
   COMMENTS_LIST_ERROR, 
   COMMENTS_LIST_UNLOAD,
   COMMENT_ADDED
} from '../actions/constants';
import { hydraPageCount } from '../apiUtils';

export default(state = {
   commentsList: null,
   isFetching: false,
   currentPage: 1,
   pageCount: null
}, action) => {
   switch (action.type) {
      case COMMENTS_LIST_REQUEST:
         return {
            ...state,
            isFetching: true
         };
      case COMMENTS_LIST_RECEIVED:
         return {
            ...state,
            commentsList: !state.commentsList ? action.data['hydra:member'] 
               : state.commentsList.concat(action.data['hydra:member']),
            isFetching: false,
            currentPage: state.currentPage + 1,
            pageCount: hydraPageCount(action.data)
         };
      case COMMENT_ADDED:
         return {
            ...state,
            commentsList: [action.comment, ...state.commentsList]
         }
      case COMMENTS_LIST_ERROR:
      case COMMENTS_LIST_UNLOAD:
         return {
            ...state,
            isFecthing: false,
            commentsList: null,
            currentPage: 1,
            pageCount: null
         };
      default:
         return state;
   }
}