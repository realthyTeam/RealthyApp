import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as mapboxgl from 'mapbox-gl';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/auth.service';

@Component({
selector: 'app-add-your-location',
templateUrl: './add-your-location.page.html',
styleUrls: ['./add-your-location.page.scss'],
})
export class AddYourLocationPage implements OnInit {
  markerLocation!: mapboxgl.LngLatLike;
  marker!: mapboxgl.Marker; // Variable para el marcador

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    const map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1IjoiZWxtb3kiLCJhIjoiY2xlaG5vczZwMDA5azN5bnQzbXdiZmRoNCJ9.O-YqxE-SCXrEsChPekms6Q',
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',

      zoom: 14,
      attributionControl: false
    });
    // Ajustar el mapa al tamaño de la pantalla
    map.on('load', () => {
      map.resize();
    });

    // Crear el marcador en la ubicación actual del usuario
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      // Crear el marcador
      this.marker = new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);

      // Centrar el mapa en la ubicación del usuario
      map.setCenter([longitude, latitude]);
    }, error => {
      console.error(error);
    });

    // Agregar evento de clic al mapa
    map.on('click', async event => {
      const lngLat: mapboxgl.LngLat = event.lngLat;

      // Eliminar el marcador anterior, si existe
      if (this.marker) {
        this.marker.remove();
      }

      // Agregar un nuevo marcador en la ubicación actual
      this.marker = new mapboxgl.Marker()
        .setLngLat(lngLat)
        .addTo(map);

      // Usar la API de geocodificación de Mapbox para convertir las coordenadas en una dirección
      const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lngLat.lng},${lngLat.lat}.json?access_token=pk.eyJ1IjoiZWxtb3kiLCJhIjoiY2xlaG5vczZwMDA5azN5bnQzbXdiZmRoNCJ9.O-YqxE-SCXrEsChPekms6Q`);
      const data = await response.json();

      // Mostrar la dirección en el label
      const address = data.features[0].place_name;
      document.getElementById('address-label')!.textContent = address;
    });
  }

goBack() {
this.location.back();
}
}
