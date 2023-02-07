import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Rad } from '../models/rad';
import { Motor } from '../models/motor';
import { Auto } from '../models/auto';

@Component({
  selector: 'app-constructor-auto',
  templateUrl: './constructor-auto.component.html'
})
export class ConstructorAutoComponent {

  form: UntypedFormGroup;

  @Input() motoren = new Array<Motor>();
  @Input() raeder = new Array<Rad>();

  constructor(
    private activeModal: NgbActiveModal
  ) {
    this.form = new UntypedFormGroup({
      "name": new UntypedFormControl(null, Validators.required),
      "farbe": new UntypedFormControl(null, Validators.required),
      "marke": new UntypedFormControl(null, Validators.required),
      "motor": new UntypedFormControl(null, Validators.required),
      "radVorneLinks": new UntypedFormControl(null, Validators.required),
      "radVorneRechts": new UntypedFormControl(null, Validators.required),
      "radHintenLinks": new UntypedFormControl(null, Validators.required),
      "radHintenRechts": new UntypedFormControl(null, Validators.required)
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
