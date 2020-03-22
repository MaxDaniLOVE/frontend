import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";


mapboxgl.accessToken =
  'pk.eyJ1IjoibWF4ZGFuaWxvdiIsImEiOiJjazNkYTY2ZnEwdDZxM2NwOGJwN3hiMWZ6In0.EfNj3CDIoHMbo-pt3C_4oA';

const Map = ({
  lng,
  lat
}) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF4ZGFuaWxvdiIsImEiOiJjazNkYTY2ZnEwdDZxM2NwOGJwN3hiMWZ6In0.EfNj3CDIoHMbo-pt3C_4oA';
    const initializeMap = ({
      setMap,
      mapContainer
    }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: 11
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
        map.loadImage("https://i.imgur.com/MK4NUzI.png", function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          map.addLayer({
            id: "markers",
            type: "symbol",
            source: {
              type: "geojson",
              data: {
                type: 'FeatureCollection',
                features: [{
                  type: 'Feature',
                  properties: {},
                  geometry: {
                    type: "Point",
                    coordinates: [lng, lat]
                  }
                }]
              }
            },
            layout: {
              "icon-image": "custom-marker",
            }
          });
        });
      });
    };

    if (!map) initializeMap({
      setMap,
      mapContainer
    });
  }, [map, lat, lng]);

  return <div ref = {
    el => (mapContainer.current = el)
  }
  style = {
    {
      height: '200px'
    }
  }
  />;
}

export default Map;