import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth.routing.module';

import { LoginComponent } from './login/login.component';

import { LoginService } from './services/login.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    LoginService
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
