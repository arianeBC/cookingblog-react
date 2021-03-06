import React from 'react';
import '../css/HomepageContainer.css';
import {HomeCarousel} from './HomeCarousel';

export default class HomepageContainer extends React.Component {
   render() {
      return (
         <div className="home-container">
            <div className="row home-row">
               <div className="col-md-6 col-sm-12 home-image my-auto align-self-center">
                  <HomeCarousel/>
               </div>
               <div className="col-md-6 col-sm-12 align-self-center home-title">
                  <h1>Cuisine <span className="home-logo"> Sans gluten</span></h1>
                  <p className="home-text">et sans produits laitiers</p>
                  <a href="/" className="btn btn-primary btn-home d-flex justify-content-center">Voir toutes les recettes</a>
               </div>
            </div>
         </div>
      );
   }
}