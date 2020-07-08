import React from 'react';
import {Message} from './Message';
import '../css/Recipes.css';

export class Recipes extends React.Component {
   render() {
      const {post} = this.props;

      if (null === post) {
         return (<Message message="Cette recette n'est pas disponible."/>);
      }

      return (
         <div className="container">
            <div className="card-body recipe">
               <h2>{post.title}</h2>
               {/* <p className="card-text border-top"></p> */}
               <div className="box">
                  <p className="cooking-time uppercase-box">Temps de préparation</p>
                     <p className="cooking-time">{post.time}</p>
               </div>
               <div>
                  <p className="uppercase">Ingrédients</p>
                     <p className="card-text listing">{post.ingredients && post.ingredients.split("<br>").join("\n\n")}</p>
                  <p className="uppercase">Préparation</p>
                     <p className="card-text listing">{post.content.split("<br>").join("\n\n")}</p>
                  <p className="card-text border-top"></p>
               </div>
            </div>
         </div>
      )
   }
}