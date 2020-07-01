import React from 'react';
import timeago from 'timeago.js';
import {Link} from 'react-router-dom';
import {Message} from './Message';
import './RecipesList.css';
import { recipeAdd } from '../actions/actions';

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

class RecipesList extends React.Component {

   render() {
      const {posts} = this.props;
      if (null === posts || 0 === posts.length) {
         return (<Message message="Aucune recette trouvé"/>);
      }

      return (
         <div className="container-fluid padding pt-5 responsive-card">
            <div className="row padding">
               {posts && posts.map(post => (
                  <div className="col-md-6 col-lg-3 add-padding" key={post.id}>
                     <Link to={`/recipes/${post.id}`}>
                        <div className="card mb-3 mt-3 card-styling" >
                        <img src="http://sgcuisine/images/5efbe9a4a1404818118677.jpg" alt="" className="img-recipe-list"/>
                        {/* <img src={post.image.url} alt="" className="img-recipe-list"/> */}
                           <div className="card-body">
                              <h3 className="recipe-title">
                                 {post.title}
                              </h3>
                              <p className="card-text d-flex justify-content-center">
                                 <small className="text-muted">
                                    {timeago().format(post.createdAt, 'fr')}
                                 </small>
                              </p>
                           </div>
                        </div>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      )
   }
}

export default RecipesList;