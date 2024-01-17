import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div id="container">
        <h1>Your App Title</h1>
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<h1>Blue</h1>} />
            <Route path="/red" element={<h1>Red</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
