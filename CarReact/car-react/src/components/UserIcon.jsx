import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function UserIcon() {
  const user = useSelector((state) => state.user.Data);
  const vendor = useSelector((state) => state.vendor.Data);

    const [classState, setClassState] = useState("userIconMenu");
    const [imageState, setImageState] = useState("userImage");

    const handleHoverEnter = () =>{
        setClassState("userIconMenu userIconMenu2");
        setImageState("userImage userImageHover");
    }
    const handleHoverLeave = () => {
      setClassState("userIconMenu");
        setImageState("userImage");

    };
    const logout = () => {
      localStorage.removeItem("UserID");
      localStorage.removeItem("VendorID");
      localStorage.removeItem("Authorization");
      localStorage.removeItem("ProfileImage");
    };
  return (
    <div className="userIcon" onMouseLeave={handleHoverLeave}>
      <div className={imageState} onMouseEnter={handleHoverEnter}>
        <img src={localStorage.getItem("ProfileImage")} alt="user profile" />
      </div>
      <div className={classState}>
        <Link
          to={
            localStorage.getItem("UserID")
              ? "/MyProfile/RecentViews"
              : "/VendorAdministration"
          }
        >
          My profile
        </Link>
        <Link className="nav-link waves-effect" to={"/"} onClick={logout}>
          Logout
        </Link>
      </div>
    </div>
  );
}
