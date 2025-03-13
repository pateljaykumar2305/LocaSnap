import React from 'react';
import UserList from './UserList';
import { DUMMY_PLACES } from "../../places/pages/UserPlaces";

const User = () => {

    console.log("User component rendering");
    
const USERS = [ {
    id: 'u1',
    image: 'https://rb.gy/2faepq' ,       
    name: 'Jay',
    places: DUMMY_PLACES.filter(place => place.creator === 'u1').length
  },
  {
    id: 'u2',
    image: 'https://rb.gy/cra78q' ,
    name: 'Jalak',
    places: DUMMY_PLACES.filter(place => place.creator === 'u2').length
  },
  {
    id: 'u3',
    image: 'https://rb.gy/cra78q',
    name: 'India',
    places: DUMMY_PLACES.filter(place => place.creator === 'u3').length
  }];
    return ( <UserList items = {USERS} /> );
};

export default User;