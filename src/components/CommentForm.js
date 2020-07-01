import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {renderField} from '../form';
import {commentAdd} from '../actions/actions';

const mapDispatchToProps = {
   commentAdd
}

class CommentForm extends React.Component {
   onSubmit(values) {
      const {commentAdd, recipeId, reset} = this.props;
      return commentAdd(values.content, recipeId).then(() => reset());
   }

   render() {
      const {handleSubmit, submitting} = this.props;

      return (
      <div className="row">
         <div className="col-md-10 col-sm-12 mx-auto">
            <div className="card-body body-form body-comment">
               <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <Field name="content" label="Ajouter un commentaire : " type="textarea" component={renderField}/>
                  <button type="submit" className="btn btn-primary btn-big- btn-block btn-login" disabled={submitting}>
                     Commenter
                  </button>
               </form>
            </div>
         </div>
      </div>
      );
   }
}

export default reduxForm({
   form: 'CommentForm'
})(connect(null, mapDispatchToProps)(CommentForm))