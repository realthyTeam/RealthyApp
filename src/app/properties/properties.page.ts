import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.page.html',
  styleUrls: ['./properties.page.scss'],
})
export class PropertiesPage implements OnInit {
  images = [
    'https://img.lamudi.com.mx/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzL2NkYWE2NzAyLTc0OGEtMzA5NS1iYTBiLTMyYTE1NmU0MzdjNS82MWQ5ZGUzMy0zYTYxLTRjZTEtYjNlNi05NzI0OTgzNGY3YWEuanBnIiwiYnJhbmQiOiJMQU1VREkiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo2NTAsImZpdCI6ImNvdmVyIn19fQ==',
    'https://img.lamudi.com.mx/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzL2NkYWE2NzAyLTc0OGEtMzA5NS1iYTBiLTMyYTE1NmU0MzdjNS9hNmJiNmY4Ni0xMDM2LTQyNGEtYWYzYS01MzFmODQ3ZDUxZDkuanBnIiwiYnJhbmQiOiJMQU1VREkiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo2NTAsImZpdCI6ImNvdmVyIn19fQ==',
    'https://img.lamudi.com.mx/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzL2NkYWE2NzAyLTc0OGEtMzA5NS1iYTBiLTMyYTE1NmU0MzdjNS9hNjZiMDIwZS1iYTY0LTRmMTItYTM2ZC0yZjExMDAxMmM2OTcuanBnIiwiYnJhbmQiOiJMQU1VREkiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo2NTAsImZpdCI6ImNvdmVyIn19fQ==',
    // Agrega más rutas de imágenes según sea necesario
  ];
  ratingStars = ['star']; // Puntuación fija
  slideOpts = {
    initialSlide: 0, // Índice de la imagen inicial
    speed: 400, // Velocidad de deslizamiento
  };
  constructor() { }

  ngOnInit() {
  }

}
