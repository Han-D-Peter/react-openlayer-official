import React from "react";
import {
  TileLayer,
  Map,
  GeoJsonLayer,
  InnerText,
  CustomMarker,
  CustomPolygon,
  CustomCircle,
  CustomMultiPoint,
  CustomRectangle,
  ControlSection,
  CustomTextMarker,
  CustomPolyLine,
  LayerGroup,
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
} from "react-openlayers7";
// Add react-live imports you need here

function TooltipMarker() {
  const [isHovering, setIsHovering] = React.useState(false);

  const onHover = () => {
    setIsHovering(true);
  };

  return (
    <CustomMarker onHover={onHover} center={[126.840884, 35.190816]}>
      {isHovering && <InnerText size={15}>Marker</InnerText>}
    </CustomMarker>
  );
}

const ReactLiveScope = {
  React,
  ...React,
  TileLayer,
  Map,
  GeoJsonLayer,
  LayerGroup,
  InnerText,
  CustomMarker,
  CustomPolygon,
  CustomCircle,
  CustomMultiPoint,
  CustomRectangle,
  ControlSection,
  CustomTextMarker,
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
  TooltipMarker,
};

ReactLiveScope.icon.marker = "/img/marker-icon.png";
export default ReactLiveScope;
