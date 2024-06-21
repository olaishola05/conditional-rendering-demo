import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Contact from "./components/routes/Contact";
import CardDetails from "./components/cards/CardDetails";
import Dashboard from "./components/dashboard/Dashboard";
import GuestbookEntry from "./components/GuestBook";
import Login from "./components/routes/Login";

function App() {
  const token = JSON.parse(localStorage.getItem("user"))?.token || false;

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="App">
      <nav className="flex gap-2 items-center">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <div>
          {!token ? (
            <a href="/login">Login </a>
          ) : (
            <>
              <a href="/dashboard">Dashboard</a>
              <a href="/guestbook">Guestbook</a>

              <button type="button" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/guestbook" element={<GuestbookEntry />} />
      </Routes>
    </div>
  );
}

export default App;
