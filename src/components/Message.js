import React from 'react';
import './Message.css';

export class Message extends React.Component {
   render() {
      const {message} = this.props;

      return (
         <div className="comments">
         <div className="row">
            <div className="offset-lg-2 col-lg-8 col-sm-12">
               <div className="card-text">
                  {message}
               </div>
            </div>
         </div>
         </div>
      );
   }
}