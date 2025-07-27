import { useEffect } from "react";

import Router from "@/routes";

function App({ auth }: any) {
    return <Router auth={auth} />;
}

export default App;
