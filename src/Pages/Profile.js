import React, { useEffect } from 'react';
import { Switch, Link , useHistory, Route, useRouteMatch } from 'react-router-dom';
import ViewProfile from '../components/ViewProfile';
import EditProfile from '../components/EditProfile';
import './Profile.css';

const Profile = ({login}) => {
  const history = useHistory();

  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [login, history]);

  const { path, url } = useRouteMatch();

    return (
      <>
      <div className="profile">
        <h1>Profile Page</h1>
        <ul className="nav-links prof-links">
          <li>
            <Link to={`${url}/viewprofile`}>View Profile</Link>
          </li>
          <li>
            <Link to={`${url}/editprofile`}>Edit Profile</Link>
          </li>
        </ul>

        <Switch>
          <Route path={`${path}/viewprofile`} component={ViewProfile} />
          <Route path={`${path}/editprofile`} component={EditProfile} />
        </Switch>
      </div>
      </>
    );
  };
  
  export default Profile;