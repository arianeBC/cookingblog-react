import React from 'react';

import "./ImageUpload.css"

export class ImageUpload extends React.Component {
   render() {
      return (
         <div className="form-group image-upload">
            <input type="file" 
                  className="form-control-file text-primary font-weight-bold" 
                  data-title="
                  Cliquez ici ou faites glisser votre fichier pour ajouter une image"
            />
         </div>
      )
   }
}