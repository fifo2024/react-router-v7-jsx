import { createRoot, Root } from "react-dom/client";
import App from "./App.tsx";

const root: Root = createRoot(document.getElementById("root")!);

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            { key: "pass", value: ["read"] },
            { key: "fail", value: ["read"] },
        ]);
    }, 2000);
    // setTimeout(() => {
    //     reject();
    // }, 2000);
})
    .then((res) => {
        console.log("auth::", res);
        root.render(<App auth={res} />);
    })
    .catch((err) => {
        root.render(<div>noauth</div>);
    });
