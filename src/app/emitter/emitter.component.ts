// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-emitter',
//   templateUrl: './emitter.component.html',
//   styleUrls: ['./emitter.component.scss']
// })
// export class EmitterComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, Input } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent implements OnInit {
  title = 'emitter';
  data1: any = '' ;
  form: FormGroup;
  a: any;
  value: any = '';
  info: any;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.form = this.formBuilder.group({
      input: new FormControl({value: ''}, [Validators.required]),
    });
  }
  // onEnter(value1: any) {
  //   // this.value = moment(value1).format('MM/DD/YYYY');
  //   this.value = value1.target.value;
  //   console.log(this.value);
  //  }
  data(event: any) {
     this.data1 = event;
     console.log(event);
}


}
