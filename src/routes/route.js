import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/homepage/homepage";
import GameDetail from "../pages/gamedetail/gamedetail";
function RoutesLink() {
    return (
        <Router>
            <Routes>
                {/* <Route index element={<UsersIndex />} />
             <Route path=":id" element={<UserProfile />} /> */}
                <Route exact path="" element={<Home />} />
                <Route exact path="gamedetail/:id" element={<GameDetail />} />
            </Routes>
        </Router>
    );
}

export default RoutesLink;
