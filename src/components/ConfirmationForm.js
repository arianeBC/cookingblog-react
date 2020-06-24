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
         <div className="card mt-3 mb-6 shadow-sm">
         <div className="card-body">
            <p className="card-text">
               Veuillez entrer le code que vous avez reçu par email
            </p>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <Field name="confirmationToken" label="Code de confirmation : " 
                     type="text" component={renderField}/>

               <button type="submit" className="btn btn-primary btn-big btn-block" 
                     disabled={submitting}>
                  Confirmer
               </button>
            </form>
         </div>
      </div>
      )
   }
}

export default reduxForm({
   form: 'ConfirmationForm'
})(connect(null, mapDispatchToProps)(ConfirmationForm));