import BerandaPage from "./pages/homePage.jsx";
import NotFoundPage from "./pages/notFoundPage.jsx";
import ContactPage from "./pages/contactPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BerandaPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/info" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
