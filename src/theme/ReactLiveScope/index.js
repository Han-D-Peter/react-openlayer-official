import React from 'react';
import { TileLayer, Map, LayerGroup,CustomMarker,InnerText,CustomPolygon } from "react-openlayers7";
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  TileLayer, 
  Map, 
  LayerGroup,
  CustomMarker,
  InnerText,CustomPolygon
};
export default ReactLiveScope;
