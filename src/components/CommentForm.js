import React from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';
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
      <div className="card mb-3 mt-3 shadow-sm">
         <div className="card-body">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <Field name="content" label="Ajouter un commentaire : " type="textarea" component={renderField}/>
               <button type="submit" className="btn btn-primary btn-big- btn-block" disabled={submitting}>
                  Commenter
               </button>
            </form>
         </div>
      </div>
      );
   }
}

export default reduxForm({
   form: 'CommentForm'
})(connect(null, mapDispatchToProps)(CommentForm))