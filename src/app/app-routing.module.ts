import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },{
    path: 'login',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },{
    path: 'register',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'forgot-password',
    redirectTo: 'forgot-password',
    pathMatch: 'full'
  },
  {
    path: 'code-auth',
    loadChildren: () => import('./auth/code-auth/code-auth.module').then( m => m.CodeAuthPageModule)
  },
  {
    path: 'code-auth',
    redirectTo: 'code-auth',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-your-location',
    loadChildren: () => import('./profile/add-your-location/add-your-location.module').then( m => m.AddYourLocationPageModule)
  },
  {
    path: 'add-your-location',
    redirectTo: 'add-your-location',
    pathMatch: 'full'
  },  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
