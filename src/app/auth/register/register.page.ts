import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  passwordType: string = 'password';
  eye: string = 'Mostrar contraseña';
  registerForm: FormGroup;
  currentUser: any;

  constructor(private router: Router, private location: Location, private formBuilder: FormBuilder, private alertController: AlertController, private api: ApiService) {


    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
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
  async onSubmit() {
    if (!this.registerForm.valid) {
      let errorMessage = '';
      const formControls = this.registerForm.controls;
      Object.keys(formControls).forEach(field => {
        const control = formControls[field];
        if (control instanceof FormControl) {
          if (!control.valid) {
            if (field === 'name') {
              errorMessage += 'El nombre es requerido.';
            } else if (field === 'email') {
              errorMessage += 'El correo electrónico es requerido y debe tener un formato válido.';
            } else if (field === 'password') {
              errorMessage += 'La contraseña es requerida y debe tener al menos 6 caracteres.';
            }
          }
        }
      });
      const alert = await this.alertController.create({
        header: 'Atención',
        message: errorMessage,
        buttons: ['OK']
      });
      await alert.present();
    } else {
      const { name, email, password, password_confirmation } = this.registerForm.value;
      this.api.register(name, email, password).subscribe(
        async (response) => {
          // Aquí puedes mostrar una alerta o redirigir a otra página en caso de éxito
          const alert = await this.alertController.create({
            header: 'Información',
            message: 'Registro completado con éxito',
            buttons: ['OK']
          });
          await alert.present();

          this.api.login(email, password).subscribe(
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
        },
        async (error) => {
          // Aquí puedes mostrar una alerta con el mensaje de error en caso de fallo
          const alert = await this.alertController.create({
            header: 'Error',
            message: error.error.message,
            buttons: ['OK']
          });
          await alert.present();
        }
      );
    }

  }


}


