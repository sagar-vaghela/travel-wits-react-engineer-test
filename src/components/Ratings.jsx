import React from 'react'
import StarRatings from 'react-star-ratings';

function Ratings({ ratingNum }) {
    return (
        <>
            <StarRatings
                rating={ratingNum}
                starRatedColor="black"
                numberOfStars={10}                
            />
        </>
    )
}

export default Ratings
