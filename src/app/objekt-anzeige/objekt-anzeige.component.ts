import { Component, OnInit, Input } from '@angular/core';
import { Rad } from '../models/rad';
import { Motor } from '../models/motor';
import { Auto } from '../models/auto';
import { faCarSide, faCogs } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MethodenAusfuehrenComponent } from '../methoden-ausfuehren/methoden-ausfuehren.component';
import { Methode } from '../methoden-ausfuehren/methode';

@Component({
  selector: 'app-objekt-anzeige',
  templateUrl: './objekt-anzeige.component.html',
  styleUrls: ['./objekt-anzeige.component.scss']
})
export class ObjektAnzeigeComponent implements OnInit {

  @Input() objekt: any;
  typ: "Rad" | "Motor" | "Auto";
  typMethoden = Array<Methode>();
  icon: IconDefinition;
  methoden = Methode;
  constructor(
    private modalService: NgbModal
  ) { }


  ngOnInit(): void {
    if (this.objekt instanceof Rad) {
      this.typ = "Rad";
      this.icon = faCircle;
      this.typMethoden.push(Methode.radReifenAbnutzen);
    } else if (this.objekt instanceof Motor) {
      this.typ = "Motor";
      this.icon = faCogs;
      this.typMethoden.push(Methode.motorBerechneGeschwindigkeit);
    } else if (this.objekt instanceof Auto) {
      this.typ = "Auto";
      this.icon = faCarSide;
      this.typMethoden.push(Methode.autoBeschleunigen, Methode.autoVollgas);
    }

  }

  runMethode(methode: Methode) {
    const popupRef = this.modalService.open(MethodenAusfuehrenComponent, { size: "lg" });
    popupRef.componentInstance.methode = methode;
    popupRef.componentInstance.objekt = this.objekt;
  }

}
