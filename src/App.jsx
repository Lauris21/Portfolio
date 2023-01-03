import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
