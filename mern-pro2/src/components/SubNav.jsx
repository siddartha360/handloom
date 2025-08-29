// Component: SubNav (Secondary navigation bar like Amazon)
// What it does: Shows quick links such as Today's Deals, Customer Service, etc.
// Where it navigates: For now, links go to search with appropriate categories/keywords
import { Link } from "react-router-dom";

export default function SubNav() {
  return (
    <div style={styles.bar}>
      
      <Link to="/search?deal=1" style={styles.item}>Today's Deals</Link>
    </div>
  );
}

const styles = {
  bar: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    background: "#4a1026", // darker subnav
    color: "white",
    padding: "0.6rem 1rem",
    overflowX: "auto",
  },
  item: {
    color: "white",
    textDecoration: "none",
    whiteSpace: "nowrap",
    fontSize: "0.95rem",
  },
};


