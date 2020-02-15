import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faInfoCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ConstructorRadComponent } from './constructor-rad/constructor-rad.component';
import { InstanceBase } from './models/instance-base';
import { ConstructorMotorComponent } from './constructor-motor/constructor-motor.component';
import { Motor } from './models/motor';
import { Treibstoff } from './models/treibstoff';
import { Rad } from './models/rad';
import { ReifenTyp } from './models/reifen-typ';
import { ConstructorAutoComponent } from './constructor-auto/constructor-auto.component';
import { Auto } from './models/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  treibstoffe = Treibstoff;
  reifentypen = ReifenTyp;

  objekte = new Array<InstanceBase>();

  faInfoCircle = faInfoCircle;
  faTrash = faTrash;

  constructor(
    private modalService: NgbModal
  ) { }

  oeffneNeuesRadPopup() {
    this.modalService.open(ConstructorRadComponent, { size: "lg" }).result.then(
      newRad => {
        this.objekte.push(newRad);
      },
      () => { } // Workaround: https://github.com/ng-bootstrap/ng-bootstrap/issues/880
    );
  }
  oeffneNeuerMotorPopup() {
    this.modalService.open(ConstructorMotorComponent, { size: "lg" }).result.then(
      newMotor => {
        this.objekte.push(newMotor);
      },
      () => { } // Workaround: https://github.com/ng-bootstrap/ng-bootstrap/issues/880
    );
  }

  oeffneNeuesAutoPopup() {
    const popupRef = this.modalService.open(ConstructorAutoComponent, { size: "lg" });
    popupRef.componentInstance.motoren = this.objekte.filter(obj => obj instanceof Motor);
    popupRef.componentInstance.raeder = this.objekte.filter(obj => obj instanceof Rad);
    popupRef.result.then(
      newAuto => {
        this.objekte.push(newAuto);
      },
      () => { } // Workaround: https://github.com/ng-bootstrap/ng-bootstrap/issues/880
    );
  }

  generiereAuto() {
    const autoName = `Auto_${Math.floor(Math.random() * 1000)}`;
    const reifentyp = ReifenTyp[Object.keys(ReifenTyp)[Math.floor(Math.random() * Object.keys(ReifenTyp).length)]];
    const treibstoff = Treibstoff[Object.keys(Treibstoff)[Math.floor(Math.random() * Object.keys(Treibstoff).length)]];

    const marken = ["Ford", "Volkswagen", "Skoda", "Peugeot", "Volvo", "Citroën", "Opel", "Dacia", "Toyota", "Mazda", "Renault", "Honda"];
    const marke = marken[Math.floor(Math.random() * marken.length)];

    const farben = ["Magic Blue", "Moonlight Silver", "Ice White", "Fusion Red", "Denim Blue", "Marple Brown", "Onyx Black", "Terra Grey"];
    const farbe = farben[Math.floor(Math.random() * farben.length)];

    const motor = new Motor(`${autoName}_motor`, Math.round(Math.random() * 600) + 35, treibstoff);
    const radVL = new Rad(`${autoName}_rad_vl`, reifentyp);
    const radVR = new Rad(`${autoName}_rad_vr`, reifentyp);
    const radHL = new Rad(`${autoName}_rad_hl`, reifentyp);
    const radHR = new Rad(`${autoName}_rad_hr`, reifentyp);

    this.objekte.push(new Auto(autoName, farbe, marke, motor, radVL, radVR, radHL, radHR));
    this.objekte.push(motor, radVL, radVR, radHL, radHR);
  }

  entferneAlleObjekte() {
    this.objekte.splice(0, this.objekte.length); // Array mit den Objekten leeren
  }
}
