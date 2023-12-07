import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import AdminDashboard from "scenes/adminDashboard/AdminDashboard";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  // Fetching the current theme mode (light/dark) from the Redux store
  const mode = useSelector((state) => state.mode);

  // Creating a MUI theme based on the current mode
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  // Checking if a user token exists in the Redux store to determine authentication status
  const isAuth = Boolean(useSelector((state) => state.token));

  // Fetching user details from the Redux store
  const user = useSelector((state) => state.user);

  return (
    <div className="app">
      {/* Setting up the router and theme provider for the application */}
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* Defining routes for different pages in the application */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
            <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />

            {/* Admin dashboard route accessible only to users with admin role */}
            <Route path="/admin" element={isAuth && user.role === 'admin' ? <AdminDashboard /> : <Navigate to="/" />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
