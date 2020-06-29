import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
   renderUser() {
      const {userData, logout} = this.props;

      if (null === userData) {
         return (<i className="fas fa-spinner fa-spin"/>);
      }

      return (
         <span>
            {userData.usergroup}&nbsp; |
            <button className="navbar-text btn btn-link btn-sm navbar-styling" href="#" onClick={logout}>Déconnexion</button>
         </span>
      );
   }

   render() {
      const {isAuthenticated} = this.props;

      return (
         <header>
            <div className="row">
               <nav className="navbar fixed-top navbar-expand-md navbar-light full-width">
                  <Link to="/" className="navbar-brand logo">
                     Cuisine <span className="strong">Sans gluten</span>
                  </Link>


                     <ul className="navbar-nav ml-auto">
                        {
                           !isAuthenticated && 
                           (
                              <li className="nav-item">
                                 <Link to="/register" className="nav-link">S'inscrire</Link>
                              </li>
                           )
                        }
                        {
                           isAuthenticated &&
                           (
                              <li className="nav-item">
                                 <Link to="/recipes-form" className="nav-link">Ajouter</Link>
                              </li>
                           )
                        }
                     </ul>

                     <span className="navbar-text separator">|</span>
                     <span className="navbar-text">
                        {isAuthenticated ? this.renderUser() : <Link to="/login">Mon espace <i className="far fa-user"></i></Link>}
                     </span>

               </nav>
            </div>
         </header>
      );
   }
}