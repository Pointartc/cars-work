import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from "./share/services/auth.guard";

const routes: Routes = [
  {path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), },
  {path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule),canActivate: [authGuard]},
  {path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule), canActivate: [authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
