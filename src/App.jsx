import "./App.css";
import Cabecera from "./components/CabeceraRaiki/Cabecera";
import { useContext } from "react";
import { ResponsiveContext } from "./context/Responsive";
import CabeceraScroll from "./components/CabeceraRaikiScroll/CabeceraScroll";
import { Routes, Route} from "react-router-dom";
import { InicioRaiki } from "./routes/InicioRaiki/InicioRaiki";
import { ProfitTrading } from "./routes/ProfitTrading/ProfitTrading";
import KamStudio from "./routes/KamStudio/KamStudio";
import SaldanaGroup from "./routes/SaldanaGroup/SaldanaGroup";

function App() {
  const { windowScroll, windowWidth } = useContext(ResponsiveContext);
  
  return (
    <>
      {windowWidth > 750 ? (
        windowScroll == 0 ? (
          <Cabecera />
        ) : (
          <CabeceraScroll />
        )
      ) : (
        <Cabecera />
      )}
      <div className="dividor" id="dividor"></div>
      <Routes>
        <Route path="/" element={<InicioRaiki />} />
        <Route path="/proyectos/profit-trading" element={ <ProfitTrading/> } />
        <Route path="/proyectos/kam-studio" element={ <KamStudio/> } />
        <Route path="/proyectos/saldana-group" element={ <SaldanaGroup/> } />
      </Routes>
    </>
  );
}

export default App;
