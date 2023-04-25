import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private location: Location, private api: ApiService,private router: Router, private alertController: AlertController) { }
  email: any;

  ngOnInit() {
  }
  goBack() {
    this.location.back();
  }
  async presentAlert(newPassword: string) {
    const alert = await this.alertController.create({
      header: 'Nueva Contraseña Generada',
      message: 'Su nueva contraseña es: ' + newPassword,
      buttons: ['OK']
    });

    await alert.present();
  }

  forgotPassword() {
    this.api.newPassword(this.email).subscribe(response => {

      if (response.new_password == undefined) {
        console.log("El email ingresado no le corresponde a ningún usuario");
      }
      else {
        console.log(response.message);
        console.log("Nueva Contraseña " + response.new_password);
        this.presentAlert(response.new_password);
        this.router.navigate(['/login']);
      }
    });
  }
}
