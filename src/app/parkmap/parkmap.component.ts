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

 

  disneyworld = marker([ 28.385233, -81.563873], {
      icon: icon({
      iconSize: [ 41, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'http://kairossmartsolutions.com/wp-content/uploads/2018/03/local-pin-e1348168117876.png',
      shadowUrl: 'leaflet/marker-shadow.png',
    
    })
  });
  universal = marker([ 28.474321,-81.467819 ], {
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

  disneycalifornia = marker([ 33.8121,-117.9190 ], {
    icon: icon({
      iconSize: [ 41, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'http://kairossmartsolutions.com/wp-content/uploads/2018/03/local-pin-e1348168117876.png',
      shadowUrl: 'leaflet/marker-shadow.png',
 
    })
  });

  universalCalifornia = marker([ 34.1398,-118.3506 ], {
    icon: icon({
      iconSize: [ 41, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'http://kairossmartsolutions.com/wp-content/uploads/2018/03/local-pin-e1348168117876.png',
      shadowUrl: 'leaflet/marker-shadow.png',
 
    })
  });

  disneyParis = marker([ 48.8672, 2.7838 ], {
    icon: icon({
      iconSize: [ 41, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'http://kairossmartsolutions.com/wp-content/uploads/2018/03/local-pin-e1348168117876.png',
      shadowUrl: 'leaflet/marker-shadow.png',
 
    })
  });

  altonTowers = marker([ 52.9874,-1.8865 ], {
    icon: icon({
      iconSize: [ 41, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'http://kairossmartsolutions.com/wp-content/uploads/2018/03/local-pin-e1348168117876.png',
      shadowUrl: 'leaflet/marker-shadow.png',
 
    })
  });

  europaPark = marker([ 48.2660,7.7220 ], {
    icon: icon({
      iconSize: [ 41, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'http://kairossmartsolutions.com/wp-content/uploads/2018/03/local-pin-e1348168117876.png',
      shadowUrl: 'leaflet/marker-shadow.png',
 
    })
  });

  portAventura = marker([ 41.0878, 1.1572 ], {
    icon: icon({
      iconSize: [ 41, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'http://kairossmartsolutions.com/wp-content/uploads/2018/03/local-pin-e1348168117876.png',
      shadowUrl: 'leaflet/marker-shadow.png',
 
    })
  });
 
  disneyShangai = marker([ 31.1416, 121.6624], {
    icon: icon({
      iconSize: [ 41, 41 ],
      iconAnchor: [ 13, 41 ],
      iconUrl: 'http://kairossmartsolutions.com/wp-content/uploads/2018/03/local-pin-e1348168117876.png',
      shadowUrl: 'leaflet/marker-shadow.png',
 
    })
  });

  taytoPark = marker([ 53.5450, -6.4616], {
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
    layers: [ this.streetMaps, this.disneyworld, this.universal, this.buschGardens, this.seaWorld,
    this.disneycalifornia, this.universalCalifornia, this.disneyParis, this.altonTowers,this.europaPark,
    this.portAventura, this.disneyShangai, this.taytoPark  ],  
    zoom: 12,
    zoomAnimation: true,
    center: latLng([ 28.385233, -81.563873 ]) //map location on entering app
  };

  onMapReady(map: Map) {
    map.fitBounds
  } 
}
