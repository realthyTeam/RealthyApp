import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  nombre: string = 'Mathew Adam';
  correo: string = 'mathew@email.com';
  imagen: string = 'https://source.unsplash.com/random';
  listings: number = 30;
  reviews: number = 20;
  sold: number = 100;
  listingsCant: number = 140;
  isFavorite = false;

  user: any;
  id_user: any;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    // this.id_user = localStorage.getItem('id_user')
    // if (this.apiService.isLoggedIn()) {
    //   this.apiService.getCurrentUser(this.id_user).subscribe(
    //     (response) => {
    //       this.user = response.data;
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }

  goBack() {
    this.location.back();
  }


  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }


  logout() {
    this.apiService.logout().subscribe(
      (response) => {
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
