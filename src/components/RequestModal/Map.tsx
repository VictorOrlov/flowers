import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import { Request } from "../../graphql";
import { popup } from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

interface IProps {
  request: Request;
  height?: string;
  popup?: any;
}

export const ReactLeafletMap: React.FC<IProps> = ({
  request,
  height,
  popup
}: IProps) => {
  const state = {
    lat: 55.798521,
    lng: 49.124785,
    zoom: 13
  };

  return (
    <div>
      {request.coordinate !== null ? (
        <LeafletMap
          center={[request.coordinate!.latitude, request.coordinate!.longitude]}
          zoom={state.zoom}
          style={{ height: height || "500px", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            minZoom={9}
            maxZoom={18}
          />
          <Marker
            position={[
              request.coordinate!.latitude,
              request.coordinate!.longitude
            ]}
          >
            <Popup>{popup ? popup : "Без комментариев."}</Popup>
          </Marker>
        </LeafletMap>
      ) : (
        <>
          <div className="notCoordinate">
            Нет координат <br /> ¯\_(ツ)_/¯
          </div>
          <LeafletMap
            center={[state.lat, state.lng]}
            zoom={state.zoom}
            style={{ height: "500px", width: "100%" }}
            scrollWheelZoom={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              minZoom={9}
              maxZoom={18}
            />
          </LeafletMap>
        </>
      )}
    </div>
  );
};
