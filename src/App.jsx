import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
