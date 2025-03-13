import React from "react";
import { useParams } from "react-router-dom"; 
import PlaceList from "../component/PlaceList";

export const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Taj Mahal",
      description:
        "A magnificent mausoleum built by Mughal Emperor Shah Jahan in memory of his wife, Mumtaz Mahal.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
      address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India",
      location: {
        lat: 27.175015,
        lng: 78.042155,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "India Gate",
      description:
        "A war memorial in New Delhi commemorating the soldiers of the Indian Army.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/India_Gate_in_New_Delhi.jpg",
      address: "Rajpath, India Gate, New Delhi, Delhi 110001, India",
      location: {
        lat: 28.612912,
        lng: 77.229509,
      },
      creator: "u2",
    },
    {
      id: "p3",
      title: "Gateway of India",
      description:
        "An iconic arch monument built during the British Raj, located in Mumbai.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Gateway_of_India_Mumbai.jpg",
      address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India",
      location: {
        lat: 18.921984,
        lng: 72.834654,
      },
      creator: "u1",
    },
    {
      id: "p4",
      title: "Hawa Mahal",
      description:
        "A unique five-story palace in Jaipur, famed for its intricate latticework and numerous windows.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Hawa_Mahal%2C_Jaipur.jpg",
      address: "Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Pink City, Jaipur, Rajasthan 302002, India",
      location: {
        lat: 26.923936,
        lng: 75.826788,
      },
      creator: "u2",
    },
    {
      id: "p5",
      title: "Mysore Palace",
      description:
        "A historic palace in Mysore renowned for its opulent architecture and vibrant cultural events.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mysore_Palace_from_Horseshoe_Park.jpg",
      address: "Sayyaji Rao Rd, Agrahara, Chamrajpura, Mysuru, Karnataka 570001, India",
      location: {
        lat: 12.305106,
        lng: 76.655158,
      },
      creator: "u1",
    },
    {
      id: "p6",
      title: "Charminar",
      description:
        "A historic monument and mosque, Charminar is one of the most recognized structures in Hyderabad.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Charminar_Hyderabad.jpg",
      address: "Char Kaman, Ghansi Bazaar, Hyderabad, Telangana 500002, India",
      location: {
        lat: 17.361562,
        lng: 78.474668,
      },
      creator: "u2",
    },
    {
      id: "p7",
      title: "Khajuraho Temples",
      description:
        "A group of exquisitely carved Hindu and Jain temples famed for their intricate sculptures.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Khajuraho_Group_of_Monuments.jpg",
      address: "Khajuraho, Chhatarpur, Madhya Pradesh 471312, India",
      location: {
        lat: 24.833333,
        lng: 79.933333,
      },
      creator: "u1",
    },
    {
      id: "p8",
      title: "Jaisalmer Fort",
      description:
        "A massive historic fort and living city, set in the heart of the Thar Desert in Rajasthan.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Jaisalmer_Fort.jpg",
      address: "Jaisalmer, Rajasthan 345001, India",
      location: {
        lat: 26.9157,
        lng: 70.9083,
      },
      creator: "u2",
    },
    {
      id: "p9",
      title: "Alleppey Backwaters",
      description:
        "A scenic network of canals, rivers, and lakes in Kerala, famous for its tranquil houseboat cruises.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Houseboat_on_Alleppey_Backwaters.jpg",
      address: "Alappuzha, Kerala 688001, India",
      location: {
        lat: 9.4981,
        lng: 76.3388,
      },
      creator: "u1",
    },
    {
      id: "p10",
      title: "Konark Sun Temple",
      description:
        "A 13th-century temple dedicated to the sun god, celebrated for its architectural brilliance and intricate carvings.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Konark_Sun_Temple_Orissa.jpg",
      address: "Konark, Odisha 752110, India",
      location: {
        lat: 19.8878,
        lng: 86.0945,
      },
      creator: "u2",
    },
  ];
  

    const UserPlaces = () => {

        const { userId } = useParams();

        const filteredPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

        if (filteredPlaces.length === 0) {
            return <h2 className="center">No places found for this user.</h2>;
        }

        return <PlaceList items={filteredPlaces} />;
    }

export default UserPlaces;
