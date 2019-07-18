// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServiceService {

//   constructor() { }
// }
import { Injectable, EventEmitter, Output, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements OnInit {
  pass = 'priya';
  pas: string;


  constructor() { }

  // tslint:disable-next-line: contextual-lifecycle
  ngOnInit() {
    this.pas = this.pass;
    console.log(this.pas, 'ghfghmf');
  }
}
