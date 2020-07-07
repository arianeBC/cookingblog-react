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
                        <img src={image.url} alt="" className="img-fluid"/>
                        {/* <p>http://sgcuisine{image.url}</p> */}
                        {/* <img src="http://sgcuisine/images/5efbe9a4a1404818118677.jpg" alt="" className="img-fluid" key={image.id}/> */}
                     </div>
               );
            })}
         </div>
      )
   }
}