import { Outlet, useLoaderData } from "react-router";

const LayoutIndex = () => {
    const loaderData = useLoaderData();
    console.log("layouts::loader::data", loaderData);

    return (
        <div>
            <div>head</div>
            <div>
                <Outlet />
            </div>
            <div>foot</div>
        </div>
    );
};

export default LayoutIndex;
