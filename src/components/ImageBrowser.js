import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export class ImageBrowser extends React.Component {
   render () {
      const {images, deleteHandler, isLocked} = this.props;
      return (
         <div className="row mt-4 mb-4">
            <TransitionGroup component={null}>
            {
               images.map(image => {
                  const onClickDeleteImage = (event) => {
                     event.preventDefault();
                     deleteHandler(image.id);
                  };
                  return (
                     <CSSTransition timeout={600} classNames="fade" key={image.id}> 
                        <div className="col-md-6 col-lg-4">
                           <div className="mt-2 mb-2">
                              <img src={`http://sgcuisine${image.url}`}
                                    className="img-fluid" alt=""/>
                           </div>
                           <div>
                              <button type="button" 
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={onClickDeleteImage}
                                    disabled={isLocked}>Supprimer
                              </button>
                           </div>
                        </div>
                     </CSSTransition>
                  )
               })
            }
            </TransitionGroup>
         </div>
      )
   }
}