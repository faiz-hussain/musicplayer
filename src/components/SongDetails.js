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

        //declare a new variable or state and equate it to the matched object in the songs array    

    
    render() {

        // console.log(this.props.songs[this.props.params.id])
        console.log(this.props.params.id);
        return (
            <div>
                {/*//render the new variable */}
                  <h1>{(this.props.songs[this.state.thing].title)} <button><img className="fave" src="../fave.png"/></button> </h1> 
                  
                  <img className="photo" src= {(this.props.songs[this.state.thing].photo)}/>
                  <p className="des">{(this.props.songs[this.state.thing].description)}</p>
            
            </div>
        )
    }
    }

export default SongDetails;