// Create a new Leaflet map
let countriesMap;
countriesMap = L.map("map");

var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(countriesMap);

countriesMap.setView([41.87194, 12.56738], 2.5);




// define custom icon
const myIcon = new L.icon({
    iconUrl: 'images/pin.png',
    iconSize: [15, 20],
    iconAnchor: [10, 25],
    popupAnchor: [-30, -50],
});



L.geoJSON(world, {
// show custom icon
    pointToLayer: function(_feature, latlng) {
        return L.marker(latlng, {icon: myIcon});
    },   
    onEachFeature: function(feature, layer) {
// show popup
        const popupOptions = { className: "customPopup" };
        layer.bindPopup("<h5>" + feature.properties.Country + "</h5>", popupOptions);       
//put stuff in div  
        layer.on('click', function() {
            $("#map-info").html("<h5>" + feature.properties.Country + "</h5><p>" + feature.properties.Description + "</p><div class='image'><img src='" + feature.properties.Image + "'></div><p class='mapcaption'>" + feature.properties.Caption + "</p><p class='source'><a href='" + feature.properties.Source + "' target='_blank'>Image Source</a></p>"); 
//add random class to h5
            const fonts = ["gothic", "orpheus", "acumin"];
            $("h5").each(function(){
                $(this).addClass( fonts.splice( (Math.random()*fonts.length), 1 ) );
            });                      
        });
        } 
 //end onEachFeature       
    }).addTo(countriesMap);

    


// what?    

