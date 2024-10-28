import { Link, useNavigate } from "react-router-dom";
import PersonPNG from "../../assets/person.png";
import { PATH } from "../../utils/paths";

const NavHeader = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token") !== null;

  const onClick = () => {
    if (isLoggedIn) {
      const answer = confirm("로그아웃하시겠습니까?");
      if (answer) {
        localStorage.removeItem("token");
        navigate(PATH.LOGIN);
      }
    } else {
      navigate(PATH.LOGIN);
    }
  };

  return (
    <div className="absolute top-0 left-0 z-50 w-full p-8 flex justify-between">
      <img
        src="http://tkfile.yes24.com/imgNew/common/pf-logoN-w.png"
        className="h-8"
      />
      <button onClick={onClick}>
        <img src={PersonPNG} className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default NavHeader;
