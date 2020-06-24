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
      // console.log(...Object.values(values));
      return this.props.userRegister(...Object.values(values))
         .then(() => {
            this.props.reset();
            this.props.history.push('/');
         });
   }

   onTermsAcceptedClick(e) {
      this.setState(prevState => ({termsAccepted: !prevState.termsAccepted}))
   }

   render() {
      const {handleSubmit, submitting} = this.props;

      return (
         <div className="card mt-3 mb-6 shadow-sm">
            <div className="card-body">
               <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <Field name="username" label="Nom d'utilisateur :" type="text" component={renderField}/>
                  <Field name="password" label="Mot de passe : " type="password" component={renderField}/>
                  <Field name="retypedPassword" label="Confirmer le mot de passe" type="password" component={renderField}/>
                  <Field name="email" label="Email :" type="text" component={renderField}/>
                  <Field name="usergroup" label="Nom et prénom" type="text" component={renderField}/>

                  <div className="form-check form-group">
                     <input className="form-check-input" type="checkbox" 
                           value={false} 
                           onClick={this.onTermsAcceptedClick.bind(this)}/>
                     <label className="form-check-label">J'accepte les termes et conditions</label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-big btn-block" 
                        disabled={submitting || !this.state.termsAccepted}>
                     S'inscrire
                  </button>
               </form>
            </div>
         </div>
      )
   }
}

export default reduxForm({
   form: 'RegisterForm'
})(connect(null, mapDispatchToProps)(RegisterForm));