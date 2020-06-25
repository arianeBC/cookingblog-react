import React from 'react';
import {Message} from './Message';

import './Recipes.css';

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
               <p><strong>Ingrédients</strong></p>
               <p className="card-text listing">{post.ingredients && post.ingredients.split("<br>").join("\n")}</p>
               <p><strong>Préparation</strong></p>
               <p className="card-text listing">{post.content.split("<br>").join("\n")}</p>
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