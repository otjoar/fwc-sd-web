import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch } from "react-router-dom";
import Particles from 'react-particles-js';
import ParticleSettings from './particles.json';
import Header from './Header';
import Gif from './Pages/Gif';
import TextFile from './Pages/Text';
import Home from './Pages/Home';

const Main = ({
  handleToggleSidebar
}) => {
  return (
    <main>
      <Particles params={ParticleSettings}/>
      <Header handleToggleSidebar={handleToggleSidebar}/>

        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="./surface">
              <div className="content">
                <Gif page="surface" />
              </div>
            </Route>
            <Route path="./socalfcstgraphic">
              <div className="content">
                <Gif page="socal" />
              </div>
            </Route>
            <Route path="./dgoparea">
              <div className="content">
                <TextFile page="dgo" />
              </div>
            </Route>
            <Route path="./ag">
              <div className="content">
                <TextFile page="ag" />
              </div>
            </Route>
            <Route path="./as">
              <div className="content">
                <TextFile page="as" />
              </div>
            </Route>
            <Route path="./rs">
              <div className="content">
                <TextFile page="rs" />
              </div>
            </Route>
          </Switch>
        </Router>
      <br />
    </main>
  );
};

export default Main;
