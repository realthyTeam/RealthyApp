import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: any;
  id_user: any;
  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id_user = localStorage.getItem('id_user')
    if (this.apiService.isLoggedIn()) {
      this.apiService.getCurrentUser(this.id_user).subscribe(
        (response) => {
          this.user = response.data;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
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
