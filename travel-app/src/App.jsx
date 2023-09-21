import { useState, useRef } from 'react'
import './App.css'
import MapGL, { Popup } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
// import { Marker } from "react-map-gl"

function App() {
  // const [ markers, setMarkers ] = useState([])
  const [viewport, setViewport] = useState({
      width: '100vw',
      height: '100vh',
      latitude: 43.653225,
      longitude: -90.383186,
      zoom: 4
  })

  const mapRef = useRef(null);

  const handleMapClick = (event) => { 
    const map = mapRef.current.getMap()
    const marker = new mapboxgl.Marker({
      color: "#9395D3",
      draggable: true,
    }).setLngLat([event.lngLat.lng, event.lngLat.lat])
      .addTo(map);
  }



  return (
    <>
    <h1>Wanderlist</h1>
    <MapGL
      mapboxAccessToken= {import.meta.env.VITE_MAPBOX_KEY}
      {...viewport}
      onMove={event => setViewport(event.viewport)}
      mapStyle='mapbox://styles/mapbox/dark-v11'
      style={{width: '100vw', height: '100vh'}}
      onClick={handleMapClick}
      ref={mapRef}
    />
    
    </>
  )
}

export default App
