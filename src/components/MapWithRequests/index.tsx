import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import Button from "../Button/Button";

interface IProps {
  requests: any;
  onClick: any;
}

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "leaflet/dist/images/marker-icon.png",
  shadowUrl: "leaflet/dist/images/marker-shadow.png"
});

const MapWithRequests: React.FC<IProps> = ({ requests, onClick }: IProps) => {
  function returnAllMarkers() {
    let result: any = [];
    for (let i = 0; i < requests.length; i++) {
      let position = requests[i].coordinate;
      {
        position !== null &&
          result.push([position.latitude, position.longitude]);
      }
    }
    // return L.latLngBounds(result);
    return result;
  }
  return (
    <div className="mapWithRequest">
      <LeafletMap
        center={requests[0].position}
        zoom={13}
        scrollWheelZoom={false}
        bounds={returnAllMarkers()}
        style={{ height: "100%", width: "95%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          minZoom={9}
          maxZoom={18}
        />
        {requests.map((marker: any) => {
          if (marker.coordinate !== null) {
            return (
              <Marker
                key={marker.id}
                position={[
                  marker.coordinate.latitude,
                  marker.coordinate.longitude
                ]}
              >
                <Popup>
                  <span className="section_text">
                    <strong>участник: </strong>
                    {marker.participant.name}
                  </span>{" "}
                  <br />
                  <span className="section_text">
                    <strong>адрес: </strong>
                    {marker.address}
                  </span>{" "}
                  <br />
                  <Button onClick={() => onClick(marker)} blue>
                    Смотреть
                  </Button>
                </Popup>
              </Marker>
            );
          }
          return null;
        })}
      </LeafletMap>
    </div>
  );
};

export default MapWithRequests;
