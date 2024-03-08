import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Issue } from "./pages/Issue";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/:postNumber" element={<Issue/>}/>
        </Routes>
    )
}