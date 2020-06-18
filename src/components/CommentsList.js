import React from 'react';
import timeago from 'timeago.js';
import {Message} from './Message';

export class CommentsList extends React.Component {
   render() {
      const {commentsList} = this.props;

      if (null === commentsList) {
         return (<Message message="Aucun commentaire pour l'instant : Soyez le premier à donner votre avis !"/>);
      }

      return (
         <div className="card mb-3 mt-3 shadow-sm">
            {/* <div className="card-body">
               <h2>{commentsList.usergroup}</h2>
               <p className="card-text">{commentsList.content}</p>
               <p className="card-text border-top">
                  <small className="text-muted">
                     {timeago().format(commentsList.publishedAt, 'fr')}
                  </small>
               </p>
            </div> */}
         </div>
      )
   }
}