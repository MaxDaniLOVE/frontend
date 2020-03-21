import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWF4ZGFuaWxvdiIsImEiOiJjazNkYTY2ZnEwdDZxM2NwOGJwN3hiMWZ6In0.EfNj3CDIoHMbo-pt3C_4oA';
  
  
const Map = ({lng, lat}) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF4ZGFuaWxvdiIsImEiOiJjazNkYTY2ZnEwdDZxM2NwOGJwN3hiMWZ6In0.EfNj3CDIoHMbo-pt3C_4oA';
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: 11
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={{height: '200px'}}/>;
}

export default Map;
