// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-fail',
//   templateUrl: './fail.component.html',
//   styleUrls: ['./fail.component.scss']
// })
// export class FailComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.scss']
})
export class FailComponent implements OnInit {

  constructor(private fails: Router) { }

  ngOnInit() {
  }
  relogin() {
    this.fails.navigate(['login']);
  }

}
