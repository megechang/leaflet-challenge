var api_key = "pk.eyJ1IjoibWVnZWNoYW5nIiwiYSI6ImNrY21nNDlicTAweXYyeG16bzNkY2VteXYifQ.UHHqTFjqvYZrBGOTUB2w1A";

var earthquake_map = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: api_key
});

var myMap = L.map("map", {
  center: [45.52, -122.67],
  zoom: 5
});

earthquake_map.addTo(myMap);

d3.json("hhttps://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson", function(data){
    function earthquake_color(magnitude){
        switch(true) {
            case magnitude > 5: 
              return "r#FF0000";
            case magnitude > 4:
              return "#FFA500";
            case magnitude > 3:
                return "y#FFFF00";
            case magnitude > 2: 
                return "#000000";
            case magnitude > 1: 
                return "#008000";
            case magnitude > 0:
                return "#0000FF";
            default:
              // code block
          }
    }


});

//L.geoJson combine data and coloring
//create legend, use L.domUtil.create 
// .addTo(map)