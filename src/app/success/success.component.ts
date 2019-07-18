// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-success',
//   templateUrl: './success.component.html',
//   styleUrls: ['./success.component.scss']
// })
// export class SuccessComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(private regi: Router) { }

  ngOnInit() {
  }
  reg() {
    this.regi.navigate( ['register'] );
  }

}
