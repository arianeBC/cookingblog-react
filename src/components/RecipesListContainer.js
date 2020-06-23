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
      this.props.recipesListFetch(this.getQueryParamPage());
   }

   componentDidUpdate(prevProps) {
      const {currentPage, recipesListFetch, recipesListSetPage} = this.props;

      if(prevProps.match.params.page !== this.getQueryParamPage()) {
         recipesListSetPage(this.getQueryParamPage());
      }

      if (prevProps.currentPage !== currentPage) {
         recipesListFetch(currentPage);
      }
   }

   getQueryParamPage() {
      return Number(this.props.match.params.page) || 1;
   }

   changePage(page) {
      const {history, recipesListSetPage} = this.props;
      recipesListSetPage(page);
      history.push(`/${page}`);
   }

   render() {
      const {posts, isFetching, currentPage} = this.props;

      if (isFetching) {
         return(<Spinner/>);
      }

      return (
         <div>
            <RecipesList posts={posts} />
            <Paginator currentPage={currentPage} pageCount={5} setPage={this.changePage.bind(this)}/>
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListContainer);