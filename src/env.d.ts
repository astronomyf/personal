/// <reference types="astro/client" />

import * as mapbox from "mapbox-gl";

declare global {
  var mapboxgl: typeof mapbox;
  var mapInstance: mapbox.Map;
}

export {};
