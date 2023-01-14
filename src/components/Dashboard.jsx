/* eslint-disable react-hooks/exhaustive-deps */
import {useContext, useEffect} from 'react'
import MovieList from './MovieList'
import { GlobalContext } from '../context/GlobalState'
import GenreButton from './GenreButton'
import RatingsButton from './RatingsButton'

function Dashboard() {

    const { moviesList, loadMovies } = useContext(GlobalContext);

    useEffect(() => {
        loadMovies()
    }, [])

    return (
        <div className="container">
            <div className="dashboard-wrapper">
                <div className="dashboard-block">
                    <div className="movieList">
                        <MovieList moviesList={moviesList} />
                    </div>
                    <RatingsButton />
                    <GenreButton />
                </div>
                
            </div>
        </div> 
    )
}

export default Dashboard
