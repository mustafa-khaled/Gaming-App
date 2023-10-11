import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Games from "./pages/Games";
import GameSingle from "./pages/GameSingle";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index element={<Home replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="games" element={<Games />} />
        <Route path="games/:id" element={<GameSingle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
