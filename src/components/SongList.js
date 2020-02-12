import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongList extends Component {

    render() {
        return (
            <div>SongList</div>
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

export default connect()(SongList)

