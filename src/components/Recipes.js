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
         <div className="container">
            <div className="card-body">
               <h2>{post.title}</h2>
               <p className="card-text border-top"></p>
               <p><strong>Ingrédients</strong></p>
               <p className="card-text listing">{post.ingredients && post.ingredients.split("<br>").join("\n")}</p>
               <p><strong>Préparation</strong></p>
               <p className="card-text listing">{post.content.split("<br>").join("\n")}</p>
               <p className="card-text border-top"></p>
            </div>
         </div>
      )
   }
}