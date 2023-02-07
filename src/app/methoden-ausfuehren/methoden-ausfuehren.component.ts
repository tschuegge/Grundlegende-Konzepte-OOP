import { Component, OnInit, Input } from '@angular/core';
import { Auto } from '../models/auto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Methode } from './methode';
import { AutoClassBase } from '../models/auto-class-base';
import { Motor } from '../models/motor';
import { Rad } from '../models/rad';

@Component({
  templateUrl: './methoden-ausfuehren.component.html'
})
export class MethodenAusfuehrenComponent implements OnInit {

  @Input() objekt?: AutoClassBase;
  @Input() methode?: Methode;

  form: FormGroup = new FormGroup({});
  result = "";
  methoden = Methode;

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    switch (this.methode) {
      case Methode.autoVollgas:
        this.form = new FormGroup({});
        break;

      case Methode.autoBeschleunigen:
      case Methode.motorBerechneGeschwindigkeit:
        this.form = new FormGroup({
          "gaspedalInProzent": new FormControl<number>(50, Validators.required)
        });
        break;

      case Methode.radReifenAbnutzen:
        this.form = new FormGroup({
          "gaspedalInProzent": new FormControl<number>(50, Validators.required),
          "leistungInKw": new FormControl<number | null>(null, Validators.required)
        });
        break;
    }
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      if (this.methode === Methode.autoBeschleunigen && this.objekt instanceof Auto) {
        const geschwindigkeit = this.objekt.beschleunigen(this.form.value.gaspedalInProzent);
        this.result = `beschleunigen(${this.form.value.gaspedalInProzent}) ==> ${geschwindigkeit} (Geschwindigkeit in km/h)`;
      } else if (this.methode === Methode.autoVollgas && this.objekt instanceof Auto) {
        const geschwindigkeit = this.objekt.vollgas();
        this.result = `vollgas() ==> ${geschwindigkeit} (Geschwindigkeit in km/h)`;
      } else if (this.methode === Methode.motorBerechneGeschwindigkeit && this.objekt instanceof Motor) {
        const geschwindigkeit = this.objekt.berechneGeschwindigkeit(this.form.value.gaspedalInProzent);
        this.result = `berechneGeschwindigkeit(${this.form.value.gaspedalInProzent}) ==> ${geschwindigkeit} (Geschwindigkeit in km/h)`;
      } else if (this.methode === Methode.radReifenAbnutzen && this.objekt instanceof Rad) {
        this.objekt.reifenAbnutzen(this.form.value.gaspedalInProzent, this.form.value.leistungInKw);
        this.result = `reifenAbnutzen(${this.form.value.gaspedalInProzent}, ${this.form.value.leistungInKw}) ==> void`;
      } else {
        this.result = `Interner Fehler aufgetreten: Objekt passt nicht zu aufgerufener Methode`;
      }
    }
  }

  close() {
    this.activeModal.dismiss();
  }

}
