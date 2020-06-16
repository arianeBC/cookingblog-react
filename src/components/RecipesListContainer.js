import React from 'react';
import RecipesList from './RecipesList';
import {recipesAdd, recipesList} from '../actions/actions';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
   ...state.recipesList
});

const mapDispatchToProps = {
   recipesList,
   recipesAdd
};

class RecipesListContainer extends React.Component {
   componentDidMount() {
      setTimeout(this.props.recipesAdd, 3000);
      setTimeout(this.props.recipesAdd, 5000);
      this.props.recipesList();
   }

   render() {
      console.log(this.props);
      return (<RecipesList posts={this.props.posts} />)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListContainer);