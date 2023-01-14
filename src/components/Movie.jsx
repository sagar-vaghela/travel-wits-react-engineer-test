import React from 'react'
import Ratings from './Ratings';

function Movie({ movieList }) {
    return (
        <>
            <div className="list-wrapper">
                {movieList.map((option, index) => (
                    <div key={index} className="movielist">
                        <div className="list-wrap">
                            <h5>{option.title}</h5>
                            <Ratings ratingNum={option.rating}/>
                        </div>
                        <div className="category">
                            <p>{option.category}</p>
                        </div>
                        
                    </div>
                ))}
            </div>    
        </>
    )
}

export default Movie
