import {combineReducers} from 'redux';

// function which create a array of obejct of movies
const movieReducer = () => {
    return [
        {
            title: 'Aquaman',
            releaseDate: '12-07-2018',
            rating: 7.4
        },
        {
            title: 'Spiderman',
            releaseDate: '12-07-2018',
            rating: 7.4
        },
        {
            title: 'End Games',
            releaseDate: '12-07-2018',
            rating: 7.4
        },
        {
            title: 'Rock n Rolls',
            releaseDate: '12-07-2018',
            rating: 7.4
        },
        {
            title: 'Hum Tum',
            releaseDate: '12-07-2018',
            rating: 7.4
        },
        {
            title: 'Mirzapur',
            releaseDate: '12-07-2018',
            rating: 7.4
        }
    ]
}

//We are creating a Reducer's which define a state
const selectedMovieReducer = (state = null, action) => {
    switch(action.type){
        case 'MOVIE_SELECTED':
            return action.payload
        default:
            return state
    }
}

//Combine reducer's
 
export default combineReducers({
    movies: movieReducer,
    selectedMovie: selectedMovieReducer
})