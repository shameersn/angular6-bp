import { NgModule } from '@angular/core';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {AppConfig} from './config/app.config';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
