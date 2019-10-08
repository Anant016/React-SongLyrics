import React, { Component } from 'react'  
import Amplitude from 'amplitudejs' 

class Playsong extends Component {  

    constructor(props) {
        super(props);
        this.progressNav = this.progressNav.bind(this);
    }

    componentDidMount(){

        Amplitude.init({ 
            "bindings": {
              37: 'prev',
              39: 'next',
              32: 'play_pause'
            },
            "songs": [
              {
                "name": "placeholder - Risin' High (feat Raashan Ahmad)",
                "artist": "placeholder - Ancient Astronauts",
                "album": "placeholder - We Are to Answer",
                // SET PLACEHOLDER URL on placeholder mp3, this needs to be changed depending on our mp3 source 
                // find song on open source library - > get mp3 with api - similar to the one that is used to retrieve the lyrics
                // or a web crawler perhaps
                "url": "https://521dimensions.com/song/Ancient%20Astronauts%20-%20Risin'%20High%20(feat%20Raashan%20Ahmad).mp3",                
                "cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg"  
              }
            ]
          });       
    }   
    
    progressNav(e) { 
        const box = e.target;
        const offset = box.getBoundingClientRect();
        const x = e.pageX - offset.left;      
        Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( box.offsetWidth) ) * 100 ); 
       
    }

  render() {   
      return (
        <React.Fragment>   
            <div className="bottom-container">
                <progress className="amplitude-song-played-progress" id="song-played-progress" onClick={this.progressNav}></progress>
                <div className="time-container">
                    <span className="current-time">
                    <span className="amplitude-current-minutes"></span>:<span className="amplitude-current-seconds"></span>
                    </span>
                    <span className="duration">
                    <span className="amplitude-duration-minutes"></span>:<span className="amplitude-duration-seconds"></span>
                    </span>
                </div>
                <div className="control-container">
                    <div className="amplitude-play-pause" id="play-pause"></div>
                    <div className="meta-container">
                    <span data-amplitude-song-info="name" className="song-name"></span>
                    <span data-amplitude-song-info="artist"></span>
                    </div>
                </div>
            </div> 
        </React.Fragment>
    )
  }

}

export default Playsong;
