import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MobxAngularModule } from 'mobx-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { FormsModule } from '@angular/forms';
import { CalculateMoneyOwedComponent } from './calculate-money-owed/calculate-money-owed.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    PersonInfoComponent,
    CalculateMoneyOwedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MobxAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
