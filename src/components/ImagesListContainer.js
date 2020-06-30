import React from 'react';
import {imagesListFetch, imagesListUnload} from '../actions/actions';
import {connect} from 'react-redux';
import {ImagesList} from './ImagesList';

const mapStateToProps = state => ({
   ...state.imagesList
});

const mapDispatchToProps = {
   imagesListFetch,
   imagesListUnload
};

class ImagesListContainer extends React.Component {
   componentDidMount() {
      this.props.imagesListFetch(this.props.recipeId);
   }

   componentWillUnmount() {
      this.props.imagesListUnload();
   }

   render() {
      const {imagesList} = this.props;
      return (
            <ImagesList imagesList={imagesList} />
      )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesListContainer);