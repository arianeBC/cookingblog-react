import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {renderField} from '../form';
import {connect} from 'react-redux';
import {userLoginAttempt} from '../actions/actions';
import '../css//Form.css';

const mapStateToProps = state => ({
   ...state.auth
});

const mapDispatchToProps = {
   userLoginAttempt
};

class LoginForm extends React.Component {
   componentDidUpdate(prevProps) {
      if (prevProps.token !== this.props.token) {
         this.props.history.push('/');
      }
   }

   onSubmit(values) {
      return this.props.userLoginAttempt(
         values.username,
         values.password
      );
   }

   render() {
      const {handleSubmit, error} = this.props;

      return (
         <div className="row register-background">
            <div className="col-md-6 mx-auto">
            <h3 className="pt-5 form-name">Connexion</h3>
               <div className="card card-body mt-5 body-form">
               {error && <div className="alert alert-danger">{error}</div>}
                  <form className="mt-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                     <Field name="username" label="Nom d'utilisateur" type="text" component={renderField} />
                     <Field name="password" label="Mot de passe" type="password" component={renderField} />
                     <button type="submit" className="btn btn-primary btn-big btn-block btn-login">Se connecter</button>
                  </form>
               </div>
            </div>
         </div>
      )
   }
}

export default reduxForm({
   form: 'LoginForm'
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm));