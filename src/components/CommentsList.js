import React from 'react';
import timeago from 'timeago.js';
import {Message} from './Message';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import './CommentList.css';

export class CommentsList extends React.Component {
   render() {
      const {commentsList} = this.props;

      if (null === commentsList || 0 === commentsList.length) {
         return (<Message message="Aucun commentaire"/>);
      }

      return (
         <div className="card mb-3 mt-3 shadow-sm">
            <TransitionGroup>
            {commentsList.map(comment => {
               return (
                  <CSSTransition key={comment.id} timeout={600} classNames="fade">
                     <div className="card-body border-bottom">
                        <p className="card-text mb-6">
                           {comment.content}
                        </p>
                        <p className="card-text">
                           <small className="text-muted">
                              {timeago().format(comment.publishedAt, 'fr')} par&nbsp;
                              {comment.user.usergroup}
                           </small>
                        </p>
                     </div>
                  </CSSTransition>
               );
            })}
            </TransitionGroup>
         </div>
      )
   }
}