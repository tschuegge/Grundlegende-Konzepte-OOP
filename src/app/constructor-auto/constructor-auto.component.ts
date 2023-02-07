import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Rad } from '../models/rad';
import { Motor } from '../models/motor';
import { Auto } from '../models/auto';

@Component({
  selector: 'app-constructor-auto',
  templateUrl: './constructor-auto.component.html'
})
export class ConstructorAutoComponent {

  form: FormGroup;

  @Input() motoren = new Array<Motor>();
  @Input() raeder = new Array<Rad>();

  constructor(
    private activeModal: NgbActiveModal
  ) {
    this.form = new FormGroup({
      "name": new FormControl("", Validators.required),
      "farbe": new FormControl("", Validators.required),
      "marke": new FormControl("", Validators.required),
      "motor": new FormControl<Motor | null>(null, Validators.required),
      "radVorneLinks": new FormControl<Rad | null>(null, Validators.required),
      "radVorneRechts": new FormControl<Rad | null>(null, Validators.required),
      "radHintenLinks": new FormControl<Rad | null>(null, Validators.required),
      "radHintenRechts": new FormControl<Rad | null>(null, Validators.required)
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.activeModal.close(new Auto(
        this.form.value.name,
        this.form.value.farbe,
        this.form.value.marke,
        this.form.value.motor,
        this.form.value.radVorneLinks,
        this.form.value.radVorneRechts,
        this.form.value.radHintenLinks,
        this.form.value.radHintenRechts
      ));
    }
  }

  close() {
    this.activeModal.dismiss();
  }

}
