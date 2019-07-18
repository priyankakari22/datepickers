import { Component, OnInit , Output, EventEmitter, Input} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { IMyDrpOptions, IMyDateRangeModel } from 'mydaterangepicker';
import {
  IMyOptions,
  IMyDefaultMonth,
  IMyDateModel,
  IMyDpOptions
} from 'mydatepicker';


@Component({
  selector: 'app-dp1-child',
  templateUrl: './dp1-child.component.html',
  styleUrls: ['./dp1-child.component.scss']
})
export class Dp1ChildComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm-dd-yyyy',
    showTodayBtn: false,
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    todayBtnTxt: 'today',
    satHighlight: true,
    markCurrentDay: true,
    showDecreaseDateBtn: true
  };

  constructor(private fb1: FormBuilder) {}
  @Output() childDp1: EventEmitter<any> = new EventEmitter();
  @Input() item: any;

  d1: any;

  // child1: FormGroup;
  ngOnInit() {
    // this.child1 = this.fb1.group({
    //   dp1: new FormControl(),
    // });
    this.d1 = {date: {
      year: new Date().getFullYear(),
           month: new Date().getMonth() + 1,
           day: new Date().getDate()
    }};
}
Changed($event: any) {
    console.log($event);
    this.childDp1.emit($event.jsdate);
  }
  ngOnChanges() {
    console.log(this.item, 'item');
    this.d1 = {
      date: {
      year: new Date(this.item).getFullYear(),
           month: new Date(this.item).getMonth() + 1,
           day: new Date(this.item).getDate()
    }
  };
  }
}


