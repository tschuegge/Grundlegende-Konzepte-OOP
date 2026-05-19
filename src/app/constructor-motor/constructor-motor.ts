import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Motor } from '../models/motor';
import { Treibstoff } from '../models/treibstoff';

@Component({
  selector: 'app-constructor-motor',
  imports: [ReactiveFormsModule],
  templateUrl: './constructor-motor.html'
})
export class ConstructorMotor {

  form: FormGroup;

  constructor(
    private activeModal: NgbActiveModal
  ) {
    this.form = new FormGroup({
      "name": new FormControl("", Validators.required),
      "leistungInKw": new FormControl<number | null>(null, Validators.required),
      "treibstoff": new FormControl<Treibstoff | null>(null, Validators.required)
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
