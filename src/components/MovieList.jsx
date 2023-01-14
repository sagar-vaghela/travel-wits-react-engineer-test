/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect, createRef } from 'react'
import { GlobalContext } from '../context/GlobalState';
import Movie from './Movie'

function MovieList({ moviesList }) {

    const { filterMovies, updateSerachText } = useContext(GlobalContext);
    const [searchKeyword, setSearchkeyword] = useState('');
    const [showMovieList, setShowMovieList] = useState(false);

    const inputRef = createRef();

    useEffect(() => {
        updateSerachText(searchKeyword);
        if (searchKeyword === '') {
            setShowMovieList(false);
        }
        filterMovies(searchKeyword);
    }, [searchKeyword])

    const InputClickedEvent = () => {
        setShowMovieList(true);
    }
    
    const InputChangedEvent = () => {
        setSearchkeyword(inputRef.current.value)
    }

    return (
        <>
            <input placeholder="Enter movie name" 
                    onChange={InputChangedEvent} 
                    ref={inputRef}
                    onClick={InputClickedEvent}
                    />            
            {
                (searchKeyword !== '' || showMovieList) && moviesList.length > 0? (
                    <Movie movieList={moviesList}/>
                ) : null
            }            
        </>
    )
}

export default MovieList
