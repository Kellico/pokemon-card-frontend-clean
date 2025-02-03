import React from 'react';
import { GoogleAnalytics, SEO } from './GoogleAnalytics';
import AuthComponent from './AuthComponent';

function App() {
  return (
    <div className="App">
      <SEO title="Pokémon Card Tracker" description="Track real-time Pokémon card prices." />
      <GoogleAnalytics />
      <h1>Pokémon Card Tracker</h1>
      <AuthComponent />
    </div>
  );
}

export default App;
