import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Motor } from '../models/motor';

@Component({
  selector: 'app-constructor-motor',
  templateUrl: './constructor-motor.component.html'
})
export class ConstructorMotorComponent {

  form: UntypedFormGroup;

  constructor(
    private activeModal: NgbActiveModal
  ) {
    this.form = new UntypedFormGroup({
      "name": new UntypedFormControl(null, Validators.required),
      "leistungInKw": new UntypedFormControl(null, Validators.required),
      "treibstoff": new UntypedFormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.activeModal.close(new Motor(this.form.value.name, this.form.value.leistungInKw, this.form.value.treibstoff));
    }
  }

  close() {
    this.activeModal.dismiss();
  }

}
