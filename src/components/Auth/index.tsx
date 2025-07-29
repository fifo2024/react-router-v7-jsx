import { FC, ReactNode } from "react";

import { NoAuth } from "@/components";

export interface AuthProps {
    authKey: string;
    authTypes: string[];
    children: ReactNode;
}

const Auth: FC<AuthProps> = ({ children, authKey, authTypes }) => {
    // const isAuth = data?.isAuth;
    // console.log(6, data, data?.isAuth);
    let isAuth = false;
    if (authKey === "pass") {
        isAuth = true;
    } else if (authKey === "fail") {
        isAuth = false;
    }

    return isAuth ? children : <NoAuth />;
};

export default Auth;
