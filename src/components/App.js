import React from 'react';
import {Route, Switch} from 'react-router';
import LoginForm from './LoginForm';
import RecipesListContainer from './RecipesListContainer';
import RecipesContainer from './RecipesContainer';
import Header from './Header';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <Switch>
               <Route path="/login" component={LoginForm}/>
               <Route path="/recipes/:id" component={RecipesContainer}/>
               <Route path="/" component={RecipesListContainer}/>
            </Switch>
         </div>
      )
   }
}

export default App;