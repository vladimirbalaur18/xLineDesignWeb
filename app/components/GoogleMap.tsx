"use client";

import { Wrapper } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState } from "react";

interface GoogleMapProps {
  center: { lat: number; lng: number };
  zoom: number;
  className?: string;
}

function MapComponent({ center, zoom }: Omit<GoogleMapProps, "className">) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>();

  useEffect(() => {
    if (ref.current && !map) {
      try {
        const newMap = new window.google.maps.Map(ref.current, {
          center,
          zoom,
          styles: [
            {
              elementType: "geometry",
              stylers: [{ color: "#1a1a1a" }],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [{ color: "#000000" }],
            },
            {
              elementType: "labels.text.fill",
              stylers: [{ color: "#ffffff" }],
            },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#263c3f" }],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6b9a76" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#38414e" }],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ color: "#212a37" }],
            },
            {
              featureType: "road",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9ca5b3" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [{ color: "#746855" }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ color: "#1f2835" }],
            },
            {
              featureType: "road.highway",
              elementType: "labels.text.fill",
              stylers: [{ color: "#f3d19c" }],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [{ color: "#2f3948" }],
            },
            {
              featureType: "transit.station",
              elementType: "labels.text.fill",
              stylers: [{ color: "#d59563" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#17263c" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#515c6d" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#17263c" }],
            },
          ],
          disableDefaultUI: true,
          zoomControl: true,
          scrollwheel: false,
          gestureHandling: "cooperative",
        });

        // Add a marker
        new window.google.maps.Marker({
          position: center,
          map: newMap,
          title: "xLine Design",
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: "#ffffff",
            fillOpacity: 1,
            strokeColor: "#000000",
            strokeWeight: 2,
          },
        });

        setMap(newMap);
      } catch (error) {
        console.error("Error creating Google Map:", error);
      }
    }
  }, [ref, map, center, zoom]);

  return <div ref={ref} className="w-full h-full" />;
}

export default function GoogleMap({ center, zoom, className }: GoogleMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Debug logging
  useEffect(() => {
    console.log("Google Maps API Key:", apiKey ? "Present" : "Missing");
    if (!apiKey) {
      console.error(
        "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not set in environment variables"
      );
    }
  }, [apiKey]);

  const render = (status: string) => {
    console.log("Google Maps Wrapper status:", status);

    if (status === "LOADING") {
      return (
        <div className="w-full h-full bg-black/40 flex items-center justify-center">
          <div className="text-white/70 text-center">
            <div className="animate-spin w-6 h-6 border-2 border-white/20 border-t-white/70 rounded-full mx-auto mb-2"></div>
            <div>Loading map...</div>
          </div>
        </div>
      );
    }

    if (status === "FAILURE") {
      return (
        <div className="w-full h-full bg-black/40 flex items-center justify-center p-4">
          <div className="text-white/70 text-center max-w-sm">
            <div className="text-red-400 mb-2">⚠️ Map Error</div>
            <div className="text-sm">
              {!apiKey ? (
                "Google Maps API key is missing"
              ) : (
                <>
                  Failed to load Google Maps. This could be due to:
                  <ul className="text-xs mt-2 text-left space-y-1">
                    <li>• Invalid API key</li>
                    <li>• Maps JavaScript API not enabled</li>
                    <li>• Billing not set up</li>
                    <li>• Domain restrictions</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }

    return <MapComponent center={center} zoom={zoom} />;
  };

  // If no API key, show fallback immediately
  if (!apiKey) {
    return (
      <div className={className}>
        <div className="w-full h-full bg-black/40 flex items-center justify-center p-4">
          <div className="text-white/70 text-center">
            <div className="text-red-400 mb-2">⚠️ Configuration Required</div>
            <div className="text-sm">
              Google Maps API key is not configured.
              <br />
              Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your environment.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <Wrapper apiKey={apiKey} render={render} libraries={["places"]}>
        <MapComponent center={center} zoom={zoom} />
      </Wrapper>
    </div>
  );
}
