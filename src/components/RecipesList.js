import React from 'react';

class RecipesList extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      const {posts} = this.props;

      return (<div>
         <ul>
            {posts && posts.map(post => (<li key={post.id}>{post.title}</li>))}
         </ul>
      </div>)
   }
}

export default RecipesList;