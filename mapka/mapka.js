$(document).ready(function(){
    var tileOSM = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
    
    var mymap = L.map('mymap',{center: [54.3467, 18.8333],zoom: 10});
    mymap.addLayer(tileOSM);
    
    var stylGminy = {
        "color": "green",
    };
    
    var gminy = new L.GeoJSON.AJAX("gminy.geojson", {style: stylGminy});
    gminy.addTo(mymap);

    var image = "port1.png",
    imageBounds = [[54.59583, 16.86187], [54.57917, 16.845]];
L.imageOverlay(image, imageBounds).addTo(mymap);
    
    var image1 = "druga.png",
    imageBounds1 = [[54.3467, 18.8333], [54.333, 18.815]];
L.imageOverlay(image1, imageBounds1).addTo(mymap);

});