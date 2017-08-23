import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router';
import SC from 'soundcloud';

SC.initialize({
  client_id: apikey
  // redirect_uri: 'http://example.com/callback'
});

var audio = document.getElementById("songs");


// find all tracks with the genre 'punk' that have a tempo greater than 120 bpm.

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.route.songs)
    this.state = {
      currentsong: 0,
      playing: false,
      songs: this.props.route.songs
    }
    this.changeSong = this.changeSong.bind(this)
    this.nextSong = this.nextSong.bind(this)
    this.prevSong = this.prevSong.bind(this)
  }

  componentWillMount() {
    // let self = this;
    let songHolder = [];
    var page_size = 100;
    SC.get('/tracks?genre=hiphop', {
    })
      .then((tracks) => {
        console.log(SC.get('/tracks'));
        for (let i = 0; i < tracks.length; i++) {
          let song = new ScSong(tracks[i])
          songHolder.push(song);
        }
        console.log(songHolder);
        this.setState({
          songs: songHolder
        }, console.log(this.state))
      });
    function ScSong(scTrack) {
      this.source = scTrack.stream_url + '?client_id=0hH9etIZi7ZfHXZWUk3ZtpVxdu3GyQdS';
      this.title = scTrack.title;
      this.description = scTrack.description;
      this.photo = scTrack.artwork_url;
      this.id = scTrack.id;
    }
    setInterval(()=>{
      this.scrollhide()
    },500)
  }



  // function Person (name, age){
  //   this.name = name; 
  //   this.age = age;
  // }

  // let Teanna = new Person('Teanna', '21')
  // console.log(Teanna )

  // array = [, , , ]
  // for(length of array){
  //   eachPerson = new Person(array[i].name, array[i].age)
  //   newarray.push(eachPerson)
  // }

  // componentWillMount(){
  //   setInterval(()=>{
  //     this.scrollhide()
  //   },500)
  // }

  scrollhide() {
    const image = document.getElementById('logoyo');
    window.onscroll = function (e) {
      if (location.pathname === '/songs' && window.pageYOffset < 458) {
        image.style.display = 'none';
      }
      else {
        image.style.display = 'inline-block';
      }
    }
  }

  changeSong(songindex) {
    this.setState({ currentsong: songindex, playing: true }, () => { document.getElementById("songs").play(); })
  }

  play() {
    audio.play();
    this.setState({ playing: true })
  }

  pause() {
    audio.pause();
    this.setState({ playing: false })
  }

  nextSong(songindex) {
    this.setState({ currentsong: this.state.currentsong + 1, playing: true }, () => { document.getElementById("songs").play(); console.log("auo") })
    if (this.state.currentsong === this.props.route.songs.length - 1) {
      this.setState({ currentsong: 0 })
    }
  }

  prevSong(songindex) {
    this.setState({ currentsong: this.state.currentsong - 1, playing: true }, () => { document.getElementById("songs").play(); })
    if (this.state.currentsong === 0)
      this.setState({ currentsong: 2 })
  }
  render() {

    // const hello = this.props.route.songs
    // console.log(this.props.route.songs.length);
    return (
      <div className="App">
        <div className="wrapper">
          <div id="homelogo">

          </div>
          <div className="top-bar">
            <Link to="/songs">
              <img id="logoyo" className="logo" src="../logoo.gif" />
              <h4 className="songify"> songify </h4>
            </Link>
          </div>
        </div>
        {React.cloneElement(this.props.children, { songs: this.state.songs, changeSong: this.changeSong, nextSong: this.nextSong, prevSong: this.prevSong, currentsong: this.state.currentsong, playing: this.state.playing })}

        <div className="player col-md-8 .col-md-offset-2">
          <audio controls id="songs" src={this.state.songs[this.state.currentsong].source} />
          <button className="changer" onClick={this.prevSong}><img className="nextprev" src="../left_arrow.png" /></button>
          <button className="changer" onClick={this.nextSong}><img className="nextprev" src="../right_arrow.png" /></button>
        </div>
      </div>
    );
  }
}


export default App;
