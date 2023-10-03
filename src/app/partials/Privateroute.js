import React from 'react'
import {Navigate} from 'react-router-dom';
import JobSeeker from '../pages/users/candidate/JobSeeker';

const PrivateRoute = ({isLoggedIn}) => {
  if(isLoggedIn) {
    return <JobSeeker/>;
  }
  else {
    return <Navigate to="/login"/>
  }
}

export default PrivateRoute;
