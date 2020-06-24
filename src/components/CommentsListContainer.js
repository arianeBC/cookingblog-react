import React from 'react';
import {commentsListFetch, commentsListUnload} from '../actions/actions';
import {connect} from 'react-redux';
import {Spinner} from './Spinner';
import {CommentsList} from './CommentsList';
import CommentForm from './CommentForm';
import {LoadMore} from './LoadMore';

const mapStateToProps = state => ({
   ...state.commentsList,
   isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
   commentsListFetch,
   commentsListUnload
};

class CommentsListContainer extends React.Component {
   componentDidMount() {
      this.props.commentsListFetch(this.props.recipeId);
   }

   componentWillUnmount() {
      this.props.commentsListUnload();
   }

   onLoadMoreClick() {
      const {recipeId, currentPage, commentsListFetch} = this.props;
      commentsListFetch(recipeId, currentPage);
   }

   render() {
      const {isFetching, commentsList, isAuthenticated, recipeId, currentPage, pageCount} = this.props;
      const showLoadMore = pageCount > 1 && currentPage <= pageCount;

      if (isFetching && currentPage === 1) {
         return(<Spinner/>);
      }

      return (
         <div>
            <CommentsList commentsList={commentsList} />
            {showLoadMore && <LoadMore label="Afficher plus de commentaires" 
                                       onClick={this.onLoadMoreClick.bind(this)}
                                       disabled={isFetching}/>}
            {isAuthenticated && <CommentForm recipeId={recipeId}/>}
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);