import GoogleMapReact from "google-map-react";

function Map() {
  const location = { lat: -34.46319507723366, lng: -58.56022721555897 };

  return (
    <div style={{ height: "30em", width: "100%", padding: "2em 4em" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBHKoVKobC1-4tCE9EeuwnFylw1Ch9Fxv0" }}
        defaultCenter={location}
        defaultZoom={13}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
