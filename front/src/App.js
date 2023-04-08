import { useEffect, useState } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import MainRoutes from "./Routes/MainRoutes";
import ChelModal from "./chel/ChelModal";
import chelImg from "./images/chel.png";
import { useChel } from "./Contexts/ChelContext";

function App() {
    const [chel, setChel] = useState(false);
    const {
        checked1,
        setCheked1,
        checked2,
        setCheked2,
        checked3,
        setCheked3,
        setCheked4,
        border,
        checked4,
    } = useChel();
    useEffect(() => {
        border();
    }, [checked2]);
    return (
        <div className={`App ${checked1 && "filterEst"} ${checked4 && "mono"}`}>
            {chel && <ChelModal setChelModalState={setChel} />}
            {!chel && (
                <div
                    className="pomogator"
                    style={{
                        position: "fixed",
                        top: "40vh",
                        left: "20px",
                        width: "50px",
                        zIndex: "100",
                        cursor: "pointer",
                    }}
                    onClick={() => setChel(true)}
                >
                    <img width="100%" src={chelImg} alt="" />
                </div>
            )}
            <Navbar />
            <MainRoutes />
            <Footer />
        </div>
    );
}

export default App;
