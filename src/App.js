import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./common/PageNotFound";
import Exchanges from "./components/Exchanges";
import {
  CryptoCuurencies,
  HomePage,
  News,
  NavBar,
  CryptoDetails,
} from "./components/Index";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="BodyContainer">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/coins" element={<CryptoCuurencies />} />
            <Route path="/coins/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
