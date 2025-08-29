import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import SubNav from "./components/SubNav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";

// Admin Pages
import AdminLogin from "./pages/Admin/Dashboard/AdminLogin";
import AdminLayout from "./pages/Admin/Dashboard/AdminLayout";
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard";
import EditProduct from "./pages/Admin/EditProduct";
import PrivateRoute from "./pages/Admin/PrivateRoute";

export default function App() {
  const location = useLocation();

  // Hide Header & SubNav for login, register, and all /admin routes
  const hideHeaderAndSubNav =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {/* Show Header and SubNav only if NOT on hidden paths */}
      {!hideHeaderAndSubNav && (
        <>
          <Header />
          <SubNav />
        </>
      )}

      <main className="p-4">
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Layout with PrivateRoute */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="edit-product/:id" element={<EditProduct />} />

            {/* Future Pages */}
            {/* <Route path="orders" element={<Orders />} /> */}
            {/* <Route path="users" element={<Users />} /> */}
            {/* <Route path="settings" element={<Settings />} /> */}
          </Route>
        </Routes>
      </main>
    </>
  );
}
