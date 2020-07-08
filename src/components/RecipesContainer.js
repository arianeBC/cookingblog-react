import React from 'react';
import {recipesFetch, recipesUnload} from '../actions/actions';
import {connect} from 'react-redux';
import {Recipes} from './Recipes';
import {Spinner} from './Spinner';
import CommentsListContainer from './CommentsListContainer';
import ImagesListContainer from './ImagesListContainer';
import '../css/RecipesContainer.css';

const mapeStateToProps = state => ({
   ...state.recipes
});

const mapDispatchToProps = {
   recipesFetch,
   recipesUnload
};

class RecipesContainer extends React.Component {
   componentDidMount() {
      this.props.recipesFetch(this.props.match.params.id);
   }

   componentWillUnmount() {
      this.props.recipesUnload();
   }

   render() {
      const {isFetching, post} = this.props;
      
      if (isFetching) {
         return (<Spinner/>);
      }

      return (
         <div className="recipe-container">

            <div className="row recipe-and-img-container">
               <div className="col-md-6 col-sm-12 img-container">
                  <div className="recipe-img">
                     <a href="/" className="return-to-list">&lt; Retour</a>
                     <ImagesListContainer recipeId={this.props.match.params.id} />
                  </div>
               </div>
               <div className="col-md-6 col-sm-12 recipe-text">
                  <Recipes post={post}/>
               </div>
            </div>

            <div className="row">
               <div className="offset-md-2 col-md-8 col-sm-12 recipe-comments">
                  {post && <CommentsListContainer recipeId={this.props.match.params.id} />}
               </div>
            </div>
         </div>
      )
   }
}

export default connect(mapeStateToProps, mapDispatchToProps)(RecipesContainer);