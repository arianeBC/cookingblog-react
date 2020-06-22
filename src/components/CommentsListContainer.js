import React from 'react';
import {commentsListFetch, commentsListUnload} from '../actions/actions';
import {connect} from 'react-redux';
import {Spinner} from './Spinner';
import {CommentsList} from './CommentsList';
import CommentForm from './CommentForm';

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

   render() {
      const {isFetching, commentsList, isAuthenticated, recipeId} = this.props;

      if (isFetching) {
         return(<Spinner/>);
      }

      return (
         <div>
            <CommentsList commentsList={commentsList} />
            {isAuthenticated && <CommentForm recipeId={recipeId}/>}
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);