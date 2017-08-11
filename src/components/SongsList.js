import React, { Component } from 'react';
import { Link } from 'react-router';
import '../index.css';
//import 'bootstrap/dist/css/bootstrap.css';
class SongsList extends Component {
    render() {
        let tunes = []
        tunes = this.props.songs.map((song, i) => {
            return <div className="allSongs"><img className="thumbnail" src = { song.photo? song.photo : `../music.jpg`} /><button onClick={() => this.props.changeSong(i)}><img className="play" src="./play.png" /> </button><div className="songTitle"><Link to={"/songs/" + song.id}>{song.title}</Link></div></div>
        })
        console.log(this.props.route)
        console.log(this.props.currentsong)
        

        var mainbgstyle = {
            'background-image': ( this.props.playing? `url(${this.props.songs[this.props.currentsong].photo})` : `url(../backgroundgirl.jpg)`)
        }

        return (
            <div className="container">
                <div className="homebody" style={mainbgstyle}>
                    <p> 
                        <img className="mnLogo" src="../songift.png"/> 
                    </p>
                </div>
                <div className="songList">
                    <ul>
                        {tunes}
                    </ul>
                </div>
            </div>
        )
    }
}
export default SongsList;