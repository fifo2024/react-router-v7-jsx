import { NavLink, useLocation } from "react-router";

const About = () => {
    const { state } = useLocation();

    console.log(6, state?.from);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                height: "130vh",
            }}
        >
            About {state?.from}
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/"}>Home</NavLink>
        </div>
    );
};

export default About;
