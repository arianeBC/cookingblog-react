import React from 'react';
import {recipesFetch} from '../actions/actions';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
   ...state.recipes
});

const mapDispatchToProps = {
   recipesFetch
};

class RecipesContainer extends React.Component {
   componentDidMount() {
      console.log(this.props);
      console.log(this.props.match.params.id);
      this.props.recipesFetch(this.props.match.params.id).then(response => console.log(this.props.post));
   }

   render() {
      return (
         <div>
            Hello from Recipe/ID
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);