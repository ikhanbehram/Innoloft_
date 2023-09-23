import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "../../assets/svgComponents";

function Breadcrumb() {
  const { pathname } = useLocation();
  return (
    <div className="flex gap-3">
      <Link to="/">
        <HomeIcon />
      </Link>
      {pathname
        .split("/")
        .filter(Boolean)
        .map((path) => {
          return (
            <div className="text-sm text-gray-500 font-mono font-bold ">
              / {path}
            </div>
          );
        })}
    </div>
  );
}

export default Breadcrumb;
