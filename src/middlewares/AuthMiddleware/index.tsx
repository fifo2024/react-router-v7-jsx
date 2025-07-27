import { FC } from "react";
import { Outlet } from "react-router";

interface MiddlewareProps {}

const AuthMiddleware: FC<MiddlewareProps> = () => {
    return <div className="middleware-admin">{<Outlet />}</div>;
};

export default AuthMiddleware;
