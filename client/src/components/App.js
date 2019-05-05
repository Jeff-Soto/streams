import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <StreamList />
    </div>
  );
}

export default App;
