import { Component, OnInit, Input } from '@angular/core';
import { Auto } from '../models/auto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Methode } from './methode';

@Component({
  templateUrl: './methoden-ausfuehren.component.html'
})
export class MethodenAusfuehrenComponent implements OnInit {

  @Input() objekt: any;
  @Input() methode: Methode;

  form: FormGroup;
  result = "";
  methoden = Methode;

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    switch (this.methode) {
      case Methode.autoBeschleunigen:
      case Methode.motorBerechneGeschwindigkeit:
        this.form = new FormGroup({
          "gaspedalInProzent": new FormControl(null, Validators.required)
        });
        break;

      case Methode.radReifenAbnutzen:
        this.form = new FormGroup({
          "gaspedalInProzent": new FormControl(null, Validators.required),
          "leistungInKw": new FormControl(null, Validators.required)
        });
        break;
    }
  }

  onSubmit() {
    if (this.methode === Methode.autoBeschleunigen) {
      const geschwindigkeit = this.objekt.beschleunigen(this.form.value.gaspedalInProzent);
      this.result = `beschleunigen(${this.form.value.gaspedalInProzent}) ==> ${geschwindigkeit} (Geschwindigkeit in km/h)`;
    } else if (this.methode === Methode.autoVollgas) {
      const geschwindigkeit = this.objekt.vollgas();
      this.result = `vollgas() ==> ${geschwindigkeit} (Geschwindigkeit in km/h)`;
    } else if (this.methode === Methode.motorBerechneGeschwindigkeit) {
      const geschwindigkeit = this.objekt.berechneGeschwindigkeit(this.form.value.gaspedalInProzent);
      this.result = `berechneGeschwindigkeit(${this.form.value.gaspedalInProzent}) ==> ${geschwindigkeit} (Geschwindigkeit in km/h)`;
    } else if (this.methode === Methode.radReifenAbnutzen) {
      this.objekt.reifenAbnutzen(this.form.value.gaspedalInProzent, this.form.value.leistungInKw);
      this.result = `reifenAbnutzen(${this.form.value.gaspedalInProzent}, ${this.form.value.leistungInKw}) ==> void`;
    }
  }

  close() {
    this.activeModal.dismiss();
  }

}
