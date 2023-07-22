import React, { Fragment } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { MainContent } from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <DndProvider backend={HTML5Backend}>
      <MainContent />
    </DndProvider>
      <Footer />
    </div>
  );
}

export default App;
