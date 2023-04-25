import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordType: string = 'password';
  eye: string = 'Mostrar contraseña';
  LoginForm: FormGroup;
  constructor(private router: Router, private location: Location, private formBuilder: FormBuilder, private alertController: AlertController, private api: ApiService) {
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.eye = this.eye === 'Mostrar contraseña' ? 'Ocultar contraseña' : 'Mostrar contraseña';
  }
  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
  login(){
    this.api.login(this.LoginForm.get('email')?.value, this.LoginForm.get('password')?.value).subscribe(
      async (response: any)  => {
        console.log(response);
        localStorage.setItem('access_token',response.token)
        localStorage.setItem('id_user',response.data.id)
        this.router.navigate(['/tabs']);
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: error.error.message,
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }
  navigatoForgot(){
    this.router.navigate(['/forgot-password']);

  }
  }

