import React, {Component} from 'react';
import {Link} from 'react-router';
import '../index.css';
//import 'bootstrap/dist/css/bootstrap.css';


class SongsList extends Component {
    render() {
        let tunes = []
        tunes = this.props.songs.map((song, i)=>{
            return <Link to={"/songs/"+song.id}>{song.title} <button onClick={()=> this.props.changeSong(i)}> <img className="play" src="./play.png"/> </button> </Link>
        })
        console.log(this.props.route)
        console.log(this.props.currentsong)

        return (
            <div className="songList" style={{'background-image':`url(${this.props.songs[this.props.currentsong].photo})`}}>
                <h1> THIS IS A SONGS LIST </h1>
                <ul>
                    {tunes}
                </ul>
            </div>
        )
    }
}

export default SongsList;