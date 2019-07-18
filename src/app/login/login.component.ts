// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() inform: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ServiceService
  ) { }
  login: FormGroup;

  data: any;
  // tslint:disable-next-line: comment-format
  //pass:any="priya"
  password: any = false;

  ngOnInit() {
    this.login = this.fb.group({
      name: new FormControl({ value: '', disabled: false }, [
        Validators.required
      ]),
      pswd: new FormControl({ value: '', disabled: false }, [
        Validators.required
      ])
    });
  }
  onsubmit() {
    this.data = this.login;
    console.log(this.data.value.pswd);
    this.inform = this.service;
    console.log(this.inform.pass, 'fhhjf');
    if (this.inform.pass === this.data.value.pswd) {
      this.router.navigate(['succuss']);
    } else {
      this.router.navigate(['fail']);
    }
  }
}

