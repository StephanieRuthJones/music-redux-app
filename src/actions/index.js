//Action creator
//named export so can export multiple fns from a single file
export const selectSong = (song) => {
    //return an action
    //must have type property
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}

