import React from 'react';
import SearchView from './SearchView';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArtistView from './ArtistView'; 
import AlbumView from './AlbumView';
import SongView from './SongView';
import Header from '../components/Header';

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Route exact path='/' component={SearchView} />
        <Route path='/artist/:name/:id' component={ArtistView} />
        <Route path='/album/:name/:id' component={AlbumView} />
        <Route path='/song/:name/:title' component={SongView} />
      </Router>
    </>
  );
}
