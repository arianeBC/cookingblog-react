import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {renderField} from '../form';
import {connect} from 'react-redux';
import {userRegister} from '../actions/actions';

const mapDispatchToProps = {
   userRegister
};

class RegisterForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {termsAccepted: false};
   }

   onSubmit(values) {
      return this.props.userRegister(...Object.values(values))
         .then(() => {
            this.props.reset();
         });
   }

   onTermsAcceptedClick(e) {
      this.setState(prevState => ({termsAccepted: !prevState.termsAccepted}))
   }

   render() {
      const {handleSubmit, submitting} = this.props;

      return (
         <div className="row register-background">
            <div className="col-md-6 mx-auto">
            <h3 className="pt-5 form-name">Inscription</h3>
               <div className="card card-body mt-5 body-form">
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                     <Field name="usergroup" label="Nom et prénom" type="text" component={renderField}/>
                     <Field name="username" label="Nom d'utilisateur" type="text" component={renderField}/>
                     <Field name="email" label="Email" type="text" component={renderField}/>
                     <Field name="password" label="Mot de passe" type="password" component={renderField}/>
                     <Field name="retypedPassword" label="Confirmer le mot de passe" type="password" component={renderField}/>

                     <div className="form-check form-group custom-control custom-checkbox">
                        <input className="form-check-input custom-control-input" type="checkbox"
                              id="customCheck1"
                              value={false} 
                              onClick={this.onTermsAcceptedClick.bind(this)}/>
                        <label className="form-check-label custom-control-label" htmlFor="customCheck1">J'accepte les termes et conditions</label>
                     </div>

                     <button type="submit" className="btn btn-primary btn-big btn-block btn-register" 
                           disabled={submitting || !this.state.termsAccepted}>
                        S'inscrire
                     </button>
                  </form>
               </div>
            </div>
         </div>
      )
   }
}

export default reduxForm({
   form: 'RegisterForm'
})(connect(null, mapDispatchToProps)(RegisterForm));