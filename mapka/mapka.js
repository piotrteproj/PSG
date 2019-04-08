$(document).ready(function(){
    var tileOSM = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
    
    var mymap = L.map('mymap',{center: [52.3289,21.0],zoom: 10});
    mymap.addLayer(tileOSM);
    
    var stylGminy = {
        "color": "green",
    };
    
    var gminy = new L.GeoJSON.AJAX("gminy.geojson", {style: stylGminy});
    gminy.addTo(mymap);
}
);