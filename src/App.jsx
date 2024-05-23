import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import PlayPage from "./Pages/Play";
import AboutPage from "./Pages/About";
import LoginForm from "./Components/LoginForm";
import Header from "./Components/Header";
//import ProtectedRoute from "./Components/ProtectedRoute";
import { PostProvider } from "./Components/PostContext";
import { UserProvider, UserContext } from "./contexts/UserContext";
import "./App.css";

const PrivateRoute = ({ element }) => {
  const { user } = useContext(UserContext);
  return user ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <UserProvider>
      <PostProvider>
        <Router>
          <div className="App">
            <Header />
            <div className="content">
              <Routes>
                <Route path="/login" element={<LoginForm />} />
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
  );
};

export default App;
