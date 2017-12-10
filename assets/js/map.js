"use strict";

 function initMap(){
      // Google Maps options
      var options = {
        zoom:16,
        center:{lat:52.629399,lng:-1.137801}
      }

      // Create New Map
      var map = new google.maps.Map(document.getElementById('map'), options);     

  
      // Add marker
      var marker = new google.maps.Marker({
        position:{lat:52.629399,lng:-1.137801},
        map:map,
        icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      });
      //info pop up
        var infoWindow = new google.maps.InfoWindow({
        content:'<h1>DMU-PHP</h1><p>Gateway House</p><p>De Montfort University</p><p>The Gateway</p><p>Leicester</p><p>LE1 9BH</p>'
      });

        marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });  
   
    }
