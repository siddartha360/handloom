/* pages/Admin/AdminLayout.css */

.admin-layout {
  display: flex;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

.admin-sidebar {
  width: 220px;
  background-color: #1f2937; /* dark gray */
  color: white;
  padding: 1.5rem;
  position: fixed;
  height: 100%;
}

.sidebar-logo {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.sidebar-links {
  list-style: none;
  padding: 0;
}

.sidebar-links li {
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.sidebar-links li:hover {
  background-color: #374151;
}

.admin-content {
  margin-left: 220px;
  padding: 2rem;
  width: 100%;
  background-color: #f3f4f6;
  min-height: 100vh;
}
