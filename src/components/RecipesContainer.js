import React from 'react';
import {recipesFetch, recipesUnload} from '../actions/actions';
import {connect} from 'react-redux';
import {Recipes} from './Recipes';
import {Spinner} from './Spinner';
import CommentsListContainer from './CommentsListContainer';

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
         <div>
            <Recipes post={post}/>
            {post && <CommentsListContainer recipesId={this.props.match.params.id} />}
         </div>
      )
   }
}

export default connect(mapeStateToProps, mapDispatchToProps)(RecipesContainer);