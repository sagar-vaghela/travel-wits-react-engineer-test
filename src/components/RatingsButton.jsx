import React, { useContext } from 'react'
import Ratings from './Ratings';
import { GlobalContext } from '../context/GlobalState';
import WithActions from './HOC/withActions';
import arrowDown from '../assets/img/angle-arrow-down.svg'
import arrowUp from '../assets/img/angle-up-arrow.svg';

function RatingsButton(props) {
    const {
        container,
        showHideList,
        sheckboxChangedEvent,
        showList
    } = props
    
    const { allRatingList } = useContext(GlobalContext);

    return (
        <div ref={container} className="drp-rating">
            <button type="button"  className="btn-drp rating" onClick={showHideList}>
                Rating
                { !showList && <img src={ arrowDown } alt=""/> }
                { showList && <img src={ arrowUp } alt=""/> }
            </button>            
            {
                showList &&
                <div className="list-wrapper">
                    {
                        allRatingList.map((option, index) => ( 
                            <div key={index} className="rating-wrap">
                                <input type="checkbox" className="checkbox" checked={option.selected} value={option.value} onChange={sheckboxChangedEvent}/>
                                {
                                option.value > 0 ?
                                <Ratings ratingNum={option.value}/>
                                : <span>Any rating</span>
                                }
                            </div>
                        ))
                    }   
                </div>  
            }                           
        </div>
    )
}

export default WithActions(RatingsButton, 'rating')
