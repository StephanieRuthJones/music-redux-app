import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">
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
        // console.log(this.props)
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
    //object that we return will show up as props inside our component
    return { songs: state.songs }
}
//pass mapStateToProps to connect fn
export default connect(mapStateToProps)(SongList)

