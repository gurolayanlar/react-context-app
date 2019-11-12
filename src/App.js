import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import  ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Navbar />
      <Sidebar />
      <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
