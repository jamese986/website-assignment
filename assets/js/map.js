"use strict";

 function initMap(){
      // Google Maps options
      let options = {
        zoom:16,
        center:{lat:52.629399,lng:-1.137801}
      }

      // Create New Map
      let map = new google.maps.Map(document.getElementById('map'), options);     

  
      // Add marker
      let marker = new google.maps.Marker({
        position:{lat:52.629399,lng:-1.137801},
        map:map,
        icon:'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'
      });
      //info pop up
        let infoWindow = new google.maps.InfoWindow({
        content:'<h1>DMU-PHP</h1><p>Gateway House</p><p>De Montfort University</p><p>The Gateway</p><p>Leicester</p><p>LE1 9BH</p>'
      });

        marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });  
   
    }
