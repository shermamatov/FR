import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import MainRoutes from "./Routes/MainRoutes";

function App() {
    return (
        <div className="App">
            <Navbar />
            <MainRoutes />
            <Footer />
        </div>
    );
}

export default App;
