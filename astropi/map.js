L.mapbox.accessToken = 'pk.eyJ1IjoiZGllZ292byIsImEiOiJja2FsbTFzY3UwYmVyMnpucXR5Zmd2cWJvIn0.qj7ft925pVqHQYBVYbIzQg';
var mapbox = L.map('mapbox-map').setView([51.4948, -0.175940], 20);
var leaflet = L.map('leaflet-map').setView([51.4948, -0.175940], 18);
// Add tiles from the Mapbox Static Tiles API
// (https://docs.mapbox.com/api/maps/#static-tiles)
// Tiles are 512x512 pixels and are offset by 1 zoom level
L.tileLayer(
    //'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
      'https://api.mapbox.com/styles/v1/diegovo/ckamhikih251t1illcoe0boc9/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapbox);

L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    	subdomains: 'abcd',
    	maxZoom: 19
    }).addTo(leaflet);