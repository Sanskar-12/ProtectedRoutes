import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Profile from "./Profile";
import MyOrders from "./myOrders";
import MyBlog from "./myBlog";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const Header = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/admin/dashboard">Dashboard</Link>
    <Link to="/login">Login</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/myorders">My Orders</Link>
    <Link to="/myblog">Blogs</Link>
  </nav>
);

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.root);

  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myorders"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyOrders />
            </ProtectedRoute>
          }
        /> */}
        {/* <Route
          path="/myblog"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyBlog />
            </ProtectedRoute>
          }
        /> */}

        {/* Normal Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/*Authenticated Routes and  Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={true}
              adminRoute={true}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Authenticated Routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/myblog" element={<MyBlog />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
