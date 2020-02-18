import React from "react";
import Profile from "./Profile";
import PropTypes from 'prop-types';




function ProfileList(props){

  return(
    <div>
    <h1>Homepage</h1>
    {props.profileList.map((profile,index) =>
      <Profile name={profile.name}
      image={profile.image}
      status={profile.status}
      key={profile.id}/>
    )}
    </div>
  );
}

  ProfileList.propTypes = {
  profileList: PropTypes.array
};
  export default ProfileList;
