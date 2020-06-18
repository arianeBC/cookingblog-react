import React from 'react';
import {CommentsList} from './CommentsList';
import {commentsListFetch, commentsListUnload} from '../actions/actions';
import {connect} from 'react-redux';
import {Spinner} from './Spinner';

const mapStateToProps = state => ({
   ...state.commentsList
});

const mapDispatchToProps = {
   commentsListFetch,
   commentsListUnload
};

class CommentsListContainer extends React.Component {
   componentDidMount() {
      this.props.commentsListFetch(this.props.recipesId);
   }

   componentWillUnmount() {
      this.props.commentsListUnload();
   }

   render() {
      const {commentsList, isFetching} = this.props;

      if (isFetching) {
         return(<Spinner/>);
      }

      return (<CommentsList commentsList={commentsList} />)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);