import React, { useEffect } from 'react';
import { MapContainer, TileLayer, LayersControl, ScaleControl, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { APP_CONFIG } from '@/config/appConfig';

// Fix for Leaflet default icon issues in React
// This ensures that the markers appear correctly without 404 errors for the icon images
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface BaseMapProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
  children?: React.ReactNode;
}

const BaseMap: React.FC<BaseMapProps> = ({
  center = APP_CONFIG.defaultCenter,
  zoom = APP_CONFIG.defaultZoom,
  className = 'h-full w-full',
  children,
}) => {
  // Ensure the map invalidates size when the container resizes
  // This is often needed when the map is inside a flex container or changes visibility
  useEffect(() => {
    // We can't easily access the map instance here without useMap,
    // but React-Leaflet handles resizing reasonably well in v4.
    // If issues arise, we can add a MapConsumer component.
  }, []);

  return (
    <div className={className}>
      <MapContainer
        center={center}
        zoom={zoom}
        className="h-full w-full"
        zoomControl={false} // We will add it manually to position it differently if needed, or just use default
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="CartoDB Positron (Light)">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Esri World Imagery">
            <TileLayer
              attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
        </LayersControl>

        <ScaleControl position="bottomleft" imperial={false} />
        <ZoomControl position="topleft" />

        {children}
      </MapContainer>
    </div>
  );
};

export default BaseMap;
