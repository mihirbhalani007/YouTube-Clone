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
    <nav className="flex items-center justify-between p-2 bg-white shadow">
      <div className="flex items-center space-x-2">
        <img src={menu_icon} alt="Menu" className="h-6" />
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search.."
          className="border p-1 rounded"
        />
        <img src={search_icon} alt="Search" className="h-6 cursor-pointer" />
      </div>
      <div className="flex items-center space-x-2">
        <img src={upload_icon} alt="Upload" className="h-6 cursor-pointer" />
        <img src={more_icon} alt="More" className="h-6 cursor-pointer" />
        <img
          src={notification_icon}
          alt="Notifications"
          className="h-6 cursor-pointer"
        />
        <img src={profile_icon} alt="Profile" className="h-8 rounded-full" />
      </div>
    </nav>
  );
};

export default Navbar;
