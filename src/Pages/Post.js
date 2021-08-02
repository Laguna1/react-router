import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Post() {
    const { id } = useParams();

    const query = new URLSearchParams(useLocation().search);
    return (
      <>
        <h2>Id is = {id}</h2>
        <br></br>
        <h2>{query.get('first')}</h2>
        <h2>{query.get('last')}</h2>
      </>
    );
  }
  
  export default Post;
