import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dp-parent',
  templateUrl: './dp-parent.component.html',
  styleUrls: ['./dp-parent.component.scss']
})
export class DpParentComponent implements OnInit {
  date1: any;
  reversedate: any;

  constructor() { }

  ngOnInit() {
  }
data(event) {
  this.date1 = event;
  console.log(this.date1)
}
reverse(event) {
  this.reversedate = event;
  console.log(this.reversedate, 'reversedate');
}

}
