import { Component } from '@angular/core';
//https://asymmetrik.com/ngx-leaflet-tutorial-angular-cli/
import { icon, latLng, Map, marker, point, polyline, tileLayer } from 'leaflet';
@Component({
  selector: 'app-parkmap',
  templateUrl: './parkmap.component.html',
  styleUrls: ['./parkmap.component.scss']
})
export class ParkmapComponent {

  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
  });

 

  summit = marker([ 28.385233, -81.563873], {
      icon: icon({
      iconSize: [ 41, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'http://kairossmartsolutions.com/wp-content/uploads/2018/03/local-pin-e1348168117876.png',
      shadowUrl: 'leaflet/marker-shadow.png',
    
    })
  });
  paradise = marker([ 28.474321,-81.467819 ], {
    icon: icon({
      iconSize: [ 41, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'http://kairossmartsolutions.com/wp-content/uploads/2018/03/local-pin-e1348168117876.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  buschGardens = marker([ 28.0372,-82.4195 ], {
    icon: icon({
      iconSize: [ 41, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'http://kairossmartsolutions.com/wp-content/uploads/2018/03/local-pin-e1348168117876.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    })
  });

  seaWorld = marker([ 28.4115,-81.4617 ], {
    icon: icon({
      iconSize: [ 41, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'http://kairossmartsolutions.com/wp-content/uploads/2018/03/local-pin-e1348168117876.png',
      shadowUrl: 'leaflet/marker-shadow.png',
 
    })
  });

 
  route = polyline([[ 28.385233, -81.563873 ], [  28.474321,-81.467819 ]]);

  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    }
  };
  options = {
    layers: [ this.streetMaps, this.summit, this.paradise, this.buschGardens, this.seaWorld ],  //this.route to add route
    zoom: 12,
    zoomAnimation: true,
    center: latLng([ 28.385233, -81.563873 ]) //map location on entering app
  };

  onMapReady(map: Map) {
    map.fitBounds
  } 
}
