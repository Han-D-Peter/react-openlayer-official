import React from "react";
import {
  ImageOverlay,
  TileLayer,
  CaptureMap,
  SyncMapGroup,
  MapContainer,
  GeoJsonLayer,
  InnerText,
  CustomMarker,
  CustomPolygon,
  CustomCircle,
  CustomMultiPoint,
  CustomRectangle,
  ControlSection,
  TextMarker,
  CustomPolyLine,
  LayerGroup,
  MultiPointDrawButton,
  PointDrawButton,
  PolygonDrawButton,
  PolylineDrawButton,
  RectangleDrawButton,
  SyncMap,
  TextDrawButton,
  DeleteAnnotation,
  ModifyAnnotation,
  MoveAnnotation,
  Button,
  CompassWheel,
  DrawingTools,
  FullScreenFeature,
  ZoomFeature,
  useMap,
  useMapEventHandler,
  useMapRotation,
  useSelectAnnotation,
  getProfileFromFeature,
  icon,
  ControlGroup,
  ImageOveray,
  ImageMapForPixel,
  BoundaryCircle,
} from "react-openlayers7";
// Add react-live imports you need here

const ReactLiveScope = {
  React,
  ...React,
  TileLayer,
  SyncMapGroup,
  SyncMap,
  ImageOverlay,
  MapContainer,
  GeoJsonLayer,
  CaptureMap,
  LayerGroup,
  InnerText,
  CustomMarker,
  CustomPolygon,
  CustomCircle,
  CustomMultiPoint,
  CustomRectangle,
  ControlSection,
  TextMarker,
  CustomPolyLine,
  MultiPointDrawButton,
  PointDrawButton,
  PolygonDrawButton,
  PolylineDrawButton,
  RectangleDrawButton,
  TextDrawButton,
  DeleteAnnotation,
  ModifyAnnotation,
  MoveAnnotation,
  Button,
  CompassWheel,
  DrawingTools,
  FullScreenFeature,
  ZoomFeature,
  useMap,
  useMapEventHandler,
  useMapRotation,
  useSelectAnnotation,
  getProfileFromFeature,
  icon,
  ControlGroup,
  ImageOveray,
  ImageMapForPixel,
  BoundaryCircle,
};

ReactLiveScope.icon.marker = "/img/marker-basic.png";
ReactLiveScope.icon.selected = "/img/marker-selected.png";
ReactLiveScope.icon.imageMarker.selected = "/img/imageMarker(selected).png";
ReactLiveScope.icon.imageMarker.zero = "/img/imageMarker(one).png";
ReactLiveScope.icon.imageMarker.one = "/img/imageMarker(two).png";
ReactLiveScope.icon.imageMarker.two = "/img/imageMarker(three).png";
ReactLiveScope.icon.imageMarker.three = "/img/imageMarker(four).png";
ReactLiveScope.icon.imageCircleMarker.BLUE = "/img/imageCircleMarker/BLUE.png";
ReactLiveScope.icon.imageCircleMarker.BROWN =
  "/img/imageCircleMarker/BROWN.png";
ReactLiveScope.icon.imageCircleMarker.GREEN =
  "/img/imageCircleMarker/GREEN.png";
ReactLiveScope.icon.imageCircleMarker.RED = "/img/imageCircleMarker/RED.png";
ReactLiveScope.icon.imageCircleMarker.ROYAL_BLUE =
  "/img/imageCircleMarker/ROYAL_BLUE.png";
ReactLiveScope.icon.imageCircleMarker.SELECT =
  "/img/imageCircleMarker/SELECT.png";
ReactLiveScope.icon.imageCircleMarker.SKYBLUE =
  "/img/imageCircleMarker/SKYBLUE.png";
ReactLiveScope.icon.imageCircleMarker.YELLOW =
  "/img/imageCircleMarker/YELLOW.png";
export default ReactLiveScope;
