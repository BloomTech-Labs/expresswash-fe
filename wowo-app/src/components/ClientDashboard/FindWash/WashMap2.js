import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function WashMap2() {
	const [ viewport, setViewport ] = useState({
		width: 2500,
		height: 100 + '%',
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 8
	});

	return (
		<ReactMapGL
			mapboxApiAccessToken="pk.eyJ1IjoicXVhbjAwNSIsImEiOiJjazN0a2N3a2YwM3ViM2twdzhkbGphMTZzIn0.OepqB_mymhr1YLSYwNmRSg"
			width={viewport.width}
			height={555}
			latitude={37.7577}
			longitude={-122.4376}
			zoom={8}
			onViewportChange={(viewport) => {
				const { width, height, latitude, longitude, zoom } = viewport;
				// Optionally call `setState` and use the state to update the map.
			}}
		/>
	);
}

export default WashMap2;
