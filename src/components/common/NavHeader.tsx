import { Link } from "react-router-dom";
import PersonPNG from "../../assets/person.png";
import { PATH } from "../../utils/paths";

const NavHeader = () => {
  const isLoggedIn = localStorage.getItem("token") !== null;

  return (
    <div className="absolute top-0 left-0 z-50 w-full p-8 flex justify-between">
      <img
        src="http://tkfile.yes24.com/imgNew/common/pf-logoN-w.png"
        className="h-8"
      />
      <Link to={isLoggedIn ? "" : PATH.LOGIN}>
        <img src={PersonPNG} className="w-6 h-6 text-white" />
      </Link>
    </div>
  );
};

export default NavHeader;
