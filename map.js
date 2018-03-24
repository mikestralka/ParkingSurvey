//Instantiate the Leaflet map, set default coordinates and zoom.
var map = new L.map('map');
map.setView([45.000, -93.106],12);

//Add OSM as basemap.
var osmURL='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">' +
'OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmURL, {minzoom: 5, maxzoom: 15, attribution: osmAttrib});
map.addLayer(osm);

//Need to store a global marker reference in order to remove old ones.
var marker;
//Add event handler to the map
map.on('click', function(e){
	/*The removeLayer method will cause problems if called with an undefined var.
	The if statement only calls removeLayer if a marker exists.*/
	if (marker !== undefined){
		map.removeLayer(marker);
	};
	//Global marker var assigned to the new marker.
	marker = L.marker(e.latlng);
	//New marker added to the map.
	marker.addTo(map);
	/*Send coordinates to the form. This is only for the user's reference & reassurance.
	Previously I did use these form elements for submissions.*/
	document.getElementById("Latitude").value = marker.getLatLng().lat;
	document.getElementById("Longitude").value = marker.getLatLng().lng;
});

//Initialize Firebase; the config object links to my account and database.
/*var config = {
apiKey: 
authDomain: 
databaseURL: 
storageBucket: 
};
firebase.initializeApp(config);*/

/*This is how I made my own JSON from the form fields (non-GeoJSON).
Leaflet's GeoJSON method made this process much cleaner.
function prepare(destination, time, dif, lat, lon){
	return {
		destination: destination,
		time: time,
		difficulty: dif,
		latitute: lat,
		longitude: lon
	};
};*/