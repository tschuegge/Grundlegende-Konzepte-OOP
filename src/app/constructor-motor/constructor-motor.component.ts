import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Motor } from '../models/motor';

@Component({
  selector: 'app-constructor-motor',
  templateUrl: './constructor-motor.component.html'
})
export class ConstructorMotorComponent implements OnInit {

  form: FormGroup;

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      "name": new FormControl(null, Validators.required),
      "leistungInKw": new FormControl(null, Validators.required),
      "treibstoff": new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.activeModal.close(new Motor(this.form.value.name, this.form.value.leistungInKw, this.form.value.treibstoff));
    }
  }

  close() {
    this.activeModal.dismiss();
  }

}
