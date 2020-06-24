import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {renderField} from '../form';

class ConfirmationForm extends React.Component {
   onSubmit(values) {
      
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
               <Field name="username" label="Nom d'utilisateur :" 
                     type="text" component={renderField}/>

               <button type="submit" className="btn btn-primary btn-big btn-block" 
                     disabled={submitting}>
                  Confirmer votre email
               </button>
            </form>
         </div>
      </div>
      )
   }
}

export default reduxForm({
   form: 'ConfirmationForm'
})(ConfirmationForm);