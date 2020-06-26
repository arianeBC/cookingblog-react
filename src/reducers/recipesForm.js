import {IMAGE_UPLOAD_REQUEST, IMAGE_UPLOADED, IMAGE_UPLOAD_ERROR, RECIPES_FORM_UNLOAD} from "../actions/constants";

export default (state = {
   imageUploading: false,
   image: null,
   images: []
}, action) => {
   switch (action.type) {
      case IMAGE_UPLOAD_REQUEST:
         return {
            ...state,
            imageUploading: true
         };
      case IMAGE_UPLOADED:
         return {
            ...state,
            imageUploading: false,
            image: action.image,
            images: state.images.concat(action.image)
         };
      case IMAGE_UPLOAD_ERROR:
         return {
            ...state,
            imageUploading: false
         };
      case RECIPES_FORM_UNLOAD:
         return {
            ...state,
            imageUploading: false,
            image: null,
            images: []
         };
      default:
         return state;
   }
}