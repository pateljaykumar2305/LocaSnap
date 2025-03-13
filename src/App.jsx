import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ErrorBoundary from './error/ErrorBoundary';
import User from './user/component/User';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/component/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

const App = () =>  {
  console.log("App rendering");
  return (
    <ErrorBoundary>
    <Router>
      <MainNavigation />
      <main>
      
      <Routes>
        <Route path="/"  element={<User />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
      </Routes>
      </main>
    </Router>
    </ErrorBoundary>
    
  );
}

export default App;
