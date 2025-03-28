import React from "react";

import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = props => {
    { console.log('PlaceList items:', props.items); }
    if(props.items.length === 0){
        return (
            <div className="place-list center">
                <h2>No places found. Maybe create one?</h2>
                <button>Share Place</button>
            </div>
        );
    }

    return (
        <ul className="place-list">
            {props.items.map(place => 
               ( <PlaceItem 
                key={place.id} 
                id={place.id} 
                image={place.imageUrl} 
                title={place.title} 
                description={place.description} 
                address={place.address} 
                creatorId={place.creator} 
                coordinates={place.location}                                                                                        
                />
                ))}
        </ul>
    );

}

export default PlaceList;