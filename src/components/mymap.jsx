import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from "leaflet";
import ThemeContext from '../ThemeContext';

const MyMap = () => {
  const contexte = useContext(ThemeContext);
  const [markers, setMarkers] = useState([]);
 return (
   <div>
   <div>Nombre de points : {markers.length}</div> //Je sais qu'il fallait un deuxième composant mais c'était trop tard
   <Map center={[44.56, 6.08]} zoom={14} onclick={(e) => setMarkers(prev => prev.concat([[e.latlng.lat,e.latlng.lng]]))}>
   {console.log(markers)}
     <TileLayer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
     />
     {markers.map((marker, index) => (
          <Marker position={marker} key={index}/>
      ))}
   </Map>
   </div>
 )
};
export default MyMap;
