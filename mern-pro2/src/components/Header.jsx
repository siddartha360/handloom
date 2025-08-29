// Component: Header (Top Navigation)
// What it does: Shows brand, search bar, links to Home/Cart, and displays logged-in user's name in top-right

import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cartItems } = useContext(CartContext); // ✅ Access cart items
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0); // ✅ Total quantity
  const navigate = useNavigate();
  const [q, setQ] = useState(""); // search keyword
  const [cat, setCat] = useState("all"); // selected category
  const [user, setUser] = useState(null); // ✅ To store logged-in user info

  // ✅ Load logged-in user on page load
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/login");
  };

  return (
    <header style={styles.header}>
      {/* ✅ Brand: Logo + Title */}
      <Link
        to="/"
        style={{ ...styles.logo, display: "flex", alignItems: "center", gap: 8 }}
      >
        <img
          src="src/images/logo.avif"
          alt="Handloom Sarees Logo"
          style={{ width: 28, height: 28, borderRadius: 4, background: "#fff" }}
        />
        <span>Handloom Sarees</span>
      </Link>

      {/* 🔎 Amazon-like search bar */}
      <div style={styles.searchContainer}>
        <input
          placeholder="Search Mini Amazon"
          style={styles.searchInput}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter")
              navigate(`/search?q=${encodeURIComponent(q)}&cat=${cat}`);
          }}
        />
        <button
          style={styles.searchButton}
          onClick={() =>
            navigate(`/search?q=${encodeURIComponent(q)}&cat=${cat}`)
          }
        >
          Search
        </button>
      </div>

      {/* ✅ Navigation Links */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/cart" style={styles.link}>
          Cart
          <span style={styles.badge}>{cartCount}</span>
        </Link>

        {/* ✅ If user is logged in → Show name + Logout */}
        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={styles.userName}>Hi, {user.name} 👋</span>
            <button
              onClick={handleLogout}
              style={styles.logoutButton}
            >
              Logout
            </button>
          </div>
        ) : (
          // ✅ If not logged in → Show Login & Register
          <>
            <Link to="/login" style={styles.link}>
              Login
            </Link>
            <Link to="/register" style={styles.link}>
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}

/* ✅ Inline styles for simple design */
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#6a1a3b",
    color: "white",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    textDecoration: "none",
    color: "white",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    flex: 1,
    maxWidth: "600px",
    margin: "0 1rem",
  },
  searchInput: {
    flex: 1,
    padding: "0.5rem 0.75rem",
    border: "1px solid #333",
    outline: "none",
  },
  searchButton: {
    padding: "0.5rem 0.9rem",
    background: "#d4a017", // gold accent
    color: "#2b1b1d",
    border: "1px solid #b3880b",
    borderRadius: "0 6px 6px 0",
    cursor: "pointer",
  },
  nav: {
    display: "flex",
    gap: "1.2rem",
    alignItems: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
  },
  badge: {
    marginLeft: "8px",
    backgroundColor: "#f59e0b",
    color: "#111",
    padding: "2px 6px",
    borderRadius: "999px",
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
  userName: {
    color: "#ffd700",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  logoutButton: {
    padding: "5px 10px",
    background: "#f54242",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
