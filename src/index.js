import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import './index.css';
import SC from 'soundcloud';

function Song(source, title, description, photo, id) {
  this.source = source;
  this.title = title;
  this.description = description;
  this.photo = photo;
  this.id = id;
}

const songs = [
  new Song('/unforgettable.mp3', 'Unforgettable',' French Montana ft Rae Sremmurd & Swae Lee. ','/unforgettable.png', 0),
  new Song('/didyousee.mp3', 'Did you see', 'This is the lead single from Hus debut album, Common Sense. He told i-D the story behind the song: I went to this BBQ in the ends with my one friend in his black Benz, and my other mate picked me up in his white car and took me home (laughs). Its just what happened and I was singing that line the next day, and my manager was like .. Thats hard, record that. I went to the studio and recorded it.','/didyousee.jpg', 1),
  new Song('/mychargie.mp3', 'My Chargie', 'Drake ft. Popcaan','/mychargie.jpg', 2)
]

ReactDOM.render((
    <Router history={browserHistory}>
      <Route songs={songs} path="/" component={App}>
        <IndexRoute component={SongsList} />
        <Route path="songs" component={SongsList} />
        <Route path="songs/:id" component={SongDetails} />
      </Route>
    </Router>


),document.getElementById('root'));
