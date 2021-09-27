import React from 'react';
import Header from './components/header/header';
import ContainerBlock from './components/container/container';
import Footer from './components/footer/Footer';

import './App.css';

function App() {
  console.log(import.meta.env.VITE_API_URL);
  return (
    <>
      <Header />
      <ContainerBlock />
      <Footer />
    </>
  );
}

export default App;
