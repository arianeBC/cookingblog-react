import React from 'react';
import {Route, Switch} from 'react-router';
import LoginForm from './LoginForm';
import RecipesListContainer from './RecipesListContainer';
import Header from './Header';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <Switch>
               <Route path="/login" component={LoginForm}/>
               <Route path="/" component={RecipesListContainer}/>
            </Switch>
         </div>
      )
   }
}

export default App;