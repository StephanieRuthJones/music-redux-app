//need songList reducer and selectedSong reducer
//static list of songs: 
//static, so no need to put action in as argument
const songsReducer = () => {
    return [
        {
            title: 'No Scrubs', duration: '4:05'
        },
        {
            title: 'Macarena', duration: '2:30'
        }, {
            title: 'All Star', duration: '3:15'
        }, {
            title: 'I Want It That Way', duration: '1:45'
        },
    ]
}
//selected song reducer:
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong
}