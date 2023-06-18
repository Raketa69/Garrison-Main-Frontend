import React, { Component } from "react";
import ReactDOM from "react-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './MapBox.scss'
import { LatLngExpression } from "leaflet";

const position: [number, number] = [51.505, -0.09]

export default function MapBox() {

  let state = {
    center: [51.505, -0.091],
    zoom: 13
  }

  return (
    <div className="mapBox_content">
      <MapContainer center={state.center as LatLngExpression} zoom={state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={state.center as LatLngExpression}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}


