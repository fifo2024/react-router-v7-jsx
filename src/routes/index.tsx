import { lazy, Suspense } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    RouteObject,
    redirect,
} from "react-router";
import Layout from "@/layouts";
import { loginLoader, authLoader } from "@/loaders";
import { useUserStore, UserState } from "@/stores";

const Home = lazy(() => import("@/modules/Home"));
const Page404 = lazy(() => import("@/modules/Page404"));
// const PageError = lazy(() => import("@/modules/PageError"));
const ErrorBoundary = lazy(() => import("@/modules/ErrorBoundary"));
const Login = lazy(() => import("@/modules/Login"));
const About = lazy(() => import("@/modules/About"));
const Blog = lazy(() => import("@/modules/Blog"));
const NoAuth = lazy(() => import("@/modules/NoAuth"));

const routes = (auth: any): RouteObject[] => {
    const userStore = useUserStore((state: typeof UserState) => state);
    const { user: userInfo, fetchUser } = userStore;

    const getUser = async () => {
        await fetchUser()
            .then((res: any) => {
                // render();
                console.log("fetchUser::", res);
                return res;
            })
            .catch((err: Error) => {
                console.log("fetchUser::catch::", err);
                return null;
                // 未登录，跳转登录页面
            });
    };

    console.log(20, auth);
    return [
        {
            path: "/login",
            element: <Login />,
            ErrorBoundary,
        },
        {
            path: "/",
            loader: async ({ request }) => {
                console.log("request::/", request);
                let user = userInfo;

                if (!userInfo) {
                    // 获取用户信息
                    user = await getUser();
                    console.log(55, user);
                }
                console.log(57, user);
                // if (!user) return redirect("/login");

                return {
                    userInfo: user,
                };
            },
            element: <Layout />,
            // errorElement: <PageError />,
            ErrorBoundary,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "blog/*",
                    loader: async ({ request }) => {
                        console.log("request", request);

                        // const isLogin = await loginLoader();
                        // console.log("isLogin", isLogin);

                        // if (!isLogin) return redirect("/login");

                        const isAuth = await authLoader({
                            authKey: "fail",
                            authTypes: ["read", "write"],
                        });
                        console.log("isAuth", isAuth);

                        if (!isAuth) return <NoAuth />;

                        return {
                            data: "home",
                        };
                    },
                    element: <Blog />,
                },
                {
                    path: "about",
                    element: <About />,
                },
            ],
        },
        {
            path: "*",
            element: <Page404 />,
        },
    ];
};

const Router = ({ auth }: any) => {
    const router = createBrowserRouter(routes(auth));

    return (
        <Suspense fallback={null}>
            <RouterProvider router={router} />
        </Suspense>
    );
};

export default Router;
