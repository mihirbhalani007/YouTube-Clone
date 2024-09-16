import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/user_profile.jpg";

const Navbar = () => {
  return (
    <nav className="flex">
      <div className="flex-none">
        <img src={menu_icon} alt="menu-icon" />
        <img src={logo} alt="menu-icon" />
      </div>
      <div className="flex-1">
        <div className="justify-center">
          <input type="text" placeholder="Search.." />
          <img src={search_icon} alt="search icon" />
        </div>
      </div>
      <div className="flex-none">
        <img src={upload_icon} alt="upload icon" />
        <img src={more_icon} alt="more icon" />
        <img src={notification_icon} alt="notification icon " />
        <img src={profile_icon} alt="profile icon" />
      </div>
    </nav>
  );
};

export default Navbar;
