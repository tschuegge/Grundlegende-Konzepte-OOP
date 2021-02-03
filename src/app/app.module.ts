import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from './app.component';
import { ObjektAnzeigeComponent } from './objekt-anzeige/objekt-anzeige.component';
import { ConstructorRadComponent } from './constructor-rad/constructor-rad.component';
import { ConstructorMotorComponent } from './constructor-motor/constructor-motor.component';
import { ConstructorAutoComponent } from './constructor-auto/constructor-auto.component';
import { MethodenAusfuehrenComponent } from './methoden-ausfuehren/methoden-ausfuehren.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstructorRadComponent,
    ConstructorMotorComponent,
    ObjektAnzeigeComponent,
    ConstructorAutoComponent,
    MethodenAusfuehrenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    FontAwesomeModule
  ],
  providers: [],
  entryComponents: [
    ConstructorRadComponent,
    ConstructorMotorComponent,
    ConstructorAutoComponent,
    MethodenAusfuehrenComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
