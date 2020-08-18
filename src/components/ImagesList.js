import React from 'react';
import {Message} from './Message';

export class ImagesList extends React.Component {
   render() {
      const {imagesList} = this.props;

      if (null === imagesList || 0 === imagesList.length) {
         return (<Message message="Aucune image"/>);
      }

      return (
         <div>
            {imagesList.map(image => {
               return (
                     <div key={image.id}>
                        <img src={`http://api.arianedes.com${image.url}`} alt="" className="img-fluid"/>
                     </div>
               );
            })}
         </div>
      )
   }
}