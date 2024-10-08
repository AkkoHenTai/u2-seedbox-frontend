import  { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router";

function App() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <AppRoutes />
            </Suspense>
        </Router>
    );
}

export default App;
