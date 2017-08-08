import React, {Component} from 'react';

class SongDetails extends Component {
    render() {

        console.log(this.props.songs[this.props.params.id])
        console.log(this.props.songs);
        return (
            <div>
                
                  <h1>{(this.props.songs[this.props.params.id].title)}</h1>
                  <img className="photo" src= {(this.props.songs[this.props.params.id].photo)}/>
                  <p className="des">{(this.props.songs[this.props.params.id].description)}</p>
            
            </div>
        )
    }
}

export default SongDetails;