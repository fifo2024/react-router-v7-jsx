import { lazy, Suspense } from "react";
import { useRoutes, RouteObject, redirect } from "react-router";

const Page404 = lazy(() => import("@/modules/Page404"));
const ErrorBoundary = lazy(() => import("@/modules/ErrorBoundary"));
const BlogIndex = lazy(() => import("@/modules/Blog/BlogIndex"));
const BlogList = lazy(() => import("@/modules/Blog/BlogList"));
const BlogDetail = lazy(() => import("@/modules/Blog/BlogDetail"));

export const routes: RouteObject[] = [
    {
        index: true,
        loader: async ({ request }) => {
            console.log("request::/", request);
            const isLogin = await new Promise((resolve, reject) => {
                resolve(true);
                // reject(false);
            }).catch(() => {
                return false;
            });
            console.log("isLogin", isLogin);
            if (!isLogin) return redirect("/login");
            return {
                data: "login",
            };
        },
        element: <BlogIndex />,
        // errorElement: <PageError />,
        ErrorBoundary,
    },
    {
        path: "/list",
        loader: async ({ request }) => {
            console.log("request::/", request);
            const isLogin = await new Promise((resolve, reject) => {
                resolve(true);
                // reject(false);
            }).catch(() => {
                return false;
            });
            console.log("isLogin", isLogin);
            if (!isLogin) return redirect("/login");
            return {
                data: "login",
            };
        },
        element: <BlogList />,
        // errorElement: <PageError />,
        ErrorBoundary,
    },
    {
        path: "/:slug",
        loader: async ({ request }) => {
            console.log("request::/", request);
            const isLogin = await new Promise((resolve, reject) => {
                resolve(true);
                // reject(false);
            }).catch(() => {
                return false;
            });
            console.log("isLogin", isLogin);
            if (!isLogin) return redirect("/login");
            return {
                data: "login",
            };
        },
        element: <BlogDetail />,
        // errorElement: <PageError />,
        ErrorBoundary,
    },
    {
        path: "*",
        element: <Page404 />,
    },
];

export default function Router() {
    const element = useRoutes(routes);
    return <Suspense fallback={null}>{element}</Suspense>;
}
