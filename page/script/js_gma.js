// resize map
const mapdiv = document.getElementById('map');
var margin;
if (document.all) {
  margin = parseInt(document.body.currentStyle.marginTop, 10) + parseInt(document.body.currentStyle.marginBottom, 10);
} else {
  margin = parseInt(document.defaultView.getComputedStyle(document.body, '').getPropertyValue('margin-top')) + parseInt(document.defaultView.getComputedStyle(document.body, '').getPropertyValue('margin-bottom'));
}
mapdiv.style.height = (window.innerHeight - margin) + 'px';

var apikey = 'a5ce32f456ad45db98ff08089fed7153' //key for pland testing purpose
//var apikey = '' //key from 3D system 
//var apikey = '584b2fa686f14ba283874318b3b8d6b0' //api.hkmapservice.gov.hk starter key


var map = new ol.Map({
  target: 'map',
  controls: ol.control.defaults({
  	attributionOptions: ({
    	collapsible: false
    })
  }),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        attributions: new ol.Attribution({
          html: "<a href='https://api.portal.hkmapservice.gov.hk/disclaimer' target='_blank'>&copy; Map from Lands Department</a><div style='width:25px;height:25px;display:inline-flex;background:url(https://api.hkmapservice.gov.hk/mapapi/landsdlogo.jpg);background-size:25px;margin-left:4px'></div>"
          }),
        url: 'https://api.hkmapservice.gov.hk/osm/xyz/basemap/WGS84/tile/{z}/{x}/{y}.png?key=' + apikey
           })
         }),
          new ol.layer.Tile({
                   source: new ol.source.XYZ({
						url: 'https://api.hkmapservice.gov.hk/osm/xyz/label-sc/WGS84/tile/{z}/{x}/{y}.png?key='+ apikey
                   })
                 })
       ],
       view: new ol.View({
         center: ol.proj.fromLonLat([114.20847, 22.29227]),
         zoom: 17,
         minZoom: 10,
         maxZoom: 19
       })
     });