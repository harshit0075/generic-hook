import React from "react";
import "./UserCard.css";
import Proptypes from "prop-types";

const UserCard = ({
  imagURL,
  avatarShape ="round",
  name,
  description="Testing Description",
  backgroundcolor ='red',
  title,
}) => {
  return (
    <div data-testid="usercard" className={`usercard ${backgroundcolor}`}>
      {imagURL && (
        <div className={`${avatarShape}`}>
        <img src={imagURL} alt="profile-pic" className="userImage" />
        </div>
      )}
      <div className="userInformation">
        <div className="userName">{name}</div>
        <div className="userTitle">{title}</div>
        <div className="userDescription">{description}</div>
      </div>
      {/* UserCard */}
    </div>
  );
};

UserCard.prototype={
  imagURL: Proptypes.string,
  avatarShape: Proptypes.string,
  name:Proptypes.string.isRequired,
  description:Proptypes.string,
  backgroundcolor: Proptypes.string,
  title : Proptypes.string,
}

export default UserCard;
