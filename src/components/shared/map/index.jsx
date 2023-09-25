import React from "react";
import GoogleMapReact from "google-map-react";
import { LocationIcon } from "../../../assets/svgComponents";

function MapComponent({ coords, zoom }) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 14,
  };

  return (
    <div style={{ height: "10rem", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coords}
        defaultZoom={13}
      >
        <LocationIcon  />
      </GoogleMapReact>
    </div>
  );
}

export default MapComponent;
