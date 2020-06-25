import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from './Spinner';

export default class Header extends React.Component {
   renderUser() {
      const {userData, logout} = this.props;

      if (null === userData) {
         return (<i className="fas fa-spinner fa-spin"/>);
      }

      return (
         <span>
            {userData.usergroup}&nbsp;
            <button className="btn btn-link btn-sm" href="#" onClick={logout}>Déconnexion</button>
         </span>
      );
   }

   render() {
      const {isAuthenticated} = this.props;

      return (
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
               Cuisine SG
            </Link>

            <ul className="navbar-nav mr-auto">
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

            <span className="navbar-text">
               {isAuthenticated ? this.renderUser() : <Link to="/login">Connexion</Link>}
            </span>
         </nav>
      );
   }
}