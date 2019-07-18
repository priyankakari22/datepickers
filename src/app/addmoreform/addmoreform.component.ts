import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-addmoreform',
  templateUrl: './addmoreform.component.html',
  styleUrls: ['./addmoreform.component.scss']
})
export class AddmoreformComponent implements OnInit {
  email: string[];
  num: string[];

  constructor(private fb: FormBuilder) {}
  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: this.fb.array([this.fb.group({ point: '' })], [Validators.required]),
      num: this.fb.array([this.fb.group({ point1: ['', [Validators.required]] })]),
    });
  }
  get mail() {
    return this.form.get('email') as FormArray;
  }
  get mob() {
    return this.form.get('num') as FormArray;
  }
  add() {
    this.mail.push(this.fb.group({ point: '' }));
  }

  delete(index: any) {
    this.mail.removeAt(index);
  }
  add1() {
    this.mob.push(this.fb.group({ point1: '' }));
  }
  delete1(index: any) {
    this.mob.removeAt(index);
  }
  onsubmit() {
    alert(JSON.stringify(this.form.value))
  }
}
