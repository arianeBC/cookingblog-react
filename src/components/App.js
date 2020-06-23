import React from 'react';
import {Route, Switch} from 'react-router';
import LoginForm from './LoginForm';
import RecipesListContainer from './RecipesListContainer';
import RecipesContainer from './RecipesContainer';
import Header from './Header';
import {requests} from '../agent';
import {connect} from 'react-redux';
import {userProfileFetch, userSetId, userLogout} from '../actions/actions';

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
         console.log(`Old user ID: ${prevProps.userId}`);
         console.log(`New user ID: ${userId}`);
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
               <Route path="/recipes/:id" component={RecipesContainer}/>
               <Route path="/" component={RecipesListContainer}/>
            </Switch>
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);