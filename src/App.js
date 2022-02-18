import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./views/About";
import HelloWorld from "./views/HelloWorld";
import Whatever from "./views/Whatever";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Whatever you want</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/users" element={<Whatever/>} />
          <Route path="/" element={<HelloWorld/>}/>
        </Routes>
      </div>
    </Router>
  );
}
