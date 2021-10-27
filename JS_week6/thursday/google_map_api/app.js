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

   let marker = new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Home",
   });

   button.textContent = "Button";
   button.style.margin = "20px 0 0 20px";
   map.controls[google.maps.ControlPosition.TOP_LEFT].push(button);
   button.addEventListener("click", () => {
      window.setTimeout(() => {
         map.panTo(marker.getPosition());
      }, 1000);
   });
}
