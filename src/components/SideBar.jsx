import NavigationLink from "./NavigationLink";

const SideBar = () => {
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Students",
      path: "/students",
    },
    {
      name: "Create Blog",
      path: "/create-blog",
    },
    {
      name: "Accounts",
      path: "/accounts",
    },
    {
      name: "Address",
      path: "/address",
    },
    {
      name: "Documentation",
      path: "/documentation",
    },
    {
      name: "Create- Quistion",
      path: "/create-question",
    },
    {
      name: "Branch",
      path: "/branch",
    },
    {
      name: "Video course",
      path: "/video-course",
    },
    {
      name: "Tuition fee",
      path: "/tuition-fee",
    },
    {
      name: "Update session",
      path: "/update-session",
    }, {
      name: "Team Create",
      path: "/team-create",
    },
  ];

  return (
    <aside style={{ backgroundColor: "#F2F2F2" }} className="w-25">
      <div className="d-flex flex-column align-items-center px-4 pt-4 ">
        <img
          src="./vite.svg"
          alt="Avatar"
          height={100}
          width={100}
          className="rounded-circle"
        />
        <div className="text-center mt-3">
          <h5 className="m-0">Md Rafiqul Islam</h5>
          <p className="text-secondary fs-6">Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="m-0">
        <ul className="list-unstyled">
          {routes.map((route, idx) => (
            <NavigationLink key={idx} path={route.path}>
              {route.name}
            </NavigationLink>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
