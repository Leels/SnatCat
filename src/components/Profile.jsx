import React from "react";
import PropTypes from "prop-types";

function Profile(props){
  return (
    <div>
    <h3>{props.name}</h3>
    <img src={props.image} />
    <p><em>{props.status}</em></p>
    <hr/>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  status: PropTypes.string.isRequired
};

export default Profile;
