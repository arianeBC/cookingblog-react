import React from 'react';
import {recipesFetch, recipesUnload} from '../actions/actions';
import {connect} from 'react-redux';
import {Recipes} from './Recipes';
import {Spinner} from './Spinner';

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

      return (<Recipes post={post}/>)
   }
}

export default connect(mapeStateToProps, mapDispatchToProps)(RecipesContainer);