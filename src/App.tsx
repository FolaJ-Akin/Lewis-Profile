import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import X44 from "./components/X44";
import Navbar from "./Navbar";
import F1Standings from "./components/F1Standings";
import EarlyLife from "./components/careerPages/EarlyLife";
import Karting from "./components/careerPages/Karting";
import Formula1 from "./components/careerPages/Formula1";
import FRandF3 from "./components/careerPages/FRandF3";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/EarlyLife" element={<EarlyLife />} />
          <Route path="/Karting" element={<Karting />} />
          <Route path="/FRandF3" element={<FRandF3 />} />
          <Route path="/Formula1" element={<Formula1 />} />
          <Route path="/X44" element={<X44 />} />
          <Route path="/Standings" element={<F1Standings />} />
        </Routes>
      </div>
      <Navbar />
    </BrowserRouter>
  );
}
