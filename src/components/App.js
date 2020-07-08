import React from 'react';
import {Route, Switch} from 'react-router';
import LoginForm from './LoginForm';
import RecipesListContainer from './RecipesListContainer';
import RecipesContainer from './RecipesContainer';
import HomepageContainer from './HomepageContainer';
import Header from './Header';
import {requests} from '../agent';
import {connect} from 'react-redux';
import {userProfileFetch, userSetId, userLogout} from '../actions/actions';
import RegistrationContainer from './RegistrationContainer';
import RecipesForm from './RecipesForm';
import Entrees from './Entrees';
import Plats from './Plats';
import Desserts from './Desserts';

const mapStateToProps = state => ({
   ...state.auth
});

const mapDispatchToProps = {
   userProfileFetch, userSetId, userLogout
};

class App extends React.Component {
   constructor(props) {
      super(props);
      const token = window.localStorage.getItem('jwtToken');

      if (token) {
         requests.setToken(token);
      }
   }

   componentDidMount() {
      const userId = window.localStorage.getItem('userId');
      const {userSetId} = this.props;

      if (userId) {
         userSetId(userId);
      }
   }

   componentDidUpdate(prevProps) {
      const {userId, userData, userProfileFetch} = this.props;

      if (prevProps.userId !== userId && userId !== null && userData === null) {
         userProfileFetch(userId);
      }
   }

   render() {
      const {isAuthenticated, userData, userLogout} = this.props;

      return (
         <div>
            <Header isAuthenticated={isAuthenticated} userData={userData} logout={userLogout}/>
            <Switch>
               <Route path="/login" component={LoginForm}/>
               <Route path="/recipes-form" component={RecipesForm}/>
               <Route path="/recipes/:id" component={RecipesContainer}/>
               <Route path="/register" component={RegistrationContainer}/>
               <Route path="/home" component={HomepageContainer}/>
               <Route path="/entrees" component={Entrees}/>
               <Route path="/plats" component={Plats}/>
               <Route path="/desserts" component={Desserts}/>
               <Route path="/:page?" component={RecipesListContainer}/>
            </Switch>
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);