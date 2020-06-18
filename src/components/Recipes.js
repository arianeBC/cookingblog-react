import React from 'react';
import {Message} from './Message';

export class Recipes extends React.Component {
   render() {
      const {post} = this.props;

      if (null === post) {
         return (<Message message="Cette recette n'existe pas."/>);
      }

      return (
         <div className="card mb-3 mt-3 shadow-sm">
            <div className="card-body">
               <h2>{post.title}</h2>
               <p className="card-text">{post.content}</p>
               <p className="card-text border-top">
                  <small className="text-muted">
                     coucou
                  </small>
               </p>
            </div>
         </div>
      )
   }
}