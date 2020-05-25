L.mapbox.accessToken = 'pk.eyJ1IjoiZGllZ292byIsImEiOiJja2FsbTFzY3UwYmVyMnpucXR5Zmd2cWJvIn0.qj7ft925pVqHQYBVYbIzQg';
var map = L.map('map').setView([51.4948, -0.175940], 20);

// Add tiles from the Mapbox Static Tiles API
// (https://docs.mapbox.com/api/maps/#static-tiles)
// Tiles are 512x512 pixels and are offset by 1 zoom level
L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken, {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);