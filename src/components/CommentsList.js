import React from 'react';
import timeago from 'timeago.js';
import {Message} from './Message';

export class CommentsList extends React.Component {
   render() {
      const {commentsList} = this.props;
      console.log(commentsList);

      if (null === commentsList) {
         return (<Message message="Aucun commentaire pour l'instant : Soyez le premier à donner votre avis !"/>);
      }

      return (
         <div className="card mb-3 mt-3 shadow-sm">
            {commentsList.map(comments => {
               return (
                  <div className="card-body border-bottom" key={comments.id}>
                     <p className="card-text mb-6">
                        {comments.content}
                     </p>
                     <p className="card-text">
                        <small className="text-muted">
                           {timeago().format(comments.publishedAt, 'fr')} par&nbsp;
                           {comments.user.usergroup}
                        </small>
                     </p>
                  </div>
               );
            })}
         </div>
      )
   }
}