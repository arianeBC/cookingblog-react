import React from 'react';
import RecipesList from './RecipesList';
import {recipesAdd, recipesList} from '../actions/actions';
import {connect} from 'react-redux';
import {requests} from '../agent';

const mapStateToProps = state => ({
   ...state.recipesList
});

const mapDispatchToProps = {
   recipesList,
   recipesAdd
};

class RecipesListContainer extends React.Component {
   componentDidMount() {
      requests.get('/recipes').then(response => console.log(response));
      setTimeout(this.props.recipesAdd, 3000);
      this.props.recipesList();
   }

   render() {
      console.log(this.props);
      return (<RecipesList posts={this.props.posts} />)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListContainer);