import React from 'react';
import RecipesList from './RecipesList';
import {recipesAdd, recipesListFetch, recipesList} from '../actions/actions';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
   ...state.recipesList
});

const mapDispatchToProps = {
   recipesAdd,
   recipesListFetch
};

class RecipesListContainer extends React.Component {
   componentDidMount() {
      setTimeout(this.props.recipesAdd, 3000);
      this.props.recipesListFetch();
   }

   render() {
      return (<RecipesList posts={this.props.posts} />)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListContainer);