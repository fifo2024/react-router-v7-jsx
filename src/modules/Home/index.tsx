import { NavLink, useNavigate, useLocation, useLoaderData } from "react-router";

const Home = () => {
    const navigate = useNavigate();
    const loaderData = useLoaderData();
    const { state } = useLocation();
    console.log("home::state", state);
    console.log("home::loader::data", loaderData);
    // throw new Error();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "130vh",
            }}
        >
            <NavLink to={"/about"}>About</NavLink>
            <NavLink replace to={"/about"}>
                About Replace
            </NavLink>
            <NavLink state={{ from: "home" }} to={"/about"}>
                About State
            </NavLink>
            <NavLink reloadDocument to={"/about"}>
                About reloadDocument
            </NavLink>
            <NavLink viewTransition to={"/about"}>
                About viewTransition
            </NavLink>
            <NavLink preventScrollReset to="/about">
                About preventScrollReset
            </NavLink>
            <NavLink to={"/blog"}>Blog Home</NavLink>
            <NavLink to={"/blog/list"}>Blog List</NavLink>
            <NavLink to={"/blog/1234"}>Blog Detail</NavLink>
            <NavLink to={"/404"}>404</NavLink>
            <div
                onClick={() => {
                    navigate("/about", {
                        replace: true,
                        relative: "path",
                        state: {
                            from: "home-navigate",
                        },
                        viewTransition: true,
                        preventScrollReset: true,
                    });
                }}
            >
                Navigate 跳转
            </div>
            <div>loader: {loaderData?.data}</div>
        </div>
    );
};

export default Home;
