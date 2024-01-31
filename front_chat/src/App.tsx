import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" />
            </Routes>
        </Router>
    );
};

export default App;
