import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/layout/navbar";
import "./styles/App.css";
import "./styles/GlobalVars.css";
import Content from "./components/layout/content";
import Footer from "./components/layout/footer";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/signup-page";
import ProfilePage from "./pages/profile";

function App() {
  return (
    <>
      <NavigationBar />
      <Content>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Content>

      <Footer />
    </>
  );
}

export default App;
