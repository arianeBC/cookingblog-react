import React from 'react';
import timeago from 'timeago.js';
import {Message} from './Message';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './CommentList.css';

const timeago_fr = function(number, index, total_sec) {
   return [
      ["à l'instant", 'dans un instant'],
      ['il y a %s secondes', 'dans %s secondes'],
      ['il y a 1 minute', 'dans 1 minute'],
      ['il y a %s minutes', 'dans %s minutes'],
      ['il y a 1 heure', 'dans 1 heure'],
      ['il y a %s heures', 'dans %s heures'],
      ['il y a 1 jour', 'dans 1 jour'],
      ['il y a %s jours', 'dans %s jours'],
      ['il y a 1 semaine', 'dans 1 semaine'],
      ['il y a %s semaines', 'dans %s semaines'],
      ['il y a 1 mois', 'dans 1 mois'],
      ['il y a %s mois', 'dans %s mois'],
      ['il y a 1 an', 'dans 1 an'],
      ['il y a %s ans', 'dans %s ans'],
   ][index];
};
timeago.register('fr', timeago_fr);

export class CommentsList extends React.Component {
   render() {
      const {commentsList} = this.props;

      if (null === commentsList || 0 === commentsList.length) {
         return (<Message message="Aucun commentaire n'a encore été ajouté"/>);
      }

      return (
         <div className="comments-container">
            <TransitionGroup>
            {commentsList.map(comment => {
               return (
                  <CSSTransition key={comment.id} timeout={600} classNames="fade">
                     <div className="card-body border-bottom">
                        <p className="card-text mb-6 comment-content">
                           {comment.content}
                        </p>
                        <p className="card-text comment-time">
                           <small className="text-muted">
                              {timeago().format(comment.published, 'fr')} par&nbsp;
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