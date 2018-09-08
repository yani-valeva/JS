function getMusicInfo(array) {
    let trackName = array[0];
    let artistName = array[1];
    let duration = array[2];

    console.log('Now Playing: ' + artistName + ' - ' + trackName + ' [' + duration + ']');
}

getMusicInfo(['Number One', 'Nelly', '4:09']);