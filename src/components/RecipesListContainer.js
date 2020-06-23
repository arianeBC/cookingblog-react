import React from 'react';
import RecipesList from './RecipesList';
import {recipesListFetch, recipesListSetPage} from '../actions/actions';
import {connect} from 'react-redux';
import {Spinner} from './Spinner';
import {Paginator} from './Paginator';

const mapStateToProps = state => ({
   ...state.recipesList
});

const mapDispatchToProps = {
   recipesListFetch, recipesListSetPage
};

class RecipesListContainer extends React.Component {
   componentDidMount() {
      this.props.recipesListFetch();
   }

   componentDidUpdate(prevProps) {
      const {currentPage, recipesListFetch} = this.props;
      
      if (prevProps.currentPage !== currentPage) {
         recipesListFetch(currentPage);
      }
   }

   render() {
      const {posts, isFetching, recipesListSetPage, currentPage} = this.props;

      if (isFetching) {
         return(<Spinner/>);
      }

      return (
         <div>
            <RecipesList posts={posts} />
            <Paginator currentPage={currentPage} pageCount={5} setPage={recipesListSetPage}/>
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListContainer);