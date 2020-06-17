import React from 'react';

class RecipesList extends React.Component {

   render() {
      const {posts, isFetching} = this.props;

      if (isFetching) {
         return(<div><i className="fas fa-spinner fa-spin"/></div>);
      }

      if (null === posts || 0 === posts.length) {
         return (<div>No blog posts</div>);
      }

      return (<div>
         <ul>
            {posts && posts.map(post => (<li key={post.id}>{post.title}</li>))}
         </ul>
      </div>)
   }
}

export default RecipesList;