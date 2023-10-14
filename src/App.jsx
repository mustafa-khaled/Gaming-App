import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Games from "./pages/Games";
import GameSingle from "./components/games/GameSingle";
import Footer from "./components/Footer";
import Stores from "./pages/Stores";
import StorySingle from "./components/stores/StorySingle";
import Creators from "./pages/Creators";

import CreatorSingle from "./components/creators/CreatorSingle";

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
        <Route path="stores" element={<Stores />} />
        <Route path="story/:id" element={<StorySingle />} />
        <Route path="creators" element={<Creators />} />
        <Route path="creator/:id" element={<CreatorSingle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
