import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
// import { UserDetailsComponent } from './components/user-details/user-details.component';
// import { FormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { UserLComponent } from './components/user-l/user-l.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    // UserDetailsComponent,
    UserLComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
