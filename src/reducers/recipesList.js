import {RECIPES_LIST, RECIPES_LIST_ADD} from "../actions/actions"

export default(state = {
   posts: null
}, action) => {
   switch (action.type) {
      case RECIPES_LIST:
         return {
            ...state,
            posts: action.data
         }
      case RECIPES_LIST_ADD:
         return {
            ...state,
            posts: state.posts ? state.posts.concat(action.data) : state.posts
         };
      default:
         return state;
   }
}