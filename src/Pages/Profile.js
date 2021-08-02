import React, { useEffect } from 'react';
import { Switch, Link , useHistory, Route } from 'react-router-dom';

const Profile = ({login}) => {
  const history = useHistory();

  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [login, history]);

    return (
      <>
      <div className="profile">
        <h1>Profile Page</h1>
        <ul>
          <li>
            <Link to="/viewprofile">View Profile</Link>
          </li>
          <li>
            <Link to="/editprofile">Edit Profile</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/viewprofile" />
          <Route path="/editprofile" />
        </Switch>
      </div>
      </>
    );
  };
  
  export default Profile;