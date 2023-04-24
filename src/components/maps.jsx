import GoogleMapReact from "google-map-react";

function Map() {
  const location = { lat: -34.497355, lng: -58.552833 };

  return (
    <div style={{ height: "30em", width: "100%", padding: "2em 4em" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBHKoVKobC1-4tCE9EeuwnFylw1Ch9Fxv0" }}
        defaultCenter={location}
        defaultZoom={14}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
