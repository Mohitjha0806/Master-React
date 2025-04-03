import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LogoutPage from "./LogoutPage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page - Separate */}
        <Route path="/" element={<LoginPage />} />

        {/* Protected Routes under Layout */}
        <Route path="/layout" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Logout Page */}
        <Route path="/logoutPage" element={<LogoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
