import React from "react";
import "./UserCard.css";
import propTypes from "prop-types";

const UserCard = ({
  imageURL,
  avatarShape ="round",
  name,
  description="Testing Description",
  backgroundcolor ='red',
  title,
}) => {
  return (
    <div data-testid="usercard" className={`usercard ${backgroundcolor}`}>
    {imageURL && (<div className={`${avatarShape }`}>
      
       <img src={imageURL} alt="profile-pic" className="userImage" />
    </div>)}
      
      <div className="userInformation">
        <div className="userName">{name}</div>
        <div className="userTitle">{title}</div>
        <div className="userDescription">{description}</div>
      </div>
      {/* UserCard */}
    </div>
  );
};

UserCard.propTypes={
  imageURL: propTypes.string,
  avatarShape: propTypes.string,
  name:propTypes.string.isRequired,
  description:propTypes.string,
  backgroundcolor: propTypes.string,
  title : propTypes.string,
}

export default UserCard;
