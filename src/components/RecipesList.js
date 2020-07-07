import React from 'react';
import {Link} from 'react-router-dom';
import {Message} from './Message';
import './RecipesList.css';

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
                           {post.image.map(image => 
                              <img key={image.id} src={image.url} className="img-recipe-list" alt=""/>
                           )}
                           <div className="card-body">
                              <h3 className="recipe-title">{post.title}</h3>
                              <p className="card-text d-flex justify-content-center preparation-time">
                                 <small className="text-muted">{post.time}</small>
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