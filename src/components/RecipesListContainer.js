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

   onNextPageClick(e) {
      const {currentPage, pageCount} = this.props;
      const newPage = Math.min(currentPage + 1, pageCount);
      this.changePage(newPage);
   }

   onPrevPageClick(e) {
      const {currentPage} = this.props;
      const newPage = Math.max(currentPage -1, 1);
      this.changePage(newPage);
   }

   render() {
      const {posts, isFetching, currentPage, pageCount} = this.props;

      if (isFetching) {
         return(<Spinner/>);
      }

      return (
         <div>
            <h3 className="page-title pt-5">Toutes les recettes</h3>
            <RecipesList posts={posts} />
            <Paginator currentPage={currentPage} pageCount={pageCount} 
                     setPage={this.changePage.bind(this)}
                     nextPage={this.onNextPageClick.bind(this)}
                     prevPage={this.onPrevPageClick.bind(this)}/>
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesListContainer);