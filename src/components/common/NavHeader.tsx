import clsx from "clsx";
import { useLocation } from "react-router-dom";

const NavHeader = () => {
  const pathname = useLocation().pathname;
  console.log(pathname);
  return (
    <div className="absolute top-0 left-0 z-50 w-full p-8">
      <img
        src="http://tkfile.yes24.com/imgNew/common/pf-logoN-w.png"
        className="h-8"
      />
    </div>
  );
};

export default NavHeader;
