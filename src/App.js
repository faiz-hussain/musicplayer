import React, { Component } from 'react';
import './index.css';
import {Link} from 'react-router';


var audio = document.getElementById("songs"); 


class App extends Component {
  constructor(){
    super();
      this.state = {
        currentsong : 0,
        playing: false,
      }
      this.changeSong = this.changeSong.bind(this)
      this.nextSong = this.nextSong.bind(this)
      this.prevSong = this.prevSong.bind(this)
  }

changeSong(songindex){
  this.setState ({currentsong: songindex,
                  playing : true  }) 
}

 play() { 
    audio.play(); 
    this.setState ({ playing : true })
} 

  pause() { 
    audio.pause(); 
    this.setState ({ playing : false})
} 

nextSong(songindex){
   this.setState ({ currentsong: this.state.currentsong + 1})
    if (this.state.currentsong === 2 ){
      this.setState({currentsong: 0})
    }
    if (this.state.playing === true){
      audio.play()
    }
}

prevSong(songindex){
  this.setState({currentsong: this.state.currentsong - 1})
    if (this.state.currentsong === 0)
      this.setState({ currentsong: 2})
}
  render() {
    const songs = this.props.route.songs
    return (
      <div className="App" style={{'background-image':`url(${this.props.route.songs[this.props.params.id].photo})`}}>
          
          <div className="top-bar"> 
            <Link to="/songs">
                <img className="logo" src="../logoo.gif"/> 
                <h4 className="songify"> songify </h4>
           </Link> 
          </div>
          
          {React.cloneElement(this.props.children, { songs: songs, changeSong: this.changeSong, nextSong: this.nextSong, prevSong: this.prevSong })}

          <div className="player">
            <audio controls id="songs" src={songs[this.state.currentsong].source}/>
            <button className="changer" onClick={this.prevSong}><img src="../left_arrow.png"/></button>
            <button className="changer" onClick={this.nextSong}><img src="../right_arrow.png"/></button>
          </div>

      </div>
    );
  }
}


export default App;
