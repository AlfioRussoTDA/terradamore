import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ContactPage from "./pages/ContactPage";
import EditorialPage from "./pages/EditorialPage";
import HomePage from "./pages/HomePage";
import NetworkPage from "./pages/NetworkPage";
import NotFoundPage from "./pages/NotFoundPage";
import PhygitalPage from "./pages/PhygitalPage";
import ProducerDetailPage from "./pages/ProducerDetailPage";
import ProducersPage from "./pages/ProducersPage";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/approccio-phygital" element={<PhygitalPage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/produttori" element={<ProducersPage />} />
          <Route path="/produttori/:slug" element={<ProducerDetailPage />} />
          <Route path="/editoria" element={<EditorialPage />} />
          <Route path="/editoria/:slug" element={<ArticlePage />} />
          <Route path="/chi-siamo" element={<AboutPage />} />
          <Route path="/contatti" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
