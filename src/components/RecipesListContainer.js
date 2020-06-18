import React from 'react';
import RecipesList from './RecipesList';
import {recipesListFetch} from '../actions/actions';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
   ...state.recipesList
});

const mapDispatchToProps = {
   recipesListFetch
};

class RecipesListContainer extends React.Component {
   componentDidMount() {
      this.props.recipesListFetch();
   }

   render() {
      const {posts, isFetching} = this.props;

      return (<RecipesList posts={posts} isFetching={isFetching} />)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListContainer);