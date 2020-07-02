import React from 'react';
import './HomepageContainer.css';

export default class HomepageContainer extends React.Component {
   render() {
      return (
         <div className="home-container">
            <div className="row">
               <div className="col-md-6 col-sm-12 home-image">
                  <img src="http://sgcuisine/images/5efb0c000d630947366104.png" alt="" className="img-fluid"/>
               </div>
               <div className="col-md-6 col-sm-12 align-self-center">
                  <h1>Cuisine <span className="home-logo"> Sans gluten</span></h1>
                  <p className="home-text">et sans produits laitiers</p>
                  <a href="/" className="btn btn-primary btn-home d-flex justify-content-center">Voir toutes les recettes</a>
               </div>
            </div>
         </div>
      );
   }
}