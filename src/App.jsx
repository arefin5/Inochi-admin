import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="w-75">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
