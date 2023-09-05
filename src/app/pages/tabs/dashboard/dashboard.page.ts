import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/auth.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  slideOpts = {
    slidesPerView: 1.3,

  };
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
  goToNotifications() {
    this.router.navigateByUrl('/tabs/notifications');
  }
  logout() {
    this.apiService.logout().subscribe(
      (response) => {
        this.user = "";
        this.router.navigate(['/home']);
      },
      (error) => {
        this.router.navigate(['/home']);
        console.log(error);
      }
    );
  }
}
