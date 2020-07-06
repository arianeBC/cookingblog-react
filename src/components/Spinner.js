import React from 'react';

export class Spinner extends React.Component {
   render() {
      return (
         <div className="container-fluid padding pt-5">
            <div className="row padding">
               <div className="col-12 d-flex justify-content-center">
                  <i className="fas fa-spinner fa-spin"/>
               </div>
            </div>
         </div>
      );
   }
}