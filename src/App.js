import "./App.css";
import RoutesLink from "./routes/route";

function App() {
    console.log(process.env.REACT_APP_API_KEY, "api key");
    return (
        <div className="App">
            <RoutesLink />
        </div>
    );
}

export default App;
