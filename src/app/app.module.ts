import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { APP_CONFIG, AppConfig } from './config/app.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
