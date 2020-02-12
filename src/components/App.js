import React from 'react'
import SongList from './SongList'
import SongDetail from './SongDetail'

const App = () => {
    return <div className="ui container grid">
        <div className="ui row">
            <div className="column eight wide">
                <SongList />
            </div>
            <div className="column eight wide">
                <SongDetail />
            </div>
        </div>

    </div>
}

export default App

//call action creator to change state: select song
//reducers: song list reducer and selected song reducer
//how do we get action creator and reducer to be called by stateless components?
//react-redux library connects them together
//Usisng react-redux, we will create 2 new components: 
//provider and connect implemented by react-redux
//after we take reducers and combine them together, we create a store which contains all reducers and state of app
//take store that gets created, then pass as prop to provider which will be rendered above highest component in hierarchy
//provider has eternal reference to the sstore: provides info to all different components in app
//then find every component that needs data in store: song list
//create an instance of the connect component above the song list
//connect component (tag) communicates with provider tag at top of hierarchy NOT through
//props system, through the CONTEXT SYSTEM
//CONTEXT SYSTEM: allows any parent component to communicate with any child component directly,
//even if there are components between them
//connect sends message up to provider which says "tell me whenever list of songs changes"
//provider sends list of songs to connect which sends as props to songlist component
//action creators are not stored in store: instead we call an action creator, take action that gets returned and send into store.dispatch fn
//pass more configuration into connect component: tell connect function that want select song action creator gets sent to songlist component as a prop
//connect component makes sure state from store and action creator gets passed as props to appropriate component
