import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import WithActions from './HOC/withActions';
import arrowDown from '../assets/img/angle-arrow-down.svg'
import arrowUp from '../assets/img/angle-up-arrow.svg';

function GenreButton(props) {

    const {
        container,
        showHideList,
        sheckboxChangedEvent,
        showList
    } = props
    
    const { genreList } = useContext(GlobalContext);

    return (
        <div ref={container} className="drp-genre">
            <button type="button" className="btn-drp" onClick={showHideList}>
                Genre
                { !showList && <img src={ arrowDown } alt=""/> }
                { showList && <img src={ arrowUp } alt=""/> }
            </button> 
            {
                showList &&             
                <div className="list-wrapper">
                    {
                        genreList.map((option, index) => ( 
                            <div key={index} className="genre-wrap">
                                <input type="checkbox" className="checkbox" checked={option.selected} value={option.value} onChange={sheckboxChangedEvent}/>
                                {
                                option.value !== '' ?
                                <label>{option.value}</label>
                                : <label>Any genre</label>
                                }
                            </div>
                        ))                        
                    }   
                </div> 
            }                           
        </div>
    )
}

export default WithActions(GenreButton, 'genre')

