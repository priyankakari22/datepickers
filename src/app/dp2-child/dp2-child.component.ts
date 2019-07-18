import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {
  IMyOptions,
  IMyDefaultMonth,
  IMyDateModel,
  IMyDpOptions
} from 'mydatepicker';

import * as moment from 'moment';

@Component({
  selector: 'app-dp2-child',
  templateUrl: './dp2-child.component.html',
  styleUrls: ['./dp2-child.component.scss']
})
export class Dp2ChildComponent implements OnInit {
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
  @Output() rev2: EventEmitter<any> = new EventEmitter();
  @Input() date2: any;
  constructor(private fb1: FormBuilder) {}
  child2: FormGroup;
  d2: any;
  ngOnInit() {
    this.d2 = {
      date: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
      }
    };
    this.child2 = this.fb1.group({
      dp2: new FormControl()
    });
  }
  OnDateChanged(event: IMyDateModel) {
    console.log(event);
    this.rev2.emit(event.jsdate);
  }
  ngOnChanges() {
    console.log(this.date2, 'date2');
    this.d2 = {
      date: {
        year: new Date(this.date2).getFullYear(),
        month: new Date(this.date2).getMonth() + 1,
        day: new Date(this.date2).getDate()
      }
    };
  }
}
