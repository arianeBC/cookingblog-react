import React from 'react';
import {Route, Switch} from 'react-router';
import LoginForm from './LoginForm';
import RecipesListContainer from './RecipesListContainer';
import RecipesContainer from './RecipesContainer';
import Header from './Header';
import {requests} from '../agent';
import {connect} from 'react-redux';
import {userProfileFetch} from '../actions/actions';

const mapStateToProps = state => ({
   ...state.auth
});

const mapDispatchToProps = {
   userProfileFetch
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
      const {userProfileFetch} = this.props;

      if (userId) {
         userProfileFetch(userId);
      }
   }

   componentDidUpdate(prevProps) {
      const {userId, userProfileFetch} = this.props;

      if (prevProps.userId !== userId && userId !== null) {
         console.log(`Old user ID: ${prevProps.userId}`);
         console.log(`New user ID: ${userId}`);
         userProfileFetch(userId);
      }
   }

   render() {
      const {isAuthenticated, userData} = this.props;

      return (
         <div>
            <Header isAuthenticated={isAuthenticated} userData={userData}/>
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