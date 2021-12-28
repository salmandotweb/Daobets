import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import AppPage from "./pages/AppPage";
import DaoPage from "./pages/DaoPage";
import Dashboard from "./pages/DashboardPage/Dashboard";
import MarketPlacePage from "./pages/MarketPlacePage/MarketPlacePage";
import ItemsListed from "./pages/ItemsListed/ItemsListed";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import SkinsPage from "./pages/SkinsPage/SkinsPage";
import ShopPage from "./pages/ShopPage/ShopPage";
import { Route, Routes } from "react-router-dom";
import EventsPage from "./pages/EventsPage/EventsPage";
import Loader from "./components/Loader/Loader";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<MarketPlacePage />} />
          <Route path="/apppageos" element={<AppPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/dao" element={<DaoPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/itemslisted" element={<ItemsListed />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/bets" element={<SkinsPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
