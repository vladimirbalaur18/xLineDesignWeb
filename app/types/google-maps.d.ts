declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google.maps {
  interface MapOptions {
    center?: LatLng | LatLngLiteral;
    zoom?: number;
    styles?: MapTypeStyle[];
    disableDefaultUI?: boolean;
    zoomControl?: boolean;
    scrollwheel?: boolean;
    gestureHandling?: string;
  }

  interface MapTypeStyle {
    elementType?: string;
    featureType?: string;
    stylers?: Array<{ [key: string]: string | number }>;
  }

  interface MarkerOptions {
    position?: LatLng | LatLngLiteral;
    map?: Map;
    title?: string;
    icon?: Symbol | Icon | string;
  }

  interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  interface Symbol {
    path: SymbolPath | string;
    scale?: number;
    fillColor?: string;
    fillOpacity?: number;
    strokeColor?: string;
    strokeWeight?: number;
  }

  enum SymbolPath {
    CIRCLE = 0,
    FORWARD_CLOSED_ARROW = 1,
    FORWARD_OPEN_ARROW = 2,
    BACKWARD_CLOSED_ARROW = 3,
    BACKWARD_OPEN_ARROW = 4,
  }

  class Map {
    constructor(mapDiv: Element | null, opts?: MapOptions);
  }

  class Marker {
    constructor(opts?: MarkerOptions);
  }

  class LatLng {
    constructor(lat: number, lng: number);
  }
}

export {};
