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
      const {posts, isFetching} = this.props;

      return (<RecipesList posts={posts} isFetching={isFetching} />)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListContainer);