let map;

function initMap() {
   let button = document.createElement("button");
   let myLatLng = { lat: 47.45112032496302, lng: 9.397644905552271 };
   map = new google.maps.Map(document.getElementById("map"), {
      center: myLatLng,
      zoom: 10,
      mapId: "a2e4533c8306f2fe",
      mapTypeControl: true,
      mapTypeControlOptions: {
         style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
         mapTypeIds: ["roadmap", "terrain"],
      },
   });

   map.setOptions({
      minZoom: 3,
      maxZoom: 20,
   });

   new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Home",
   });

   const iconBase = "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

   const icons = {
      parking: {
         icon: iconBase + "parking_lot_maps.png",
      },
      store: {
         icon: iconBase + "library_maps.png",
      },
      home: {
         icon: iconBase + "info-i_maps.png",
      },
   };

   const features = [
      {
         position: new google.maps.LatLng(myLatLng.lat + 0.1, myLatLng.lng + 0.01),
         type: "parking",
      },
      {
         position: new google.maps.LatLng(myLatLng.lat + 0.2, myLatLng.lng - 0.01),
         type: "parking",
      },
      {
         position: new google.maps.LatLng(myLatLng.lat - 0.3, myLatLng.lng + 0.01),
         type: "parking",
      },
      {
         position: new google.maps.LatLng(myLatLng.lat + 0.4, myLatLng.lng + 0.01),
         type: "parking",
      },
      {
         position: new google.maps.LatLng(myLatLng.lat - 0.26, myLatLng.lng - 0.01),
         type: "parking",
      },
      {
         position: new google.maps.LatLng(myLatLng.lat + 0.01, myLatLng.lng - 0.1),
         type: "store",
      },
      {
         position: new google.maps.LatLng(myLatLng.lat + 0.01, myLatLng.lng - 0.2),
         type: "store",
      },
      {
         position: new google.maps.LatLng(myLatLng.lat + 0.01, myLatLng.lng - 0.3),
         type: "store",
      },
      {
         position: new google.maps.LatLng(myLatLng.lat + 0.01, myLatLng.lng + 0.4),
         type: "store",
      },
      {
         position: new google.maps.LatLng(myLatLng.lat + 0.01, myLatLng.lng + 0.5),
         type: "store",
      },
      {
         position: new google.maps.LatLng(myLatLng.lat + 0.15, myLatLng.lng + 0.15),
         type: "store",
      },
      {
         position: new google.maps.LatLng(myLatLng.lat - 0.1, myLatLng.lng - 0.13),
         type: "home",
      },
      {
         position: new google.maps.LatLng(myLatLng.lat - 0.09, myLatLng.lng - 0.06),
         type: "home",
      },
   ];
   let marker;
   for (let i = 0; i < features.length; i++) {
      marker = new google.maps.Marker({
         position: features[i].position,
         icon: icons[features[i].type].icon,
         map: map,
      });
   }

   button.textContent = "Button";
   button.style.margin = "20px 0 0 20px";
   map.controls[google.maps.ControlPosition.TOP_LEFT].push(button);
   button.addEventListener("click", () => {
      window.setTimeout(() => {
         map.panTo(marker.getPosition());
      }, 1000);
   });
}
