import {RECIPES_LIST_REQUEST, RECIPES_LIST_RECEIVED, RECIPES_LIST_ERROR, RECIPES_LIST_ADD} from "../actions/actions"

export default(state = {
   posts: null,
   isFetching: false
}, action) => {
   switch (action.type) {
      case RECIPES_LIST_REQUEST:
         state = {
            ...state,
            isFetching: true,
         };
         console.log(state);
         return state;
      case RECIPES_LIST_RECEIVED:
         state = {
            ...state,
            posts: action.data['hydra:member'],
            isFetching: false,
         };
         console.log(state);
         return state;
      case RECIPES_LIST_ERROR:
         return {
            ...state,
            isFetching: false,
            posts: null,
         };
      case RECIPES_LIST_ADD:
         state = {
            ...state,
            posts: state.posts ? state.posts.concat(action.data) : state.posts
         };
         console.log(state);
         return state;
      default:
         return state;
   }
}