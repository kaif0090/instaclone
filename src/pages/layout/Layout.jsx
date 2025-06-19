import { Outlet, NavLink } from "react-router-dom";
import "./layout.css";

import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { BiLogoInstagramAlt, BiSolidMessageRoundedCheck } from "react-icons/bi";
import { IoIosHeart } from "react-icons/io";

export default function Layout() {
  return (
    <div className="container-fluid layout-container">
      <div className="row flex-nowrap min-vh-100">
        {/* Sidebar */}
        <div className="col-xl-2 bg-light p-4 layout-sidebar col-md-3 col-lg-3 col-sm-3  ">
          <h1 className="mb-4">
            <i>Instagram</i>
          </h1>
          <nav className="d-flex flex-column gap-2">
            <NavLink to="/layout/" className="Navlinks">
              <FaHome style={{ marginLeft: "-10px" }} />
              <p className="p">Home</p>
            </NavLink>

            <NavLink to="/layout/about" className="Navlinks">
              <FaSearch />
              <p className="p">Explore</p>
            </NavLink>

            <NavLink to="/layout/upload" className="Navlinks">
              <FiUpload style={{ marginLeft: "-13px" }} />
              <p className="p">Create</p>
            </NavLink>

            <NavLink to="/layout/reel" className="Navlinks">
              <BiLogoInstagramAlt size={20} style={{ marginLeft: "-20px" }} />
              <p className="p">Reels</p>
            </NavLink>

            <NavLink to="/Layout/notification" className="Navlinks">
              <IoIosHeart style={{ marginLeft: "23px" }} />
              <p className="p">Notification</p>
            </NavLink>

            <NavLink to="/Layout/message" className="Navlinks">
              <BiSolidMessageRoundedCheck />
              <p className="p">Message</p>
            </NavLink>

            <NavLink to="/layout/profile" className="Navlinks">
              <FaUser style={{ marginLeft: "-15px" }} />
              <p className="p">Profile</p>
            </NavLink>
          </nav>
        </div>

        <div className="col-xl-12   p-4 layout-bottum col-md-12 col-lg-12 col-sm-12">
          <nav className="laynav">
            <NavLink to="/layout/" className="Navlinksss">
              <FaHome style={{}}  size={30}/>
            </NavLink>

            <NavLink to="/layout/about" className="Navlinksss">
              <FaSearch size={30}/>
            </NavLink>

            <NavLink to="/layout/upload" className="Navlinksss">
              <FiUpload style={{}}  size={30}/>
            </NavLink>

            <NavLink to="/layout/reel" className="Navlinksss">
              <BiLogoInstagramAlt size={30} style={{}} />
            </NavLink>

            <NavLink to="/Layout/notification" className="Navlinksss">
              <IoIosHeart style={{}}size={30} />
            </NavLink>

            <NavLink to="/Layout/message" className="Navlinksss">
              <BiSolidMessageRoundedCheck size={30}/>
            </NavLink>

            <NavLink to="/layout/profile" className="Navlinksss">
              <FaUser style={{}} size={30}/>
            </NavLink>
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-xl-10 col-md-9 col-lg-9 col-sm-9 p-4 layout-content outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
