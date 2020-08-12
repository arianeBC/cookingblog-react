import React from 'react';
import RegisterForm from './RegisterForm';
import {connect} from 'react-redux';
import ConfirmationForm from './ConfirmationForm';
import {userRegistrationComplete} from '../actions/actions';

const mapStateToProps = state => ({
   ...state.registration
});

const mapDispatchtoProps = {
   userRegistrationComplete
}

class RegistrationContainer extends React.Component {
   constructor(props) {
      super(props);
      this.state = {counter: 10};
   }

   componentDidUpdate(prevProps, prevState) {
      const {confirmationSuccess, history, userRegistrationComplete} = this.props;

      if (prevProps.confirmationSuccess !== confirmationSuccess && confirmationSuccess) {
         this.timer = setInterval(
            () => {
               this.setState(prevState => ({counter: prevState.counter - 1}));
            }, 
            1000
         )
      }

      if (prevState.counter !== this.state.counter && this.state.counter <= 0) {
         userRegistrationComplete();
         history.push('/');
      }
   }

   componentWillUnmount() {
      this.props.userRegistrationComplete();

      if (this.timer) {
         clearInterval(this.timer);
      }
   }

   render() {
      const {registrationSuccess, confirmationSuccess} = this.props;

      if (!registrationSuccess) {
         return <RegisterForm/>;
      }

      if (!confirmationSuccess) {
         return <ConfirmationForm/>
      }

      return (
         <div className="row">
            <div className="col-md-6 mx-auto">
            <h3 className="pt-5 form-name">Félicitation !</h3>
               <div className="card card-body mt-5 body-form-color">
                  <p className="text-form">
                     Vous avez confirmé votre compte. 
                     {/* Vous serez redirigé vers la page d'accueil dans&nbsp;
                     {this.state.counter} secondes */}
                  </p>
                  <a href="/" className="btn btn-primary btn-big btn-block btn-login">Retour à la page principale</a>
               </div>
            </div>
         </div>
      )
   }
}

export default connect(mapStateToProps, mapDispatchtoProps)(RegistrationContainer);