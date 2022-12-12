import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/stories" index element={<Stories />} />
      <Route path="/features" index element={<Features />} />
      <Route path="/pricing" index element={<Pricing />} />
    </Routes>
  );
}

export default App;
