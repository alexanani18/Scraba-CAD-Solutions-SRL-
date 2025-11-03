import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrabaCADPage from "./component/ScrabaCADpage";
import PoliticaDeConfidentialitate from "./component/PoliticaDeConfidentialitate";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScrabaCADPage />} />
        <Route
          path="/politica-de-confidentialitate"
          element={<PoliticaDeConfidentialitate />}
        />
      </Routes>
    </Router>
  );
}