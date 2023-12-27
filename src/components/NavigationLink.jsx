import { Link, useLocation } from "react-router-dom";

const NavigationLink = ({ children, path }) => {
  let location = useLocation();
  const isActive = location.pathname === path;
  return (
    <li className={`${isActive ? "active-nav" : ""} p-2 px-4 fw-medium w-100`}>
      <Link to={path} className="link">
        {children}
      </Link>
    </li>
  );
};

export default NavigationLink;
