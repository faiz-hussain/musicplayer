import React, {Component} from 'react';

class SongDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            thing:0 
        }

    }

     componentDidMount(){
         console.log(this.state.thing);
        for(let i = 0; i < this.props.songs.length; i++){
            if (parseInt(this.props.params.id) === this.props.songs[i].id ){
            this.setState({
            thing: i
            })
            }
         }
     }       
        //loop through the array and find the one with ID that matches this.props.params.id

    
    render() {

        // console.log(this.props.songs[this.props.params.id])
        console.log(this.props.params.id);
        return (
            <div>
            <div className="verytop">
                <p> </p>
            </div>
            <div className="plzwork">
                {/*//render the new variable */}
                  <h1>{(this.props.songs[this.state.thing].title)} <br/><button><img className="fave" src="../fave.png"/><span>add to favorites</span></button> </h1> 
                  
                  <img className="photo" src= {(this.props.songs[this.state.thing].photo)}/>
                  <p className="des">{(this.props.songs[this.state.thing].description)}</p>
            
            </div>
            </div>
            
        )
    }
    }

export default SongDetails;