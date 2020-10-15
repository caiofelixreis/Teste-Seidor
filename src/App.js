import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './styles/global.scss'
import Home from './pages/Home'
import Create from './pages/Create'
import ContextProvider from './context'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/create" component={Create} exact />
            <Route path="/create/:id" component={Create} exact />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
