import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {canWritePost} from '../apiUtils';
import {Redirect} from 'react-router';
import {renderField} from '../form';
import {recipeAdd, recipesFormUnload, imageDelete} from '../actions/actions';
import ImageUpload from './ImageUpload';
import {ImageBrowser} from './ImageBrowser';

const mapDispatchToProps = {
   recipeAdd,
   recipesFormUnload,
   imageDelete
};

const mapStateToProps = state => ({
   userData: state.auth.userData,
   ...state.recipesForm
});

class RecipesForm extends React.Component {
   onSubmit(values) {
      const {recipeAdd, reset, history, images} = this.props;

      return recipeAdd(values.category, values.theme, values.title, values.ingredients, values.content, images)
         .then(() => {
            reset();
            history.push('/');
         });
   }

   componentWillUnmount() {
      this.props.recipesFormUnload();
   }

   render () {
      if (!canWritePost(this.props.userData)) {
         return <Redirect to="/login" />
      }

      const {submitting, handleSubmit, error, images, imageReqInProgress, imageDelete} = this.props;

      return (
         <div className="row register-background">
            <div className="col-md-6 mx-auto">
            <h3 className="pt-5 form-name">Ajouter une recette</h3>
               <div className="card card-body mt-5 body-form">
               {error && <div className="alert alert-danger">{error}</div>}
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                     <Field name="title" label="Titre" type="text" component={renderField}/>
                     <Field name="ingredients" label="Ingrédients" type="textarea" component={renderField}/>
                     <Field name="content" label="Préparation" type="textarea" component={renderField} />
                     <Field name="category" label="Catégorie" type="hidden" component={renderField}/>
                     <Field name="theme" label="Thème" type="text" component={renderField}/>

                     <ImageUpload />
                     <ImageBrowser images={images} 
                                    deleteHandler={imageDelete}
                                    isLocked={imageReqInProgress}/>

                     <button type="submit" className="btn btn-primary btn-block btn-login"
                              disabled={submitting || imageReqInProgress}>
                        Publier
                     </button>
                  </form>
               </div>
            </div>
         </div>
      )
   }
}

export default reduxForm({
   form: 'RecipesForm'
})(connect(mapStateToProps, mapDispatchToProps)(RecipesForm));