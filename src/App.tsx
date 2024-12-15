import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Example component
import GifDetails from "./pages/GifDetail.tsx";
import GifRank from "./pages/GifRank.tsx"; // Example component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gif/:id" element={<GifDetails />} />
        <Route path="/rankings" element={<GifRank />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
