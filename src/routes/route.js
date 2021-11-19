import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/homepage/homepage";

function RoutesLink() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route path="/genre/:id" element={<Home />} /> */}
            </Routes>
        </Router>
    );
}

export default RoutesLink;
