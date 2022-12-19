import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
//import { MyModule } from './my-module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
//import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticateComponent
  ],
  imports: [
    AuthModule,
 //   ThemeModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
 //   MyModule.withProviders()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }