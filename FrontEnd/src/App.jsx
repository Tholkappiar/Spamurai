import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/Sign-up";
import HomePage from "./HomePage";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Header from "./Components/Header";
import CTA from "./Components/CTA";
import "bootstrap/dist/css/bootstrap.min.css";
import SpamCheckPage from "./Pages/SpamCheckPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          {/* SpamDetectionApp later change this back to homapage */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} /> */}
          <Route path="/#product" element={<Hero />} />
          <Route path="/#impact" element={<Header />} />
          <Route path="/#stats" element={<Stats />} />
          <Route path="/#spam-free" element={<CTA />} />
          {/* <Route path="/auth/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} /> */}
          <Route path="/spamcheck" element={<SpamCheckPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Route path="*" element={<Page_404/>} /> */}
    </>
  );
}

export default App;
