import React from 'react';
import {Message} from './Message';

export class ImagesList extends React.Component {
   render() {
      const {imagesList} = this.props;

      if (null === imagesList || 0 === imagesList.length) {
         return (<Message message="No image"/>);
      }

      return (
         <div>
            {imagesList.map(image => {
               return (
                     <div>
                        {/* <img src={image.url} alt="" className="img-fluid"/> */}
                        {/* <p>http://sgcuisine{image.url}</p> */}
                        <img src="http://sgcuisine/images/5ef95e1f5c739032024691.png" alt="" className="img-fluid" key={image.id}/>
                     </div>
               );
            })}
         </div>
      )
   }
}