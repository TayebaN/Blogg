import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import PlayPage from "./Pages/Play";
import AboutPage from "./Pages/About";
import { AuthProvider } from "./contexts/AuthContext";
import LoginComponent from "./Components/LoginComponent";
import Header from "./Components/Header";
import RegisterComponent from "./Components/RegisterComponent";
import { PostProvider } from "./Components/PostContext";
import { UserProvider } from "./contexts/UserContext";
import PrivateRoute from "./Components/ProtectedRoute";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <PostProvider>
          <Router>
            <div className="App">
              <Header />
              <div className="content">
                <Routes>
                  <Route path="/register" element={<RegisterComponent />} />
                  <Route path="/login" element={<LoginComponent />} />
                  <Route
                    path="/"
                    element={<PrivateRoute element={<LandingPage />} />}
                  />
                  <Route
                    path="/play"
                    element={<PrivateRoute element={<PlayPage />} />}
                  />
                  <Route
                    path="/about"
                    element={<PrivateRoute element={<AboutPage />} />}
                  />
                </Routes>
              </div>
            </div>
          </Router>
        </PostProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
