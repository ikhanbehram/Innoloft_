import React from "react";
import GoogleMapReact from "google-map-react";
import { LocationIcon } from "../../../assets/svgComponents";

function MapComponent({ coords, zoom }) {
  return (
    <div style={{ height: "10rem", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coords}
        defaultZoom={zoom}
      >
        <LocationIcon  />
      </GoogleMapReact>
    </div>
  );
}

export default MapComponent;
