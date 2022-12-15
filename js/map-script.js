// Create a new Leaflet map
let countriesMap;
countriesMap = L.map("map");

var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(countriesMap);

countriesMap.setView([41.87194, 12.56738], 3);


new L.GeoJSON(world).addTo(countriesMap);






L.geoJSON(world, {
    onEachFeature: function(feature, layer) {
        layer.bindPopup("<h5>" + feature.properties.Country + "</h5>");
//put stuff in div  

        layer.on('click', function() {


        if (feature.properties.Country == 'Egypt'){
            $("#map-info").html("<h5>test" + feature.properties.Country + "</h5> <hr> <p>" + feature.properties.Description + "<p class='mapcaption'>" + feature.properties.Caption + "</p><p class='source'><iframe width='560' height='315' src='" + feature.properties.Image + "' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></p></div>");
        } else {
            $("#map-info").html("<h5>" + feature.properties.Country + "</h5> <hr> <p>" + feature.properties.Description + "</p><div class='image'><img src='" + feature.properties.Image + "'><p class='mapcaption'>" + feature.properties.Caption + "</p><p class='source'><a href='" + feature.properties.Source + "' target='_blank'>Image Source</a></p></div>");
        }    

//add random class to h5
            const fonts = ["gothic", "orpheus", "acumin"];
            $("h5").each(function(){
                $(this).addClass( fonts.splice( (Math.random()*fonts.length), 1 ) );
            });           
            
        });
//end put stuff in div
        } 
    }).addTo(countriesMap);




// what?    
countryMarker = new L.geoJson(world, {
        onEachFeature: function(feature, layer) {

            return L.marker(latlng,{icon: cityIcon});
        }
    });
  
    map.addLayer(cityMarker);