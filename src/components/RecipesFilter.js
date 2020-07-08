import React from 'react';
import './RecipesFilter.css';

export class RecipesFilter extends React.Component {
   render() {

      return (
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12 col-lg-9 d-flex justify-content-center mx-auto color">
                     <div className="btn-box">
                        <a href="/entrees" className="btn btn-primary btn-recipes">Entrées</a>
                     </div>
                     <div className="btn-box">
                        <a href="/plats" className="btn btn-primary btn-recipes">Plats</a>
                     </div>
                     <div className="btn-box">
                        <a href="/desserts" className="btn btn-primary btn-recipes">Desserts</a>
                     </div>
               </div>
            </div>
         </div>
      )
   }
}