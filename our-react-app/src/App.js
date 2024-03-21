import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ResourcePage from './resourcePage';
import resourcesData from './resources';

import './css/sass/main.scss';

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
          <Switch>
            <Route path="/html">
              <ResourcePage category="HTML" resources={resourcesData} />
            </Route>
            <Route path="/css">
              <ResourcePage category="CSS" resources={resourcesData} />
            </Route>
            <Route path="/javascript">
              <ResourcePage category="JavaScript" resources={resourcesData} />
            </Route>
            <Route path="/react">
              <ResourcePage category="React" resources={resourcesData} />
            </Route>
            <Route path="/sanity">
              <ResourcePage category="Sanity and headless CMS" resources={resourcesData} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
