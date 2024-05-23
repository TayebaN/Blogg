import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import PlayPage from "./Pages/Play";
import AboutPage from "./Pages/About";
import Header from "./Components/Header";
import { PostProvider } from "./Components/PostContext";
import { UserProvider } from "./contexts/UserContext";
import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <PostProvider>
        <Router>
          <div className="App">
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/play" element={<PlayPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </div>
          </div>
        </Router>
      </PostProvider>
    </UserProvider>
  );
};

export default App;
