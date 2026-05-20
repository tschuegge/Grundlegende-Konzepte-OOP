import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Rad } from '../models/rad';
import { ReifenTyp } from '../models/reifen-typ';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-constructor-rad',
  imports: [ReactiveFormsModule, KeyValuePipe],
  templateUrl: './constructor-rad.html',
})
export class ConstructorRad {
  private activeModal = inject(NgbActiveModal);

  form: FormGroup;
  typen = ReifenTyp;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      reifentyp: new FormControl<ReifenTyp | null>(null, Validators.required),
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.activeModal.close(new Rad(this.form.value.name, this.form.value.reifentyp));
    }
  }

  close() {
    this.activeModal.dismiss();
  }
}
