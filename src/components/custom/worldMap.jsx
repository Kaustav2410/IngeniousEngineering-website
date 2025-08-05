import React from 'react';

import {

ComposableMap,

Geographies,

Geography,

Marker,

Line

} from 'react-simple-maps';



import worldMapData from '../../assets/mapData.json';



const WorldMap = () => {

// Define highlighted countries with distinct colors for visual grouping

const highlightedCountries = {

'356': { color: '#4CAF50', name: 'India', coordinates: [77.5946, 12.9716] }, // Green for origin

'840': { color: '#2196F3', name: 'United States', coordinates: [-77.036, 38.907] }, // Blue

'826': { color: '#FF9800', name: 'United Kingdom', coordinates: [-0.1278, 51.5074] }, // Orange

'246': { color: '#9C27B0', name: 'Finland', coordinates: [24.9384, 60.1695] }, // Purple

'124': { color: '#00BCD4', name: 'Canada', coordinates: [-75.6972, 45.4215] }, // Cyan

'250': { color: '#F44336', name: 'France', coordinates: [2.3522, 48.8566] }, // Red

'554': { color: '#607D8B', name: 'New Zealand', coordinates: [174.7762, -41.2865] }, // Blue Grey

};



// Define markers for cities with consistent styling

const markers = [

{ markerOffset: -15, name: "Bengaluru", coordinates: [77.5946, 12.9716], color: '#4CAF50' }, // Match India's color

{ markerOffset: -15, name: "Washington D.C.", coordinates: [-77.036, 38.907], color: '#2196F3' },

{ markerOffset: 25, name: "London", coordinates: [-0.1278, 51.5074], color: '#FF9800' },

{ markerOffset: -15, name: "Helsinki", coordinates: [24.9384, 60.1695], color: '#9C27B0' },

{ markerOffset: 25, name: "Ottawa", coordinates: [-75.6972, 45.4215], color: '#00BCD4' },

{ markerOffset: -15, name: "Paris", coordinates: [2.3522, 48.8566], color: '#F44336' },

{ markerOffset: 25, name: "Wellington", coordinates: [174.7762, -41.2865], color: '#607D8B' }

];



const bengaluruCoordinates = [77.5946, 12.9716];



return (

<div className='w-full max-w-4xl mx-auto my-10 bg-white rounded-lg shadow-xl overflow-hidden p-6'> {/* Added max-width, margin, background, shadow, padding, and overflow-hidden */}

<ComposableMap

projectionConfig={{ scale: 150 }} // Adjusted scale for better view

height={450} // Slightly increased height for more vertical space

style={{ width: "100%", height: "auto" }} // Ensure responsiveness

>

<Geographies geography={worldMapData}>

{({ geographies }) =>

geographies.map((geo) => {

const countryId = geo.id;

const isHighlighted = highlightedCountries[countryId];



return (

<Geography

key={geo.rsmKey}

geography={geo}

fill={isHighlighted ? isHighlighted.color : '#E0E0E0'} // Softer gray for non-highlighted countries

stroke="#FAFAFA" // Lighter stroke for better definition

strokeWidth={0.7} // Slightly thicker stroke

style={{

default: {

outline: 'none', // Remove default outline

},

hover: {

fill: isHighlighted ? isHighlighted.color : '#CFD8DC', // Slightly darker hover for non-highlighted

outline: 'none',

},

pressed: {

fill: isHighlighted ? isHighlighted.color : '#B0BEC5', // Even darker for pressed

outline: 'none',

},

}}

/>

);

})

}

</Geographies>



{/* Render Markers */}

{markers.map(({ name, coordinates, markerOffset, color }) => ( // Added color prop to marker

<Marker key={name} coordinates={coordinates}>

<circle r={6} fill={color} stroke="#fff" strokeWidth={2.5} /> {/* Larger circle, thicker stroke, uses marker color */}

<text

textAnchor="middle"

y={markerOffset}

style={{

fontFamily: "Inter, sans-serif", // Modern font-family

fill: "#212121", // Darker text for readability

fontSize: "11px", // Slightly larger font

fontWeight: "600", // Semi-bold text

pointerEvents: "none" // Prevent text from interfering with map interactions

}}

>

{name}

</text>

</Marker>

))}



{/* Render Connections from Bengaluru to other highlighted countries */}

{Object.keys(highlightedCountries).map((countryId, index) => {
  const country = highlightedCountries[countryId];

  if (
    country.coordinates[0] === bengaluruCoordinates[0] &&
    country.coordinates[1] === bengaluruCoordinates[1]
  ) {
    return null;
  }

  const [x1, y1] = bengaluruCoordinates;
  const [x2, y2] = country.coordinates;

  // Choose whether to curve upward or downward (alternating)
  const curveDirection = index % 2 === 0 ? -1 : 1;

  // Calculate mid-point and offset
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2 + curveDirection * 30; // adjust '10' for curvature strength

  // Convert to screen coordinates
  return (
    <Geographies key={`curve-${country.name}`} geography={worldMapData}>
      {({ projection }) => {
        const [startX, startY] = projection([x1, y1]);
        const [endX, endY] = projection([x2, y2]);
        const [ctrlX, ctrlY] = projection([midX, midY]);

        return (
          <path
            d={`M${startX},${startY} Q${ctrlX},${ctrlY} ${endX},${endY}`}
            fill="none"
            stroke="#FF5722"
            strokeWidth={1.5}
            strokeDasharray="4 2"
            opacity={0.7}
          />
        );
      }}
    </Geographies>
  );
})}

</ComposableMap>

</div>

);

};



export default WorldMap;
