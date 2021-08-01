import React from 'react';

function Post({match}) {
    return (
      <div className="post">
        <h2>Id is = {match.params.id}</h2>
      </div>
    );
  }
  
  export default Post;
