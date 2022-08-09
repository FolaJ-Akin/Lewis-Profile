import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Career from "./components/Career";
import X44 from "./components/X44";
import Navbar from "./Navbar";
import F1Standings from "./components/F1Standings";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/X44" element={<X44 />} />
          <Route path="/Standings" element={<F1Standings />} />
        </Routes>
      </div>
      <Navbar />
    </BrowserRouter>
  );
}
