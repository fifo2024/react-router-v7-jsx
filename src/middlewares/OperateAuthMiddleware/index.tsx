import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router";
import NoAuth from "@/modules/NoAuth";

interface MiddlewareProps {}

const OperateAuthMiddleware: FC<MiddlewareProps> = () => {
    const [isAuth, setAuth] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAuth(-1);
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return isAuth === 1 ? (
        <div className="middleware-operate">{<Outlet />}</div>
    ) : isAuth === -1 ? (
        <NoAuth />
    ) : (
        <span>Auth Checking...</span>
    );
};

export default OperateAuthMiddleware;
