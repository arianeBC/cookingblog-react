import React from 'react';
import {connect} from "react-redux";
import "./ImageUpload.css";
import {imageUpload} from "../actions/actions";

const mapDispatchToProps = {
   imageUpload
};

class ImageUpload extends React.Component {
   onChange(e) {
      console.log(e.target);
      console.log(e.target.files[0]);
      const file = e.target.files[0];
      this.props.imageUpload(file);
   }

   render() {
      return (
         <div className="form-group image-upload">
            <input type="file"
                  onChange={this.onChange.bind(this)}
                  className="form-control-file text-primary font-weight-bold"
                  data-title="Cliquez ici ou faites glisser votre fichier pour ajouter une image"
            />
         </div>
      )
   }
}

export default connect(null, mapDispatchToProps)(ImageUpload);