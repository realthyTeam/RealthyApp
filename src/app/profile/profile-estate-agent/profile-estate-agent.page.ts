import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile-estate-agent',
  templateUrl: './profile-estate-agent.page.html',
  styleUrls: ['./profile-estate-agent.page.scss'],
})
export class ProfileEstateAgentPage implements OnInit {

  nombre: string = 'Juan';
  correo: string = 'juan.perez@example.com';
  imagen: string = 'https://source.unsplash.com/random';
  calificacion: number = 4.5;
  reviews: number = 20;
  sold: number = 100;
  listingsCant: number = 140;
  isFavorite = false;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }


  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

}
