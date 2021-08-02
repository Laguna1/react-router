import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Profile = ({login}) => {
  const history = useHistory();

  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [login, history]);

    return (
      <div className="profile">
        <h1>Profile</h1>
      </div>
    );
  };
  
  export default Profile;