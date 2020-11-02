import React from 'react';
import { connect } from 'react-redux'

const MovieDetails = (props) => {
    if(!props.selectedMovie){
        return (
            <div className="details-cointainers" style={{width:"200px"}}>
                <h2>Movies</h2>
                <div className="properties">
                    <p>selectMovies</p>
                </div>
            </div>
        )
    } else{ 
        return(
            <div className="details-cointainers" style={{width:"200px"}}>
                <h2>Movies</h2>
                <div className="properties">
                    <p>Title:- {props.selectedMovie.title}</p>
                    <p>ReleaseDate:- {props.selectedMovie.releaseDate}</p>
                    <p>Rating:- {props.selectedMovie.rating}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetails)