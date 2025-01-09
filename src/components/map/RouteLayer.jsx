/* eslint-disable react/prop-types */
import { Layer, Source } from "react-map-gl";

const RouteLayer = ({ route }) => {
  if (!route) return null;

  const geojson = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: route.geometry.coordinates,
    },
  };

  return (
    <Source type="geojson" data={geojson}>
      <Layer
        id="route"
        type="line"
        paint={{
          "line-color": "#4A90E2",
          "line-width": 4,
          "line-opacity": 0.8,
        }}
      />
    </Source>
  );
};

export default RouteLayer;
