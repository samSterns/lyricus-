  
import React from 'react';
import SearchView from './SearchView';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArtistView from './ArtistView'; 
import AlbumView from './AlbumView';
import SongView from './SongView';

export default function App() {
  return (
    <Router>
    
      <Route exact path='/' component={SearchView} />
      <Route path='/artist/:name/:id' component={ArtistView} />
      <Route path='/album/:name/:id' component={AlbumView} />
      <Route path='/song/:name/:title' component={SongView} />
    </Router>
  );
}
