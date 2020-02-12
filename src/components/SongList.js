import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }

    render() {
        //we get songList and dispatch fn as props
        console.log(this.props)
        return (
            <div className="ui divided list">{this.renderList()}</div>
        )
    }
}

//this syntax is equivalent to: 
//fn that returns a fn
// function connect() {
//     return function () {
//         return 'Hi There'
//     }
// }
// react-redux library is calling a function that returns a function, then invoking that returned fn
// connect()()

//convention: call fn the mapStateToProps() fn
//take all data in redux store, then run computation on it
//that will cause it to show up as props in our component
//could call it "get my state", convention === name as below
const mapStateToProps = state => {
    //see redux store state: 
    console.log("store state", state)
    //object that we return will show up as props inside our component
    return { songs: state.songs }
}
//redux code requires a lot of boilerplate code (in comparison w other state management libraries)
//pass mapStateToProps to connect fn
//import selectSong and pass into connect fn
//don't call directly bc redux does not automatically detect action creators being called
//redux does not automatically detect a fn returning an object that is called an action
//nothing about action creator fn that automatically wires fn to redux
//when inside SongList and import action creator fn, we are just importing regular JS fn, will be treated as normal fn call
//needs to be put into store.dispatch() fn, so can't just call fn
//need to take returned action and put into dispatch fn
//when pass action creators into connect fn, connect fn does special operation on the fns inside of the object: 
//looks at all fns passed in and wraps them in another JS function
//call action creator, takes returned action, then calls dispatch fn for us
//by passing selectSong into connect, takes returned action into dispatch
export default connect(mapStateToProps, { selectSong })(SongList)

