"use client";

import { useEffect, useRef } from "react";
import type { Map as MapboxMap, Marker as MapboxMarker } from "mapbox-gl";

const locations = [
  { name: "Omaha, Nebraska", coordinates: [-95.998, 41.252] as [number, number] },
  { name: "Lincoln, Nebraska", coordinates: [-96.702, 40.814] as [number, number] },
  { name: "Council Bluffs, Iowa", coordinates: [-95.8608, 41.2619] as [number, number] },
  { name: "Des Moines, Iowa", coordinates: [-93.625, 41.586] as [number, number] },
];

type ServiceAreaMapProps = {
  className?: string;
};

export default function ServiceAreaMap({ className = "" }: ServiceAreaMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !token) return;

    let map: MapboxMap | undefined;
    let markers: MapboxMarker[] = [];
    let cancelled = false;

    void import("mapbox-gl").then(({ default: mapboxgl }) => {
      if (cancelled) return;

      map = new mapboxgl.Map({
        accessToken: token,
        container,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [-95.2, 41.2],
        zoom: 5.6,
        minZoom: 4.5,
        maxZoom: 12,
        attributionControl: true,
      });

      map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");
      markers = locations.map(({ name, coordinates }) =>
        new mapboxgl.Marker({ color: "#ec6f95" })
          .setLngLat(coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 22 }).setText(name))
          .addTo(map!),
      );
    });

    return () => {
      cancelled = true;
      markers.forEach((marker) => marker.remove());
      map?.remove();
    };
  }, [token]);

  return (
    <div className={`mapbox-shell ${className}`}>
      {token ? (
        <div className="mapbox-canvas" ref={containerRef} aria-label="Mapbox map of eastern Nebraska and Iowa" />
      ) : (
        <div className="mapbox-fallback" role="status">
          <span className="mapbox-fallback-label">Mapbox service area</span>
          <strong>Nebraska &amp; Iowa</strong>
          <span>Set NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN in .env.local to load the interactive map.</span>
        </div>
      )}
    </div>
  );
}
