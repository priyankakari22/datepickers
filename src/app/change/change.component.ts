// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-change',
//   templateUrl: './change.component.html',
//   styleUrls: ['./change.component.scss']
// })
// export class ChangeComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from './../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {

  constructor(private fb: FormBuilder, private serv: ServiceService, private chang: Router) { }
  change: FormGroup;
  oldp: any;
  password: any;

  ngOnInit() {
    this.oldp = this.serv;
    console.log(this.oldp.pass);

    this.change = this.fb.group({
      old: new FormControl({ value: '', disabled: false }, [
        Validators.required
      ]),
      new: new FormControl({ value: '', disabled: false }, [
        Validators.required
      ])
    });
  }
  conform() {

    if (this.change.value.old === this.oldp.pass) {
      this.password = true;
      this.oldp.pass = this.change.value.new;
      console.log(this.oldp.pass, 'new');


    } else {
      this.password = false;
    }

  }
  backtologin() {
    this.chang.navigate(['login']);
  }
}

