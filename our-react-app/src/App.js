import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import './css/sass/main.scss'; 
import Resources from './Resources'; 

function App() {
  return (
    <Router>
      <div id="container">
        <nav>
          <ul>
            <li><Link to="/html">HTML</Link></li>
            <li><Link to="/css">CSS</Link></li>
            <li><Link to="/javascript">JavaScript</Link></li>
            <li><Link to="/react">React</Link></li>
            <li><Link to="/sanity">Sanity and headless CMS</Link></li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/html" element={<Resources category="html" />} />
            <Route path="/css" element={<Resources category="css" />} />
            <Route path="/javascript" element={<Resources category="javascript" />} />
            <Route path="/react" element={<Resources category="react" />} />
            <Route path="/sanity" element={<Resources category="sanity" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
