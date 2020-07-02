import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {renderField} from '../form';
import {connect} from 'react-redux';
import {userConfirm} from '../actions/actions';

const mapDispatchToProps = {
   userConfirm
};

class ConfirmationForm extends React.Component {
   onSubmit(values) {
      return this.props.userConfirm(values.confirmationToken)
         .then(() => {
            this.props.reset();
         });
   }

   render() {
      const {handleSubmit, submitting} = this.props;

      return (
         <div className="row">
            <div className="col-md-6 mx-auto">
            <h3 className="pt-5 form-name">Confirmez votre adresse email</h3>
               <div className="card card-body mt-5 body-form-color">
                  <p className="text-form">Merci d'avoir créé un compte ! Veuillez entrer le code que vous avez reçu par email.</p>
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                     <Field name="confirmationToken" label="Code de confirmation : " 
                           type="text" component={renderField}/>

                     <button type="submit" className="btn btn-primary btn-big btn-block btn-login" 
                           disabled={submitting}>
                        Confirmer
                     </button>
                  </form>
               </div>
            </div>
         </div>
      )
   }
}

export default reduxForm({
   form: 'ConfirmationForm'
})(connect(null, mapDispatchToProps)(ConfirmationForm));